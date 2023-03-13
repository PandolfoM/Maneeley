import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import {
  DashboardImagesTab,
  DashboardMenusTab,
  DashboardUsersTab,
} from "../components/Dashboard";
import Page from "../components/Page";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";
import { auth } from "../firebase";
import useUsers from "../hooks/useUsers";

function Dashboard() {
  const navigate = useNavigate();
  const [currentDash, setCurrentDash] = useState("menus");
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { getUser } = useUsers();

  useEffect(() => {
    window.scrollTo(0, 0);
    const get = async () => {
      const getUserData = await getUser(currentUser.uid);
      if (getUserData.tempPassword) {
        navigate("/newpassword");
      } else {
        return;
      }
    };
    currentUser.uid && get();
  }, []);

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
            <SubtleButton
              style={{ cursor: "pointer" }}
              name={"Logout"}
              className="delete"
              onClick={() => {
                signOut(auth);
                setCurrentUser(null);
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
