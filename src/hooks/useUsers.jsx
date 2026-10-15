import { modals } from "@mantine/modals";
import { signOut, updatePassword } from "firebase/auth";
import {
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
import { auth } from "../firebase/auth";
import { db } from "../firebase/db";
import { functions } from "../firebase/functions";
import sendEmail from "../utils/sendEmail";

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

  // Emails the user their temporary password. Returns true if it was sent.
  const sendTempPasswordEmail = async (
    to,
    subject,
    text,
    emailProps,
    captchaToken
  ) => {
    try {
      const res = await sendEmail({
        from: "Maneeley's Banquet & Catering",
        to,
        subject,
        emailProps,
        text,
        captchaToken,
      });
      return res.ok;
    } catch (e) {
      return false;
    }
  };

  const createUser = async (data, users, setUsers, captchaToken) => {
    const createUserHttp = httpsCallable(functions, "createUser");
    const createUserData = await createUserHttp(data);
    if (createUserData.data?.errorInfo) {
      return createUserData.data.errorInfo.message;
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

    if (data.customPassword) {
      const sent = await sendTempPasswordEmail(
        data.email,
        "Account Activated",
        `Your account is waiting to for you! Login at ${ADMINLOGIN} with your temporary password "${createUserData.data.tempPass}"`,
        {
          "Your account is waiting for you": `Log into the dashboard at ${ADMINLOGIN}`,
          "Temporary password": createUserData.data.tempPass,
        },
        captchaToken
      );
      if (!sent) {
        return "User created, but the login email could not be sent.";
      }
    }
  };

  const updateUser = async (data, users, setUsers, captchaToken) => {
    const updateUserHttp = httpsCallable(functions, "updateUser");
    const updateUserData = await updateUserHttp(data);
    if (updateUserData.data?.errorInfo) {
      return updateUserData.data.errorInfo.message;
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

    if (data.customPassword) {
      const sent = await sendTempPasswordEmail(
        data.email,
        "Password Reset",
        `Your password has been reset! Login at ${ADMINLOGIN} with your temporary password '${updateUserData.data.tempPass}' to create a new one.`,
        {
          "Your password has been reset": `Log into the dashboard at ${ADMINLOGIN}`,
          "Temporary password": `${updateUserData.data.tempPass} (you'll be asked to create a new one)`,
        },
        captchaToken
      );
      if (!sent) {
        return "Password reset, but the email could not be sent.";
      }
    }
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

  return {
    getUsers,
    getUser,
    deleteUserData,
    createUser,
    resetPassword,
    updateUser,
  };
}
