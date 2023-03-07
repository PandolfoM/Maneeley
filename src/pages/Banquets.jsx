import React from "react";
import { useContext } from "react";
import Menus from "../components/Menus";
import Page from "../components/Page";

import { MenuContext } from "../context/MenuContext";

function Banquets() {
  const { menus } = useContext(MenuContext);

  return (
    <Page flex>
      <div>
        <p>banquets</p>
      </div>
      <Menus menus={menus} />
    </Page>
  );
}

export default Banquets;
