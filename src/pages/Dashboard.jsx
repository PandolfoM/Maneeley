import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/context";
import AppButton from "../components/Button";

import DashboardMenus from "../components/DashboardMenus";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
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
              <div className="dashboard-display">
                <Separator title={"Categories"} />
                <div className="dashboard-display-inner">
                  {
                    {
                      menus: <DashboardMenus />,
                      users: "Hello World 2",
                    }[currentDash]
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Dashboard;
