import { Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import logo from "../assets/maneeley-logo.png";
import AppDrawer from "./Drawer";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const view = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <header className="navbar">
        <div className={!view ? "navbar-content-mobile" : "navbar-content"}>
          <img src={logo} />
          {!view && (
            <Burger
              opened={isOpened}
              onClick={() => setIsOpened(!isOpened)}
              title="Nav"
              color="white"
            />
          )}
          <ul>
            <li>Home</li>
            <li>Weddings</li>
            <li>Catering</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      <AppDrawer
        className="drawer"
        opened={isOpened}
        setIsOpened={setIsOpened}
        title="Maneeley's"
        padding="xs">
        <ul>
          <li>Home</li>
          <li>Weddings</li>
          <li>Catering</li>
          <li>Contact</li>
        </ul>
      </AppDrawer>
    </>
  );
}

export default Navbar;
