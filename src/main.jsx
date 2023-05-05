import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./auth/context";
import { MenuContextProvider } from "./context/MenuContext";
import "./index.css";
import { Notifications } from "@mantine/notifications";

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
  colorScheme: "dark",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MenuContextProvider>
      <React.StrictMode>
        <MantineProvider withNormalizeCSS theme={theme}>
          <ModalsProvider>
            <Notifications />
            <App />
          </ModalsProvider>
        </MantineProvider>
      </React.StrictMode>
    </MenuContextProvider>
  </AuthContextProvider>
);
