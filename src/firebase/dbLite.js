import {
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore/lite";
import { app } from "./app";

// Lightweight read-only Firestore client for public pages.
export const dbLite = getFirestore(app);

if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectFirestoreEmulator(dbLite, "127.0.0.1", 8080);
}
export { doc, getDoc } from "firebase/firestore/lite";
