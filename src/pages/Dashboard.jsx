import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Page from "../components/Page";
import Separator from "../components/Separator";
import { auth } from "../firebase";
import { AuthContext } from "../auth/context";

function Dashboard() {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Page>
      <Separator title={"Dashboard"} />
      <button
        onClick={() =>
          signOut(auth)
            .then(() => {
              navigate("/");
              setCurrentUser();
            })
            .catch((e) => {
              console.log(e);
            })
        }>
        Sign Out
      </button>
    </Page>
  );
}

export default Dashboard;
