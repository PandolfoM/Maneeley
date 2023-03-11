import { Accordion } from "@mantine/core";
import React from "react";
import useUsers from "../../hooks/useUsers";
import SubtleButton from "../SubtleButton";

function DashboardUsers({ classes, name, data, users, setUsers }) {
  const { deleteUserData } = useUsers();

  return (
    <div className="dashboard-accordion">
      <Accordion
        defaultValue={"users"}
        variant="filled"
        transitionDuration={300}
        classNames={classes}>
        <Accordion.Item value={"users"}>
          <Accordion.Control>Users</Accordion.Control>
          <Accordion.Panel>
            <div className="item">
              {data?.map((i) => (
                <div key={i.email} className="item-item">
                  <SubtleButton
                    name={i.username}
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  />
                  <SubtleButton
                    name={i.email}
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "clip",
                      maxWidth: "50%",
                    }}
                  />
                  <div className="item-item-func">
                    <SubtleButton
                      style={{ whiteSpace: "nowrap" }}
                      className="delete"
                      onClick={() => deleteUserData(i, users, setUsers)}
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
  );
}

export default DashboardUsers;
