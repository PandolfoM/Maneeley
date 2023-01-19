import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";

import DashboardMenus from "../components/DashboardMenus";
import AppModal from "../components/Modal";
import SubtleButton from "../components/SubtleButton";

function Dashboard() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const [currentDash, setCurrentDash] = useState("menus");

  return (
    <>
      <div className="dashboard">
        {tablet ? (
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
              {
                {
                  menus: <DashboardMenus />,
                  users: "Hello World 2",
                }[currentDash]
              }
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
