import { Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/maneeley-logo.webp";
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
          <Link to={"/"}>
            <img src={logo} />
          </Link>
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
        padding="xs"
        size={"10rem"}
        zIndex={910}>
        <NavLinks
          currentUser={currentUser}
          onClick={() => setIsOpened(false)}
        />
      </Drawer>
    </>
  );
}

export default Navbar;
