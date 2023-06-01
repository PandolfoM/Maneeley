import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ currentUser, onClick }) {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          onClick={onClick}
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="gallery"
          onClick={onClick}
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          onClick={onClick}
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
          Contact
        </NavLink>
      </li>
      {currentUser && (
        <li>
          <NavLink
            to="dashboard"
            onClick={onClick}
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
