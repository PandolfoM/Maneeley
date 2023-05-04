import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { db } from "../firebase";
import LazyImage from "../components/LazyImage";
import { MenuContext } from "../context/MenuContext";
import { Text } from "@mantine/core";

function ImageGallery() {
  const { gallery, setGallery } = useContext(MenuContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    const get = async () => {
      const docRef = doc(db, "images", "Gallery");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGallery(docSnap.data().images);
      }
    };

    gallery.length === 0 && get();
  }, []);

  return (
    <Page id="gallery">
      <Separator title="Gallery" />
      <Text color="#bbb" fw="lighter" size="sm" align="center">
        Photos were provided by Nick Rezendez
      </Text>
      {gallery && (
        <ul className="gallery">
          {gallery.map((i) => (
            <li className="gallery-item" key={i.id}>
              <LazyImage
                src={i.file}
                alt={i.name}
                id={i.id}
                style={{ maxWidth: "100%" }}
              />
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}

export default ImageGallery;
