import { useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [menus, setMenus] = useState([]);
  const [images, setImages] = useState([]);
  const [slideshow, setSlideshow] = useState([]);
  const [gallery, setGallery] = useState([]);

  return (
    <MenuContext.Provider
      value={{
        menus,
        setMenus,
        images,
        setImages,
        slideshow,
        setSlideshow,
        gallery,
        setGallery,
      }}>
      {children}
    </MenuContext.Provider>
  );
};
