import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useContext } from "react";
import imageCompression from "browser-image-compression";
import { db } from "../firebase/db";
import { storage } from "../firebase/storage";
import { MenuContext } from "../context/MenuContext";

const compressionOptions = {
  maxSizeMB: 0.3,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

// Smaller copy shown in the public gallery grid.
const thumbnailOptions = {
  maxSizeMB: 0.1,
  maxWidthOrHeight: 800,
  useWebWorker: true,
};

// Image paths are unique per upload and never overwritten, so browsers can
// cache them indefinitely.
const uploadMetadata = {
  cacheControl: "public, max-age=31536000, immutable",
};

const uploadImage = async (path, file) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file, uploadMetadata);
  return getDownloadURL(storageRef);
};

const getDimensions = (file) =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = reject;
    img.src = url;
  });

export default function useImages() {
  const { setImages } = useContext(MenuContext);

  const getImages = async () => {
    try {
      setImages([]);
      const q = query(collection(db, "images"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setImages((current) => [...current, doc.data()]);
      });
    } catch (error) {
      return;
    }
  };

  const deleteImage = async (category, item) => {
    await deleteObject(ref(storage, `${category}/${item.id}`));
    if (item.thumb) {
      await deleteObject(ref(storage, `${category}/thumbs/${item.id}`)).catch(
        () => {}
      );
    }
    await updateDoc(doc(db, "images", category), {
      images: arrayRemove(item),
    });

    setImages((current) =>
      current.map((c) =>
        c.id === category
          ? { ...c, images: c.images.filter((i) => i.id !== item.id) }
          : c
      )
    );
  };

  const addImage = async ({ file }, category) => {
    for (let i = 0; i < file.length; i++) {
      const id = crypto.randomUUID();
      const compressedFile = await imageCompression(
        file[i],
        compressionOptions
      );
      const downloadURL = await uploadImage(`${category}/${id}`, compressedFile);
      const { width, height } = await getDimensions(compressedFile);

      const item = {
        file: downloadURL,
        name: file[i].name.replace(/\.[^.]+/, ""),
        height,
        width,
        id,
      };

      if (category === "Gallery") {
        const thumbFile = await imageCompression(file[i], thumbnailOptions);
        item.thumb = await uploadImage(`${category}/thumbs/${id}`, thumbFile);
      }

      try {
        await updateDoc(doc(db, "images", category), {
          images: arrayUnion(item),
        });

        setImages((current) =>
          current.map((c) =>
            c.id === category ? { ...c, images: [...c.images, item] } : c
          )
        );
      } catch (e) {
        return;
      }
    }
  };

  return {
    getImages,
    deleteImage,
    addImage,
  };
}
