import { Loader } from "@mantine/core";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { MenuContext } from "../context/MenuContext";
import { db } from "../firebase";

function ImageGallery() {
  const { gallery, setGallery } = useContext(MenuContext);
  const images = gallery.images;

  useEffect(() => {
    window.scrollTo(0, 0);

    const get = async () => {
      const docRef = doc(db, "images", "gallery");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGallery(docSnap.data());
      } else {
        console.log("No document");
      }
    };

    !gallery.id && get();
  }, []);

  return (
    <Page id="gallery">
      <Separator title="Gallery" />
      {images ? (
        <ul className="gallery">
          {images.map((i) => (
            <li className="gallery-item" key={i.id}>
              <LazyLoadImage
                src={i.file}
                style={{ maxWidth: "100%" }}
                alt={i.name}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <Loader size="xl" variant="bars" mx="auto" />
        </div>
      )}
    </Page>
  );
}

export default ImageGallery;
