import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useContext } from "react";
import { db, storage } from "../firebase";
import { MenuContext } from "../context/MenuContext";

export default function useImages() {
  const { images, setImages } = useContext(MenuContext);

  const getImages = async () => {
    const q = query(collection(db, "images"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setImages((current) => [...current, doc.data()]);
    });
  };

  const deleteImage = async (category, item) => {
    category = category.toLowerCase();
    await deleteObject(ref(storage, item.id));
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
    category = category.toLowerCase();
    const id = uuidv4();
    const storageRef = ref(storage, id);
    await uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          await updateDoc(doc(db, "images", category), {
            images: arrayUnion({
              file: downloadURL,
              name: file.name.replace(/\.[^.]+/, ""),
              id,
            }),
          });

          let newArr = [...images];
          const imageIndex = images.findIndex((i) => category === i.id);
          newArr[imageIndex].images.push({
            name: file.name.replace(/\.[^.]+/, ""),
            file: downloadURL,
            id,
          });
          setImages(newArr);
        } catch (e) {
          console.log(e);
        }
      });
    });
  };

  return {
    getImages,
    deleteImage,
    addImage,
  };
}
