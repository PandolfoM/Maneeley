import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../auth/context";
import { ActionIcon } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faUsers } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [currentDash, setCurrentDash] = useState("menus");
  const navigate = useNavigate();

  // {
  //   {
  //     menus: "Hello World",
  //     users: "Hello World 2",
  //   }[currentDash]
  // }

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <ActionIcon
          variant="transparent"
          onClick={() => setCurrentDash("menus")}>
          <FontAwesomeIcon
            icon={faClipboard}
            size="xl"
            color={currentDash === "menus" ? "#fffcf1" : "inherit"}
          />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          onClick={() => setCurrentDash("users")}>
          <FontAwesomeIcon
            icon={faUsers}
            size="xl"
            color={currentDash === "users" ? "#fffcf1" : "inherit"}
          />
        </ActionIcon>
      </div>
      <div className="dashboard-content">
        <p>Hello World</p>
      </div>
    </div>
  );
}

export default Dashboard;
