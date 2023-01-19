import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, FileInput, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import DashboardMenus from "../components/DashboardMenus";

import AppModal from "../components/Modal";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";
import { db } from "../firebase";
import useMenus from "../hooks/useMenus";

function Dashboard() {
  const tablet = useMediaQuery("(max-width: 900px)");
  const [currentDash, setCurrentDash] = useState("menus");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState({});

  return (
    <>
      {isModalOpen && (
        <AppModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          currentMenu={currentMenu}
          title="Edit"
        />
      )}
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
