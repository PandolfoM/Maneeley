import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="icons">
          <a href="tel:8605286622">
            <FontAwesomeIcon icon={faPhone} size="lg" title="Phone" />
          </a>
          <a href="https://www.facebook.com/Maneeleys" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} size="lg" title="Facebook" />
          </a>
        </div>
        <h6>Helpful Links</h6>
        <p>
          <Link to={"catering"}>Catering</Link> |{" "}
          <Link to={"contact"}>Contact</Link> | <Link to={"admin"}>Admin</Link>
        </p>
        <p className="copyright">
          Copyright &copy; 2023 Maneeley's Banquet & Catering
        </p>
      </div>
    </div>
  );
}

export default Footer;
