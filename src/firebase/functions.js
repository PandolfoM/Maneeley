import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { app } from "./app";

export const functions = getFunctions(app);

if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
