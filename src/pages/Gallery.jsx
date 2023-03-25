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

  useEffect(() => {
    window.scrollTo(0, 0);

    const get = async () => {
      console.log("ran get");
      const docRef = doc(db, "images", "Gallery");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGallery(docSnap.data().images);
      } else {
        console.log("No document");
      }
    };

    !gallery.length > 0 && get();
  }, []);

  return (
    <Page id="gallery">
      <Separator title="Gallery" />
      {gallery ? (
        <ul className="gallery">
          {gallery.map((i) => (
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
