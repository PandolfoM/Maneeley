import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, FileInput } from "@mantine/core";
import React from "react";
import SubtleButton from "./SubtleButton";

function DashboardGallery({ classes, name }) {
  return (
    <div className="dashboard-images">
      <Accordion variant="filled" transitionDuration={300} classNames={classes}>
        {/* {menus.map((m) => ( */}
        <Accordion.Item value={name} key={1}>
          <Accordion.Control>{name}</Accordion.Control>
          <Accordion.Panel>
            <div className="item">
              <form className="item-controls">
                <div>
                  <FileInput
                    variant="unstyled"
                    size="xs"
                    placeholder="Choose image "
                    accept="application/pdf"
                    icon={<FontAwesomeIcon icon={faUpload} />}
                    withAsterisk
                    // {...form.getInputProps("file")}
                  />
                </div>
                <SubtleButton type="submit" name="Add" />
              </form>
              {/* {m.items.map((i) => ( */}
              <div key={1} className="item-item">
                <a
                  // href={i.file}
                  target="_blank"
                  className="activeLink">
                  {"i.name"}
                </a>
                <div className="item-item-func">
                  <SubtleButton
                    className="delete"
                    // onClick={() => deleteMenuItem(i, m)}
                    name={"Delete"}
                  />
                </div>
              </div>
              {/* ))} */}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
        {/* ))} */}
      </Accordion>
    </div>
  );
}

export default DashboardGallery;
