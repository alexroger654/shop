import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { app } from "./firebase/firebase.config";

//uploading image to firebase
const uploadImage = async (img: File, name: string, folderName: string) => {
  const storage = getStorage(app);
  let imgUrl;
  const imageRef = ref(storage, `${folderName}/${name}`);
  try {
    const snapshot = await uploadBytes(imageRef, img);
    const url = await getDownloadURL(snapshot.ref);
    imgUrl = url;
  } catch (error) {
    // console.log(error);
  }
  return imgUrl;
};

export default uploadImage;
