import {
  arrayRemove,
  arrayUnion,
  deleteField,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function useMenus() {
  const deleteMenuItem = async (item, menu) => {
    console.log(item);
    console.log(menu);

    await updateDoc(doc(db, "menus", menu.name.toLowerCase()), {
      items: arrayRemove(item),
    });
  };

  const addMenuItem = async ({ menu, link }, i) => {
    await updateDoc(doc(db, "menus", i.name.toLowerCase()), {
      items: arrayUnion({ name: menu, link: link }),
    });
  };

  return { deleteMenuItem, addMenuItem };
}
