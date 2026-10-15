import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { app } from "./app";

// Full Firestore SDK, used by the admin dashboard for writes.
export const db = getFirestore(app);

if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}
