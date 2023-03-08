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
        <p style={{ whiteSpace: "break-spaces" }}>
          Planning an event - whether it's a birthday gathering or an elaborate
          corporate event - is not an easy task.
        </p>
        <p>
          Our team of planning experts is here to guide you through the process
          of turning your vision into reality. Our attention to detail will
          ensure that your social celebration will run smoothly and
          successfully.
        </p>
        <p>
          Our skilled, experienced chefs offer a wide variety of menus that
          feature exquisite dishes for all occasions, and we are happy to
          accommodate any dietary restrictions you or your guests may have. To
          learn more about our fabulous food, we invite you to view our menu
          selections.{" "}
        </p>
      </div>
      <Menus menus={menus} />
    </Page>
  );
}

export default Banquets;
