import { Accordion, createStyles } from "@mantine/core";
import React from "react";
import Separator from "./Separator";

const useStyles = createStyles((theme, params, getRef) => ({
  chevron: {
    color: "white",
  },
  label: {
    color: "#bbb",
  },
  control: {
    backgroundColor: "#2e2e2e80",
    "&:hover": {
      backgroundColor: "#3c3c3c",
    },
  },
  item: {
    marginBottom: "0.5rem",
    overflow: "hidden",
    "&[data-active]": {
      backgroundColor: "#2e2e2e80",
    },
  },
}));

function Menus({ menus }) {
  const { classes } = useStyles();
  return (
    <aside className="catering-menus">
      <Separator title={"Menus"} />
      <Accordion variant="filled" transitionDuration={300} classNames={classes}>
        {menus.map((m) => (
          <Accordion.Item value={m.name} key={m.id}>
            <Accordion.Control>{m.name} Menus</Accordion.Control>
            <Accordion.Panel>
              <div className="item">
                {m.items.map((i) => (
                  <div key={i.file} className="item-item">
                    <a href={i.file} target="_blank" className="item-item-link">
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
