import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";

import DashboardMenus from "../components/DashboardMenus";
import Page from "../components/Page";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";

function Dashboard() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const [currentDash, setCurrentDash] = useState("menus");

  return (
    <Page>
      {tablet ? (
        <h1 className="dashboard-notavailable">
          Dashboard not available for mobile
        </h1>
      ) : (
        <>
          <div className="dashboard-nav">
            <SubtleButton
              name={"Menus"}
              className={currentDash === "menus" ? "activeLink" : ""}
              onClick={() => setCurrentDash("menus")}
            />
            <SubtleButton
              name={"Users"}
              className={currentDash === "users" ? "activeLink" : ""}
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
    </Page>
  );
}

export default Dashboard;
