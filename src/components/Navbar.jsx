import { Burger } from "@mantine/core";
import React, { useState } from "react";
import logo from "../assets/maneeley-logo.png";
import AppDrawer from "./Drawer";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-content">
          <img src={logo} />
          <Burger
            opened={isOpened}
            onClick={() => setIsOpened(!isOpened)}
            title="Nav"
            color="white"
          />
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
