import { Accordion, LoadingOverlay } from "@mantine/core";
import React, { useState } from "react";
import useUsers from "../../hooks/useUsers";
import SubtleButton from "../SubtleButton";

function DashboardUsers({ classes, data, users, setUsers, form, setEdit }) {
  const [loading, setLoading] = useState(false);
  const { deleteUserData } = useUsers();

  return (
    <div className="dashboard-accordion">
      <Accordion
        defaultValue={"users"}
        variant="filled"
        transitionDuration={300}
        classNames={classes}>
        <Accordion.Item value={"users"}>
          <LoadingOverlay visible={loading} />
          <Accordion.Control>Users</Accordion.Control>
          <Accordion.Panel>
            <div className="item">
              {data?.map((i) => (
                <div key={i.uid} className="item-item">
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
                  <div className="item-item-func" style={{ display: "flex" }}>
                    <SubtleButton
                      onClick={async () => {
                        setEdit(true);
                        form.setValues({
                          username: i.username,
                          email: i.email,
                          oldEmail: i.email,
                        });
                      }}
                      name={"Edit"}
                    />
                    {data.length > 1 && (
                      <SubtleButton
                        style={{ whiteSpace: "nowrap" }}
                        className="delete"
                        onClick={async () => {
                          setLoading(true);
                          await deleteUserData(i, users, setUsers);
                          setLoading(false);
                        }}
                        name={"Delete"}
                      />
                    )}
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
