const { getAuth } = require("firebase-admin/auth");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

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
      password: data.password,
    })
    .then((userRecord) => {
      return userRecord.uid;
    })
    .catch((error) => {
      return error;
    });
});
