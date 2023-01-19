import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./auth/context";
import { MenuContext, MenuContextProvider } from "./context/MenuContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MenuContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MenuContextProvider>
  </AuthContextProvider>
);
