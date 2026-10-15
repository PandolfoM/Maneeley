import { getFirestore } from "firebase/firestore/lite";
import { app } from "./app";

// Lightweight read-only Firestore client for public pages.
export const dbLite = getFirestore(app);
export { doc, getDoc } from "firebase/firestore/lite";
