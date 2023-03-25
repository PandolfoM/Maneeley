import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useContext } from "react";
import { db, storage } from "../firebase";
import { MenuContext } from "../context/MenuContext";

export default function useMenus() {
  const { menus, setMenus } = useContext(MenuContext);

  const getMenus = async () => {
    try {
      setMenus([]);
      const q = query(collection(db, "menus"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setMenus((current) => [...current, doc.data()]);
      });
    } catch (error) {
      return;
    }
  };

  const deleteMenuItem = async (category, item) => {
    await deleteObject(ref(storage, `${category}/${item.id}`));
    await updateDoc(doc(db, "menus", category), {
      items: arrayRemove(item),
    });

    let newArr = [...menus];
    const menuIndex = menus.findIndex((i) => i.id === category.toLowerCase());
    const itemIndex = newArr[menuIndex].items.findIndex(
      (i) => i.id === item.id
    );
    newArr[menuIndex].items.splice(itemIndex, 1);
    setMenus(newArr);
  };

  const addMenuItem = async (name, file, category) => {
    const id = uuidv4();
    const storageRef = ref(storage, `${category}/${id}`);
    await uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          await updateDoc(doc(db, "menus", category), {
            items: arrayUnion({ name: name, file: downloadURL, id }),
          });

          let newArr = [...menus];
          const menuIndex = menus.findIndex(
            (item) => category.toLowerCase() === item.id
          );
          newArr[menuIndex].items.push({ name: name, file: downloadURL, id });
          setMenus(newArr);
        } catch (e) {
          return;
        }
      });
    });
  };

  const editMenuItem = async (name, file, menu, item) => {
    await updateDoc(doc(db, "menus", menu), {
      items: arrayRemove(item),
    });

    if (file) {
      const storageRef = ref(storage, `${menu}/${item.id}`);

      // Delete previous file
      await deleteObject(storageRef);

      await uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "menus", menu), {
              items: arrayUnion({
                name: name ? name : item.name,
                file: downloadURL,
                id: item.id,
              }),
            });

            let newArr = [...menus];
            const menuIndex = menus.findIndex(
              (i) => i.id === menu.toLowerCase()
            );
            const itemIndex = newArr[menuIndex].items.findIndex(
              (i) => i.id === item.id
            );
            newArr[menuIndex].items[itemIndex] = {
              name: name ? name : item.name,
              file: downloadURL,
              id: item.id,
            };
            setMenus(newArr);
          } catch (e) {
            return e;
          }
        });
      });
    } else {
      await updateDoc(doc(db, "menus", menu), {
        items: arrayUnion({
          name: name ? name : item.name,
          file: item.file,
          id: item.id,
        }),
      });

      let newArr = [...menus];
      const menuIndex = menus.findIndex((i) => i.id === menu.toLowerCase());
      const itemIndex = newArr[menuIndex].items.findIndex(
        (i) => i.id === item.id
      );
      newArr[menuIndex].items[itemIndex] = {
        name: name ? name : item.name,
        id: item.id,
        file: item.file,
      };
      setMenus(newArr);
    }
  };

  return {
    getMenus,
    deleteMenuItem,
    addMenuItem,
    editMenuItem,
  };
}
