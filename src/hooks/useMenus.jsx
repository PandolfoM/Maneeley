import {
  arrayRemove,
  arrayUnion,
  deleteField,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";

export default function useMenus() {
  const deleteMenuItem = async (item, menu) => {
    await updateDoc(doc(db, "menus", menu.name.toLowerCase()), {
      items: arrayRemove(item),
    });
  };

  const addMenuItem = async ({ menu, file }, i) => {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          await updateDoc(doc(db, "menus", i.name.toLowerCase()), {
            items: arrayUnion({ name: menu, file: downloadURL }),
          });
        } catch (e) {
          console.log(e);
        }
      });
    });
  };

  const editMenuItem = async (menu, file, currentMenu) => {
    await updateDoc(doc(db, "menus", currentMenu.doc.toLowerCase()), {
      items: arrayRemove({ name: currentMenu.menu, file: currentMenu.file }),
    });

    if (file) {
      const storageRef = ref(storage, file.name);
      await uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "menus", currentMenu.doc.toLowerCase()), {
              items: arrayUnion({ name: menu, file: downloadURL }),
            });
          } catch (e) {
            console.log(e);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "menus", currentMenu.doc.toLowerCase()), {
        items: arrayUnion({ name: menu, file: currentMenu.file }),
      });
    }

    // await updateDoc(doc(db, "menus", currentMenu.doc)),
    //   {
    //     items: arrayUnion({ name: menu, file: file }),
    //   };
  };

  return { deleteMenuItem, addMenuItem, editMenuItem };
}
