import {
  faCircleExclamation,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  Alert,
  FileInput,
  LoadingOverlay,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React from "react";
import { useState } from "react";
import useMenus from "../../hooks/useMenus";
import AppModal from "../Modal";
import SubtleButton from "../SubtleButton";
import { useMediaQuery } from "@mantine/hooks";

function DashboardMenus({ classes, name, data }) {
  const { deleteMenuItem, addMenuItem } = useMenus();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMenuName, setCurrentMenuName] = useState("");
  const [currentMenuItem, setCurrentMenuItem] = useState("");
  const [loading, setLoading] = useState(false);
  const mobile = useMediaQuery("(max-width: 600px)");

  const form = useForm({
    initialValues: {
      file: null,
    },

    validate: {
      file: isNotEmpty(),
    },
  });

  return (
    <>
      <AppModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentMenuName={currentMenuName}
        currentMenuItem={currentMenuItem}
        title="Edit"
      />
      <div className="catering-menus">
        <Accordion
          defaultValue={name}
          variant="filled"
          transitionDuration={300}
          classNames={classes}>
          <Accordion.Item value={name} key={data?.id}>
            <LoadingOverlay visible={loading} />
            <Accordion.Control>{name}</Accordion.Control>
            <Accordion.Panel>
              <div className="item">
                <form
                  className="item-controls"
                  onSubmit={form.onSubmit(async (values) => {
                    setLoading(true);
                    await addMenuItem(values, name);
                    form.reset();
                    setLoading(false);
                  })}>
                  <div
                    style={
                      mobile
                        ? {
                            flexDirection: "column",
                            gap: "0.5rem",
                            width: "80%",
                          }
                        : {}
                    }>
                    <FileInput
                      sx={
                        mobile
                          ? {
                              display: "block !important",
                              paddingBottom: "2px",
                              width: "100%",
                            }
                          : {}
                      }
                      multiple
                      classNames={classes}
                      variant="unstyled"
                      size="xs"
                      placeholder="Choose menu"
                      accept="application/pdf"
                      icon={<FontAwesomeIcon icon={faUpload} />}
                      withAsterisk
                      {...form.getInputProps("file")}
                    />
                  </div>
                  <SubtleButton
                    type="submit"
                    name="Add"
                    style={{ whiteSpace: "nowrap" }}
                  />
                </form>
                <div className="item-content">
                  {data?.items.length === 0 ? (
                    <Alert
                      sx={{
                        marginTop: "0.5rem",
                        backgroundColor: "#2e2e2e80",
                        color: "#f53434",
                        borderColor: "#f53434",
                      }}
                      icon={<FontAwesomeIcon icon={faCircleExclamation} />}
                      title="No Menus"
                      color={"red"}
                      variant="outline">
                      There are no menus yet
                    </Alert>
                  ) : (
                    <>
                      {data?.items?.map((i) => (
                        <div key={i.id} className="item-item">
                          <a
                            href={i.file}
                            target="_blank"
                            className="activeLink">
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
                              onClick={async () => {
                                setLoading(true);
                                await deleteMenuItem(name, i);
                                setLoading(false);
                              }}
                              name={"Delete"}
                            />
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default DashboardMenus;
