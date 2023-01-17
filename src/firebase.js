import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP58d2wJtCr61H3YU1x9FJWOmFDeJp2cI",
  authDomain: "maneeley.firebaseapp.com",
  projectId: "maneeley",
  storageBucket: "maneeley.appspot.com",
  messagingSenderId: "389834143699",
  appId: "1:389834143699:web:c4e601b52ceeba60a02126",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
