import React from "react";
import { Link } from "react-router-dom";
import Menus from "../components/Menus";
import Page from "../components/Page";
import useMenuDoc from "../hooks/useMenuDoc";

function Catering() {
  const menus = useMenuDoc("Catering");

  return (
    <Page flex>
      <div>
        <p style={{ whiteSpace: "break-spaces" }}>
          Whether you're looking for a full service dinner at an event venue of
          your choice, a cocktail party at work, or back yard cook out,
          Maneeley's Catering is always ready to assist.
        </p>
        <p style={{ whiteSpace: "break-spaces" }}>
          We have a wide variety of menus for every occasion and are happy to
          help you customize them to fit your needs. Pick up Express Trays of
          food are also available! If you are looking to have an event catered
          with food brought to you, have a party at home, or to simply order
          lunch for your workplace, please view our Catering Menus and
          <Link to="/contact" className="activeLink">
            {" "}
            contact{" "}
          </Link>
          our team today!
        </p>
      </div>
      <Menus menus={menus} />
    </Page>
  );
}

export default Catering;
