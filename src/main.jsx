import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./auth/context";
import { MenuContextProvider } from "./context/MenuContext";
import "./index.css";

const theme = {
  colors: {
    maneeley: [
      "#fff7db",
      "#ffe6ad",
      "#ffd67e",
      "#fdc64c",
      "#fdb51c",
      "#e39c02",
      "#b17900",
      "#7f5700",
      "#4d3400",
      "#1d1000",
    ],
  },

  primaryColor: "maneeley",
  primaryShade: 4,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MenuContextProvider>
      <React.StrictMode>
        <MantineProvider withNormalizeCSS theme={theme}>
          <App />
        </MantineProvider>
      </React.StrictMode>
    </MenuContextProvider>
  </AuthContextProvider>
);
