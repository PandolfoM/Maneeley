import { Accordion, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { signOut } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../auth/context";
import SubtleButton from "../components/SubtleButton";
import { db } from "../firebase";
import useMenus from "../hooks/useMenus";

function Dashboard() {
  const { deleteMenuItem, addMenuItem } = useMenus();
  const mobile = useMediaQuery("(max-width: 900px)");
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [menus, setMenus] = useState([]);
  const [currentDash, setCurrentDash] = useState("menus");
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      menu: "",
      link: "",
    },

    validate: {
      menu: isNotEmpty(),
      link: isNotEmpty(),
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
                                placeholder="Menu"
                                withAsterisk
                                {...form.getInputProps("menu")}
                              />
                              <TextInput
                                variant="unstyled"
                                size="xs"
                                placeholder="Link"
                                withAsterisk
                                {...form.getInputProps("link")}
                              />
                            </div>
                            <SubtleButton type="submit" name={"Add"} />
                          </form>
                          {m.items.map((i) => (
                            <div key={i.link} className="cateringMenus-item">
                              <a href={i.link} target="_blank">
                                {i.name}
                              </a>
                              <a onClick={() => deleteMenuItem(i, m)}>Delete</a>
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
