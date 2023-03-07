import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ currentUser }) {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/catering"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
          Catering
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
          Contact
        </NavLink>
      </li>
      {currentUser && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
