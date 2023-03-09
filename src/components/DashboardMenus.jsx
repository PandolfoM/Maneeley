import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  createStyles,
  FileInput,
  Table,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import useMenus from "../hooks/useMenus";
import AppModal from "./Modal";
import SubtleButton from "./SubtleButton";

const useStyles = createStyles(() => ({
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
    width: "100%",
  },
  wrapper: {
    border: "1px solid #3c3c3c",
    backgroundColor: "#2e2e2e80",

    "&:focus": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: "linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1",
    },
    "&:focus-within": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: "linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1",
    },
  },
}));

function DashboardMenus() {
  const { classes } = useStyles();
  const { menus } = useContext(MenuContext);
  const { deleteMenuItem, addMenuItem, addMenuCategory, deleteCategory } =
    useMenus();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState({});

  const form = useForm({
    initialValues: {
      menu: "",
      file: null,
    },

    validate: {
      menu: isNotEmpty(),
      file: isNotEmpty(),
    },
  });

  const categoryForm = useForm({
    initialValues: {
      name: "",
    },

    validate: {
      name: isNotEmpty(),
    },
  });

  return (
    <>
      {isModalOpen && (
        <AppModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentMenu={currentMenu}
          title="Edit"
        />
      )}
      <div className="catering-menus">
        <Accordion
          variant="filled"
          transitionDuration={300}
          classNames={classes}>
          {menus.map((m) => (
            <Accordion.Item value={m.name} key={m.id}>
              <Accordion.Control>{m.name} Menus</Accordion.Control>
              <Accordion.Panel>
                <div className="item">
                  <form
                    className="item-controls"
                    onSubmit={form.onSubmit((values) => {
                      addMenuItem(values, m);
                      form.reset();
                    })}>
                    <div>
                      <TextInput
                        variant="unstyled"
                        size="xs"
                        placeholder="Menu Name"
                        withAsterisk
                        {...form.getInputProps("menu")}
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
                  {m.items.map((i) => (
                    <div key={i.id} className="item-item">
                      <a href={i.file} target="_blank" className="activeLink">
                        {i.name}
                      </a>
                      <div className="item-item-func">
                        <SubtleButton
                          onClick={() => {
                            setCurrentMenu({ menu: m, item: i });
                            setIsModalOpen(true);
                          }}
                          name={"Edit"}
                        />
                        <SubtleButton
                          className="delete"
                          onClick={() => deleteMenuItem(i, m)}
                          name={"Delete"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <aside className="dashboard-aside">
        <form
          className="add-category"
          onSubmit={categoryForm.onSubmit(async (values) => {
            await addMenuCategory(values);
            form.reset();
          })}>
          <TextInput
            classNames={classes}
            variant="unstyled"
            size="xs"
            placeholder="Category Name"
            withAsterisk
            {...categoryForm.getInputProps("name")}
          />
          <SubtleButton type="submit" name={"Add"} />
        </form>
        <div className="all-categories">
          <Table striped highlightOnHover>
            <tbody>
              {menus.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td className="delete-btn">
                    <SubtleButton
                      className="delete"
                      onClick={() => deleteCategory(m)}
                      name={"Delete"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </aside>
    </>
  );
}

export default DashboardMenus;
