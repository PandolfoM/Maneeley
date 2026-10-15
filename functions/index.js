const { randomInt } = require("node:crypto");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");
// v1 (1st gen) API, so these deploy in place over the existing functions.
const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
admin.initializeApp();

const { HttpsError } = functions.https;

const PASSWORD_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

function randomPass() {
  let pass = "";
  for (let i = 0; i < 10; i++) {
    pass += PASSWORD_CHARS.charAt(randomInt(PASSWORD_CHARS.length));
  }
  return pass;
}

// Only signed-in dashboard admins (users with a doc in the `users`
// collection) may manage accounts.
async function assertAdmin(context) {
  if (!context.auth) {
    throw new HttpsError("unauthenticated", "You must be signed in.");
  }

  const adminDoc = await getFirestore()
    .collection("users")
    .doc(context.auth.uid)
    .get();
  if (!adminDoc.exists) {
    throw new HttpsError("permission-denied", "Admins only.");
  }
}

exports.deleteAuth = functions.https.onCall(async (data, context) => {
  await assertAdmin(context);

  return getAuth()
    .deleteUser(data.uid)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });
});

exports.createUser = functions.https.onCall(async (data, context) => {
  await assertAdmin(context);

  const tempPass = data.customPassword ? randomPass() : null;
  return getAuth()
    .createUser({
      email: data.email,
      displayName: data.username,
      password: tempPass || data.password,
    })
    .then((userRecord) => {
      return {
        uid: userRecord.uid,
        tempPass,
      };
    })
    .catch((error) => {
      return error;
    });
});

exports.updateUser = functions.https.onCall(async (data, context) => {
  await assertAdmin(context);

  const tempPass = !data.password && data.customPassword ? randomPass() : null;
  const newPassword = data.password || tempPass;

  return getAuth()
    .getUserByEmail(data.oldEmail)
    .then((userRecord) => {
      return getAuth()
        .updateUser(userRecord.uid, {
          email: data.email ? data.email : userRecord.email,
          displayName: data.username ? data.username : userRecord.displayName,
          // Only change the password when one is actually being set.
          ...(newPassword && { password: newPassword }),
        })
        .then((userRecord) => {
          return {
            uid: userRecord.uid,
            tempPass,
          };
        })
        .catch((e) => {
          return e;
        });
    })
    .catch((e) => {
      return e;
    });
});
