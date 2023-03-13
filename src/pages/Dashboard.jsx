import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardImagesTab,
  DashboardMenusTab,
  DashboardUsersTab,
} from "../components/Dashboard";
import Page from "../components/Page";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";
import { auth } from "../firebase";

function Dashboard() {
  const navigate = useNavigate();
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
                users: <DashboardUsersTab />,
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
              className={currentDash === "" ? "activeLink" : ""}
              onClick={() => setCurrentDash("menus")}
            />
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Slideshow / Gallery"}
              className={currentDash === "" ? "activeLink" : ""}
              onClick={() => setCurrentDash("images")}
            />
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Users"}
              className={currentDash === "" ? "activeLink" : ""}
              onClick={() => setCurrentDash("users")}
            />
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Logout"}
              className="delete"
              onClick={() => {
                signOut(auth);
                navigate("/");
              }}
            />
          </div>
        </div>
      </aside>
    </Page>
  );
}

export default Dashboard;
