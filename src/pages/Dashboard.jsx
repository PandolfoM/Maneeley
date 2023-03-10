import React, { useState } from "react";
import { DashboardImagesTab, DashboardMenusTab } from "../components/Dashboard";
import Page from "../components/Page";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";

function Dashboard() {
  const [currentDash, setCurrentDash] = useState("menus");

  return (
    <Page flex>
      <div className="dashboard-content">
        <div className="dashboard-display">
          <div className="dashboard-display-inner">
            {
              {
                menus: <DashboardMenusTab />,
                images: <DashboardImagesTab />,
                users: "Hello World 2",
              }[currentDash]
            }
          </div>
        </div>
      </div>
      <aside className="dashboard-nav">
        <div>
          <Separator title={"Dashboard"} />
          <div className="content">
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Menus"}
              className={currentDash === "menus" ? "activeLink" : ""}
              onClick={() => setCurrentDash("menus")}
            />
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Slideshow / Gallery"}
              className={currentDash === "images" ? "activeLink" : ""}
              onClick={() => setCurrentDash("images")}
            />
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Users"}
              className={currentDash === "users" ? "activeLink" : ""}
              onClick={() => setCurrentDash("users")}
            />
          </div>
        </div>
      </aside>
    </Page>
  );
}

export default Dashboard;
