import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavLinks({ currentUser, onClick }) {
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      scroll.scrollTo(document.getElementById("services").offsetTop, {
        duration: 500,
        smooth: true,
      });
    }, 100);
  };

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
      <li>
        <a
          href="/#services"
          onClick={(e) => {
            handleServicesClick(e);
            onClick();
          }}>
          Services
        </a>
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
