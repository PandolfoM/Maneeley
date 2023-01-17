import { Burger } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/maneeley-logo.png";
import Drawer from "./Drawer";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const view = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <header className="navbar">
        <div className={"navbar-content"}>
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : undefined
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catering"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : undefined
                  }>
                  Catering
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : undefined
                  }>
                  Contact
                </NavLink>
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
            <NavLink
              to={"/"}
              onClick={() => setIsOpened(false)}
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/catering"}
              onClick={() => setIsOpened(false)}
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }>
              Catering
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              onClick={() => setIsOpened(false)}
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default Navbar;
