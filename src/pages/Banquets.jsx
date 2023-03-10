import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Menus from "../components/Menus";
import Page from "../components/Page";

import { MenuContext } from "../context/MenuContext";
import { db } from "../firebase";

function Banquets() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const unsub = async () => {
      const docRef = doc(db, "menus", "Banquets");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMenus(docSnap.data());
      } else {
        console.log("No document");
      }
    };

    unsub();
  }, []);

  return (
    <Page flex>
      <div>
        <p style={{ whiteSpace: "break-spaces" }}>
          Planning an event - whether it's a birthday gathering or an elaborate
          corporate event - is not an easy task.
        </p>
        <p>
          Our team of planning experts is here to guide you through the process
          of turning your vision into reality. Our attention to detail will
          ensure that your social celebration will run smoothly and
          successfully.
        </p>
        <p>
          Our skilled, experienced chefs offer a wide variety of menus that
          feature exquisite dishes for all occasions, and we are happy to
          accommodate any dietary restrictions you or your guests may have. To
          learn more about our fabulous food, we invite you to view our menu
          selections.{" "}
        </p>
      </div>
      <Menus menus={menus} />
    </Page>
  );
}

export default Banquets;
