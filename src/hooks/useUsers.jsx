import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
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

  const deleteUserData = async (user, users, setUsers) => {
    const deleteAuth = httpsCallable(functions, "deleteAuth");
    deleteAuth({ uid: user.uid }).then(() => {
      deleteDoc(doc(db, "users", user.uid)).then(() => {
        let newArr = [...users];
        const userIndex = users.findIndex((i) => i.uid === user.uid);
        newArr.splice(userIndex, 1);
        setUsers(newArr);
      });
    });
  };

  return {
    getUsers,
    deleteUserData,
  };
}
