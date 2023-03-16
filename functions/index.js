const { getAuth } = require("firebase-admin/auth");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

var pass = "";
function randomPass() {
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= 16; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }
  return pass;
}

exports.deleteAuth = functions.https.onCall((data, context) => {
  getAuth()
    .deleteUser(data.uid)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error;
    });
});

exports.createUser = functions.https.onCall((data, context) => {
  return getAuth()
    .createUser({
      email: data.email,
      displayName: data.username,
      password: data.customPassword ? randomPass() : data.password,
    })
    .then((userRecord) => {
      return {
        uid: userRecord.uid,
        tempPass: pass,
      };
    })
    .catch((error) => {
      return error;
    });
});

exports.updateUser = functions.https.onCall(async (data, context) => {
  return getAuth()
    .getUserByEmail(data.oldEmail)
    .then((userRecord) => {
      return getAuth()
        .updateUser(userRecord.uid, {
          email: data.email ? data.email : userRecord.email,
          displayName: data.username ? data.username : userRecord.displayName,
          password: data.password ? data.password : userRecord.passwordHash,
        })
        .then((userRecord) => {
          return userRecord.uid;
        })
        .catch((e) => {
          return e;
        });
    })
    .catch((e) => {
      return e;
    });
});
