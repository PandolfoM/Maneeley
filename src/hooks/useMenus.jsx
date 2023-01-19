import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
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

  const deleteMenuItem = async (item, menu) => {
    await updateDoc(doc(db, "menus", menu.name), {
      items: arrayRemove(item),
    });

    let newArr = [...menus];
    const menuIndex = menus.findIndex((i) => i.id === menu.id);
    const itemIndex = newArr[menuIndex].items.findIndex(
      (i) => i.id === item.id
    );
    newArr[menuIndex].items.splice(itemIndex, 1);
    setMenus(newArr);
  };

  const deleteCategory = async ({ name, id }) => {
    await deleteDoc(doc(db, "menus", name));

    const newArr = [...menus];
    const menuIndex = menus.findIndex((item) => item.id === id);
    newArr.splice(menuIndex, 1);
    setMenus(newArr);
  };

  const addMenuItem = async ({ menu, file }, i) => {
    const storageRef = ref(storage, file.name);
    const id = uuidv4();
    await uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          await updateDoc(doc(db, "menus", i.name), {
            items: arrayUnion({ name: menu, file: downloadURL, id }),
          });

          let newArr = [...menus];
          const menuIndex = menus.findIndex((item) => item.id === i.id);
          newArr[menuIndex].items.push({ name: menu, file: downloadURL, id });
          setMenus(newArr);
        } catch (e) {
          console.log(e);
        }
      });
    });
  };

  const addMenuCategory = async ({ name }) => {
    let id = uuidv4();
    await setDoc(doc(db, "menus", name), {
      id,
      items: [],
      name,
    });

    setMenus((current) => [...current, { name, items: [], id }]);
  };

  const editMenuItem = async ({ name, file }, menu, item) => {
    await updateDoc(doc(db, "menus", menu.name), {
      items: arrayRemove(item),
    });

    if (file) {
      const storageRef = ref(storage, file.name);

      // Delete previous file
      await deleteObject(ref(storage, item.file));

      await uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "menus", menu.name), {
              items: arrayUnion({
                name: name,
                file: downloadURL,
                id: item.id,
              }),
            });

            let newArr = [...menus];
            const menuIndex = menus.findIndex((i) => i.id === menu.id);
            const itemIndex = newArr[menuIndex].items.findIndex(
              (i) => i.id === item.id
            );
            newArr[menuIndex].items[itemIndex] = {
              name,
              file: downloadURL,
              id: item.id,
            };
            setMenus(newArr);
          } catch (e) {
            console.log(e);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "menus", menu.name), {
        items: arrayUnion({
          name: name,
          file: item.file,
          id: item.id,
        }),
      });

      let newArr = [...menus];
      const menuIndex = menus.findIndex((i) => i.id === menu.id);
      const itemIndex = newArr[menuIndex].items.findIndex(
        (i) => i.id === item.id
      );
      newArr[menuIndex].items[itemIndex] = {
        name,
        id: item.id,
        file: item.file,
      };
      setMenus(newArr);
    }
  };

  return {
    deleteMenuItem,
    addMenuItem,
    editMenuItem,
    addMenuCategory,
    deleteCategory,
  };
}
