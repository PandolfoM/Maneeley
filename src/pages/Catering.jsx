import { Accordion } from "@mantine/core";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import Separator from "../components/Separator";
import { MenuContext } from "../context/MenuContext";

function Catering() {
  const { menus } = useContext(MenuContext);

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
        <Accordion variant="filled" transitionDuration={300}>
          {menus.map((m) => (
            <Accordion.Item value={m.name} key={m.id}>
              <Accordion.Control>{m.name} Menus</Accordion.Control>
              <Accordion.Panel>
                <div className="cateringMenus">
                  {m.items.map((i) => (
                    <div key={i.file} className="cateringMenus-item">
                      <a
                        href={i.file}
                        target="_blank"
                        className="cateringMenus-item-link">
                        {i.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </aside>
    </div>
  );
}

export default Catering;
