import { useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [images, setImages] = useState([]);
  const [slideshow, setSlideshow] = useState([]);

  return (
    <MenuContext.Provider
      value={{
        menus,
        setMenus,
        images,
        setImages,
        slideshow,
        setSlideshow,
      }}>
      {children}
    </MenuContext.Provider>
  );
};
