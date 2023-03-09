import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, FileInput, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React from "react";
import { useState } from "react";
import useMenus from "../hooks/useMenus";
import AppModal from "./Modal";
import SubtleButton from "./SubtleButton";

function DashboardMenus({ classes, name, data }) {
  const { deleteMenuItem, addMenuItem } = useMenus();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMenuName, setCurrentMenuName] = useState("");
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      file: null,
    },

    validate: {
      name: isNotEmpty(),
      file: isNotEmpty(),
    },
  });

  return (
    <>
      {isModalOpen && (
        <AppModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentMenuName={currentMenuName}
          currentMenuItem={currentMenuItem}
          title="Edit"
        />
      )}
      <div className="catering-menus">
        <Accordion
          variant="filled"
          transitionDuration={300}
          classNames={classes}>
          <Accordion.Item value={name} key={data?.id}>
            <Accordion.Control>{name}</Accordion.Control>
            <Accordion.Panel>
              <div className="item">
                <form
                  className="item-controls"
                  onSubmit={form.onSubmit((values) => {
                    addMenuItem(values.name, values.file, name);
                    form.reset();
                  })}>
                  <div>
                    <TextInput
                      variant="unstyled"
                      size="xs"
                      placeholder="Menu Name"
                      withAsterisk
                      {...form.getInputProps("name")}
                    />
                    <FileInput
                      variant="unstyled"
                      size="xs"
                      placeholder="Choose menu"
                      accept="application/pdf"
                      icon={<FontAwesomeIcon icon={faUpload} />}
                      withAsterisk
                      {...form.getInputProps("file")}
                    />
                  </div>
                  <SubtleButton type="submit" name="Add" />
                </form>
                {data?.items?.map((i) => (
                  <div key={i.id} className="item-item">
                    <a href={i.file} target="_blank" className="activeLink">
                      {i.name}
                    </a>
                    <div className="item-item-func">
                      <SubtleButton
                        onClick={() => {
                          setCurrentMenuName(name);
                          setCurrentMenuItem(i);
                          setIsModalOpen(true);
                        }}
                        name={"Edit"}
                      />
                      <SubtleButton
                        className="delete"
                        onClick={() => deleteMenuItem(name, i)}
                        name={"Delete"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default DashboardMenus;
