import { useEffect, useState } from "react";
import { dbLite, doc, getDoc } from "../firebase/dbLite";

// Fetches a single menu document (e.g. "Banquets") for the public menu pages.
export default function useMenuDoc(name) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDoc(doc(dbLite, "menus", name)).then((docSnap) => {
      if (docSnap.exists()) {
        setMenus(docSnap.data());
      }
    });
  }, [name]);

  return menus;
}
