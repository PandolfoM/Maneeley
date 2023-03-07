import { Accordion } from "@mantine/core";
import React from "react";
import Separator from "./Separator";

function Menus({ menus }) {
  return (
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
  );
}

export default Menus;
