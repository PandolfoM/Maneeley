import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faFax, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="icons">
          <a href="tel:8605286622">
            <FontAwesomeIcon icon={faSquarePhone} size="xl" title="Phone" />
          </a>
          <a href="tel:8602919362">
            <FontAwesomeIcon icon={faFax} size="lg" title="Fax" />
          </a>
          <a href="https://www.facebook.com/Maneeleys" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="lg" title="Facebook" />
          </a>
        </div>
        <h6>Helpful Links</h6>
        <p>
          <Link to={"catering"}>Catering</Link> |{" "}
          <Link to={"contact"}>Contact</Link>
        </p>
        <p className="copyright">
          Copyright &copy; 2023 Maneeley's Banquet & Catering
        </p>
      </div>
    </div>
  );
}

export default Footer;
