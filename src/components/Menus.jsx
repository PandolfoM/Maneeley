import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Alert, createStyles, Loader } from "@mantine/core";
import React from "react";
import Separator from "./Separator";

const useStyles = createStyles((theme, params) => ({
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
  root: {
    backgroundColor: "#2e2e2e80",
    color: "#f53434",
    borderColor: "#f53434",
  },
}));

function Menus({ menus }) {
  const { classes } = useStyles();

  return (
    <aside className="catering-menus">
      <Separator title={menus.name ? `${menus.name} Menus` : " Menus"} />
      {menus.items ? (
        <>
          {menus.items.length === 0 ? (
            <Alert
              className={classes.root}
              icon={<FontAwesomeIcon icon={faCircleExclamation} />}
              title="No Menus"
              color={"red"}
              variant="outline">
              There appears to be no menus yet. Check back again later.
            </Alert>
          ) : (
            <Accordion
              defaultValue={menus.name}
              variant="filled"
              transitionDuration={300}
              classNames={classes}>
              <Accordion.Item value={menus.name} key={menus.id}>
                <Accordion.Control>{menus.name} Menus</Accordion.Control>
                <Accordion.Panel>
                  <div className="item">
                    {menus.items.map((i) => (
                      <div key={i.file} className="item-item">
                        <a href={i.file} target="_blank" className="activeLink">
                          {i.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )}
        </>
      ) : (
        <div style={{ margin: "0 auto", width: "fit-content" }}>
          <Loader size="xl" variant="bars" mx="auto" />
        </div>
      )}
    </aside>
  );
}

export default Menus;
