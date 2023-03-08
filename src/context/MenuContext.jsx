import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [images, setImages] = useState([]);
  const [slideshow, setSlideshow] = useState([]);

  useEffect(() => {
    const unsub = async () => {
      const q = query(collection(db, "menus"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setMenus((current) => [...current, doc.data()]);
      });
    };

    unsub();
  }, []);

  return (
    <MenuContext.Provider
      value={{ menus, setMenus, images, setImages, slideshow, setSlideshow }}>
      {children}
    </MenuContext.Provider>
  );
};
