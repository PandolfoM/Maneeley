import { Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext, useState } from "react";

import logo from "../assets/maneeley-logo.png";
import { AuthContext } from "../auth/context";
import Drawer from "./Drawer";
import NavLinks from "./NavLinks";

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [isOpened, setIsOpened] = useState(false);
  const view = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <header className="navbar">
        <div className="navbar-content">
          <img src={logo} />
          {!view ? (
            <Burger
              opened={isOpened}
              onClick={() => setIsOpened(!isOpened)}
              title="Nav"
              color="white"
              size="sm"
            />
          ) : (
            <NavLinks currentUser={currentUser} />
          )}
        </div>
      </header>
      <Drawer
        className="drawer"
        opened={isOpened}
        setIsOpened={setIsOpened}
        title="Maneeley's"
        padding="xs">
        <NavLinks currentUser={currentUser} />
      </Drawer>
    </>
  );
}

export default Navbar;
