import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Maneeley/",
  define: {
    "import.meta.env.VITE_APIKEY": JSON.stringify(process.env.APIKEY),
    "import.meta.env.VITE_AUTHDOMAIN": JSON.stringify(process.env.AUTHDOMAIN),
    "import.meta.env.VITE_PROJECTID": JSON.stringify(process.env.PROJECTID),
    "import.meta.env.VITE_STORAGEBUCKET": JSON.stringify(
      process.env.STORAGEBUCKET
    ),
    "import.meta.env.VITE_MESSAGINGSENDERID": JSON.stringify(
      process.env.MESSAGINGSENDERID
    ),
    "import.meta.env.APPID": JSON.stringify(process.env.APPID),
  },
});
