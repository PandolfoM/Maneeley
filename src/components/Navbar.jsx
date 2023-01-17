import { Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/maneeley-logo.png";
import Drawer from "./Drawer";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const view = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <header className="navbar">
        <div className={!view ? "navbar-content-mobile" : "navbar-content"}>
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
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/catering"}>Catering</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          )}
        </div>
      </header>
      <Drawer
        className="drawer"
        opened={isOpened}
        setIsOpened={setIsOpened}
        title="Maneeley's"
        padding="xs">
        <ul>
          <li>
            <Link to={"/"} onClick={() => setIsOpened(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/catering"} onClick={() => setIsOpened(false)}>
              Catering
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setIsOpened(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default Navbar;
