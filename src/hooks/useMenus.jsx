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
  console.log(menus);

  const deleteMenuItem = async (item, menu) => {
    await updateDoc(doc(db, "menus", menu.name), {
      items: arrayRemove(item),
    });
  };

  const deleteCategory = async (name) => {
    await deleteDoc(doc(db, "menus", name));
  };

  const addMenuItem = async ({ menu, file }, i) => {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          await updateDoc(doc(db, "menus", i.name), {
            items: arrayUnion({ name: menu, file: downloadURL }),
          });
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

  const editMenuItem = async (menu, file, currentMenu) => {
    await updateDoc(doc(db, "menus", currentMenu.doc), {
      items: arrayRemove({ name: currentMenu.menu, file: currentMenu.file }),
    });

    if (file) {
      const storageRef = ref(storage, file.name);

      // Delete previous file
      await deleteObject(ref(storage, currentMenu.file));

      await uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "menus", currentMenu.doc), {
              items: arrayUnion({ name: menu, file: downloadURL }),
            });
          } catch (e) {
            console.log(e);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "menus", currentMenu.doc), {
        items: arrayUnion({ name: menu, file: currentMenu.file }),
      });
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
