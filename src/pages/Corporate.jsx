import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Menus from "../components/Menus";
import Page from "../components/Page";
import { db } from "../firebase";

function Corporate() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsub = async () => {
      const docRef = doc(db, "menus", "Corporate");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMenus(docSnap.data());
      } else {
        return;
      }
    };

    unsub();
  }, []);

  return (
    <Page flex>
      <div>
        <p style={{ whiteSpace: "break-spaces" }}>
          Whether you're planning an office breakfast, a business lunch, or need
          regular weekly corporate catering, Maneeley's is here to assist. We
          are equipped to handle any size of event, from a small meeting of your
          employees or clients to a customer or employee appreciation even with
          hundreds of attendees. With a focus on freshness and creativity, we
          are more than happy to customize a menu to fit your specific style,
          needs, and budget.
        </p>
        <p>
          We work closely with our clients to produce the best possible event
          time and time again. Our client base for all day Corporate catering
          clients continues to expand as we constantly raise our level of
          service. Our relationships are built on trust, excellent service and
          of course, amazing food. From continental breakfasts to hot breakfast
          buffet, to hot and cold standard and gourmet lunch options, our
          all-day corporate catering menus are sure to please. Our goal is to
          assist your business in whatever capacity we can. Contact us today to
          learn more.
        </p>
      </div>
      <Menus menus={menus} />
    </Page>
  );
}

export default Corporate;
