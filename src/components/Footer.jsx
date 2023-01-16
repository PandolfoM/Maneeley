import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFax, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon } from "@mantine/core";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="icons">
          <a href="/">
            <FontAwesomeIcon icon={faSquarePhone} size="xl" title="Phone" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faFax} size="lg" title="Fax" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faFacebook} size="lg" title="Facebook" />
          </a>
        </div>
        <h6>Helpful Links</h6>
        <p>Catering | Contact</p>
        <p className="copyright">
          Copyright &copy; 2023 Maneeley's Banquet & Catering
        </p>
      </div>
    </div>
  );
}

export default Footer;
