import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  FileButton,
  FileInput,
  Modal,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { signOut } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../auth/context";
import AppModal from "../components/Modal";
import SubtleButton from "../components/SubtleButton";
import { db } from "../firebase";
import useMenus from "../hooks/useMenus";

function Dashboard() {
  const { deleteMenuItem, addMenuItem, editMenuItem } = useMenus();
  const mobile = useMediaQuery("(max-width: 900px)");
  const [menus, setMenus] = useState([]);
  const [currentDash, setCurrentDash] = useState("menus");
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

  useEffect(() => {
    const unsub = async () => {
      setMenus([]);
      const q = query(collection(db, "menus"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setMenus((current) => [...current, doc.data()]);
      });
    };

    return () => {
      unsub();
    };
  }, []);

  // {
  //   {
  //     menus: "Hello World",
  //     users: "Hello World 2",
  //   }[currentDash]
  // }

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
      <div className="dashboard">
        {mobile ? (
          <h1 className="dashboard-notavailable">
            Dashboard not available for mobile
          </h1>
        ) : (
          <>
            <div className="dashboard-nav">
              <SubtleButton
                name={"Menus"}
                isActive={currentDash === "menus"}
                onClick={() => setCurrentDash("menus")}
              />
              <SubtleButton
                name={"Users"}
                isActive={currentDash === "users"}
                onClick={() => setCurrentDash("users")}
              />
            </div>
            <div className="dashboard-content">
              <aside className="catering-menus">
                <Accordion variant="filled" transitionDuration={300}>
                  {menus.map((m) => (
                    <Accordion.Item value={m.name} key={m.id}>
                      <Accordion.Control>{m.name} Menus</Accordion.Control>
                      <Accordion.Panel>
                        <div className="cateringMenus">
                          <form
                            className="cateringMenus-controls"
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
                            <SubtleButton
                              className="submit-button"
                              type="submit"
                              name={"Add"}
                            />
                          </form>
                          {m.items.map((i) => (
                            <div key={i.file} className="cateringMenus-item">
                              <a
                                href={i.file}
                                target="_blank"
                                className="cateringMenus-item-link">
                                {i.name}
                              </a>
                              <div className="cateringMenus-item-func">
                                <SubtleButton
                                  className="edit"
                                  onClick={() => {
                                    setCurrentMenu({
                                      menu: i.name,
                                      file: i.file,
                                      doc: m.name,
                                    });
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
              </aside>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
