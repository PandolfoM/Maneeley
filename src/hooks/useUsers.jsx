import { updatePassword } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { db, functions } from "../firebase";

export default function useUsers() {
  const getUsers = async () => {
    let users = [];
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  };

  const getUser = async (uid) => {
    const q = doc(db, "users", uid);
    const docSnap = await getDoc(q);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return false;
    }
  };

  const deleteUserData = async (user, users, setUsers) => {
    const deleteAuth = httpsCallable(functions, "deleteAuth");
    await deleteAuth({ uid: user.uid });
    await deleteDoc(doc(db, "users", user.uid));
    let newArr = [...users];
    const userIndex = users.findIndex((i) => i.uid === user.uid);
    newArr.splice(userIndex, 1);
    setUsers(newArr);
  };

  const createUser = async (data, users, setUsers) => {
    const createUserHttp = httpsCallable(functions, "createUser");
    const createUserData = await createUserHttp(data);
    if (createUserData.data?.errorInfo) {
      return createUserData.data.errorInfo.message;
    }

    if (data.customPassword) {
      await addDoc(collection(db, "mail"), {
        to: data.email,
        message: {
          subject: "Account Activated",
          text: `Your account is waiting to for you! Login at http://localhost:5173/Maneeley/admin with your temporary password "${createUserData.data.tempPass}" `,
          html: `
          <h1>Your account is waiting for you!</h1>
          <p>Log into the <a href="http://localhost:5173/Maneeley/admin">dashboard</a> with your temporary password "${createUserData.data.tempPass}"</p>
          `,
        },
      });
    }

    await setDoc(doc(db, "users", createUserData.data.uid), {
      email: data.email,
      username: data.username,
      uid: createUserData.data.uid,
      tempPassword: data.customPassword,
    });

    let newArr = [...users];
    newArr.push({
      email: data.email,
      username: data.username,
      uid: createUserData.data.uid,
      tempPassword: data.customPassword,
    });
    setUsers(newArr);
  };

  const resetPassword = async (password, user, tempPassword) => {
    await updatePassword(user, password)
      .then(() => {
        if (tempPassword) {
          return updateDoc(doc(db, "users", user.uid), {
            tempPassword: false,
          });
        } else {
          console.log("not set yet");
        }
      })
      .catch((e) => {
        return e;
      });
  };

  return {
    getUsers,
    getUser,
    deleteUserData,
    createUser,
    resetPassword,
  };
}
