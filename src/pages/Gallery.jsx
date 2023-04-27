import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { db } from "../firebase";
import LazyImage from "../components/LazyImage";

function ImageGallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const get = async () => {
      const docRef = doc(db, "images", "Gallery");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGallery(docSnap.data().images);
      }
    };

    return () => {
      get();
    };
  }, []);

  return (
    <Page id="gallery">
      <Separator title="Gallery" />
      <ul className="gallery">
        {gallery.map((i) => (
          <LazyImage
            src={i.file}
            alt={i.name}
            id={i.id}
            style={{ maxWidth: "100%" }}
            key={i.id}
          />
        ))}
      </ul>
    </Page>
  );
}

export default ImageGallery;
