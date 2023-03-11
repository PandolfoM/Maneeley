import { deleteUser } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";

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

  const deleteUserData = async (user, users, setUsers) => {
    // await deleteUser(user);
    // await deleteDoc(doc(db, "users", user.uid));
    // let newArr = [...users];
    // const userIndex = users.findIndex((i) => i.uid === user.uid);
    // newArr.splice(userIndex, 1);
    // setUsers(newArr);
  };

  return {
    getUsers,
    deleteUserData,
  };
}
