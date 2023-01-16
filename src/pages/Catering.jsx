import { Accordion, createStyles } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { CateringMenus, CorpMenus, HolidayMenus } from "../components/menus";

import Separator from "../components/Separator";

function Catering() {
  return (
    <div className="catering">
      <div>
        <p>
          Whatever the occasion, Maneeley’s Catering executes each event with
          skill, pride and professionalism.
        </p>
        <p>
          Whether you’re looking for a full service dinner, cocktail party or
          back yard cook out, Maneeley’s Catering is always ready to assist in
          planning that special day!
        </p>
        <p>
          At Maneeley’s Catering, we offer menus for a variety of celebrations
          and events. If you are looking to have an event catered at your place
          of business or to simply order lunch for your staff please view our
          menus below.
        </p>
        <p>
          For any questions on our catering menu, please{" "}
          <Link to="/contact">contact us today.</Link>
        </p>
      </div>
      <aside className="catering-menus">
        <Separator title={"Menus"} />
        <Accordion
          variant="filled"
          defaultValue="cateringMenus"
          transitionDuration={300}>
          <Accordion.Item value="cateringMenus">
            <Accordion.Control>Catering Menus</Accordion.Control>
            <Accordion.Panel>
              <CateringMenus />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="corporateMenus">
            <Accordion.Control>Corporate Catering Menus</Accordion.Control>
            <Accordion.Panel>
              <CorpMenus />
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="holidayMenus">
            <Accordion.Control>Holiday Catering Menus</Accordion.Control>
            <Accordion.Panel>
              <HolidayMenus />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </aside>
    </div>
  );
}

export default Catering;
