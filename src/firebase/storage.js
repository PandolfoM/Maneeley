import { connectStorageEmulator, getStorage } from "firebase/storage";
import { app } from "./app";

export const storage = getStorage(app);

if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectStorageEmulator(storage, "127.0.0.1", 9199);
}
