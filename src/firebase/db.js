import { getFirestore } from "firebase/firestore";
import { app } from "./app";

// Full Firestore SDK, used by the admin dashboard for writes.
export const db = getFirestore(app);
