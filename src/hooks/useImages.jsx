import { uuidv4 } from "@firebase/util";
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
import { db, storage } from "../firebase";
import { MenuContext } from "../context/MenuContext";

const compressionOptions = {
  maxSizeMB: 0.3,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export default function useImages() {
  const { images, setImages } = useContext(MenuContext);

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
    await updateDoc(doc(db, "images", category), {
      images: arrayRemove(item),
    });

    let newArr = [...images];
    const categoryIndex = images.findIndex((i) => i.id === category);
    const imageIndex = newArr[categoryIndex].images.findIndex(
      (i) => i.id === item.id
    );
    newArr[categoryIndex].images.splice(imageIndex, 1);
    setImages(newArr);
  };

  const addImage = async ({ file }, category) => {
    for (let i = 0; i < file.length; i++) {
      const id = uuidv4();
      const storageRef = ref(storage, `${category}/${id}`);
      const compressedFile = await imageCompression(
        file[i],
        compressionOptions
      );
      await uploadBytes(storageRef, compressedFile).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          const img = new Image();
          img.src = downloadURL;

          img.onload = async () => {
            try {
              await updateDoc(doc(db, "images", category), {
                images: arrayUnion({
                  file: downloadURL,
                  name: file[i].name.replace(/\.[^.]+/, ""),
                  height: img.height,
                  width: img.width,
                  id,
                }),
              });

              let newArr = [...images];
              const imageIndex = images.findIndex((i) => category === i.id);
              newArr[imageIndex].images.push({
                file: downloadURL,
                name: file[i].name.replace(/\.[^.]+/, ""),
                height: img.height,
                width: img.width,
                id,
              });
              setImages(newArr);
            } catch (e) {
              return;
            }
          };
        });
      });
    }
  };

  return {
    getImages,
    deleteImage,
    addImage,
  };
}
