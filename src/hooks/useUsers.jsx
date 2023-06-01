import { modals } from "@mantine/modals";
import { signOut, updatePassword } from "firebase/auth";
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
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import { auth, db, functions } from "../firebase";

const ADMINLOGIN = "https://pandolfom.github.io/Maneeley/";

export default function useUsers() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

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
    if (currentUser.uid === user.uid) {
      modals.openConfirmModal({
        title: "Continue?",
        children: (
          <p>Are you sure you would like to remove yourself as admin?</p>
        ),
        labels: { confirm: "Confirm", cancel: "Cancel" },
        onCancel: () => {
          return;
        },
        onConfirm: async () => {
          await confirmDelete(user, users, setUsers);
          signOut(auth);
          setCurrentUser(null);
          navigate("/");
        },
      });
    } else {
      await confirmDelete(user, users, setUsers);
    }
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
          text: `Your account is waiting to for you! Login at ${ADMINLOGIN} with your temporary password "${createUserData.data.tempPass}"`,
          html: `
          <h1>Your account is waiting for you!</h1>
          <p>Log into the <a href="${ADMINLOGIN}">dashboard</a> with your temporary password "${createUserData.data.tempPass}"</p>
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

  const updateUser = async (data, users, setUsers) => {
    const updateUserHttp = httpsCallable(functions, "updateUser");
    const updateUserData = await updateUserHttp(data);
    if (updateUserData.data?.errorInfo) {
      return updateUserData.data.errorInfo.message;
    }

    if (data.customPassword) {
      await addDoc(collection(db, "mail"), {
        to: data.email,
        message: {
          subject: "Password Reset",
          text: `Your password has been reset! Login at ${ADMINLOGIN} with your temporary password '${updateUserData.data.tempPass}' to create a new one.`,
          html: `
          <h1>Your password has been reset!</h1>
          <p>Log into the <a href="${ADMINLOGIN}">dashboard</a> with your temporary password "${updateUserData.data.tempPass}" to create a new one.</p>
          `,
        },
      });
    }

    await updateDoc(doc(db, "users", updateUserData.data.uid), {
      email: data.email,
      username: data.username,
      tempPassword: data.customPassword,
    });

    let newArr = [...users];
    const userIndex = users.findIndex((i) => i.uid === updateUserData.data.uid);
    newArr[userIndex] = {
      email: data.email && data.email,
      username: data.username && data.username,
      uid: updateUserData.data.uid,
      tempPassword: data.customPassword,
    };
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
          return;
        }
      })
      .catch((e) => {
        return e;
      });
  };

  const confirmDelete = async (user, users, setUsers) => {
    const deleteAuth = httpsCallable(functions, "deleteAuth");
    await deleteAuth({ uid: user.uid });
    await deleteDoc(doc(db, "users", user.uid));
    let newArr = [...users];
    const userIndex = users.findIndex((i) => i.uid === user.uid);
    newArr.splice(userIndex, 1);
    setUsers(newArr);
  };

  const contactForm = async ({ first, last, email, phone, message }) => {
    try {
      await addDoc(collection(db, "mail"), {
        to: "sandy@maneeleys.com",
        message: {
          subject: "Maneeley's Contact Form",
          text: `
              - Name: ${first} ${last}
              - Email: ${email}
              - Phone: ${phone}
              - Message: ${message}
            `,
          html: `
            <h2>Contact Form</h2>
            <p>Name: ${first} ${last}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone ? phone : "N/A"}</p>
            <p>Message: ${message}</p>
            `,
        },
      });
      return;
    } catch (e) {
      return e;
    }
  };

  return {
    getUsers,
    getUser,
    deleteUserData,
    createUser,
    resetPassword,
    updateUser,
    contactForm,
  };
}
