import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFax, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-icons">
          <FontAwesomeIcon icon={faSquarePhone} size="xl" title="Phone" />
          <FontAwesomeIcon icon={faFax} size="xl" title="Fax" />
          <FontAwesomeIcon icon={faFacebook} size="xl" title="Facebook" />
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
