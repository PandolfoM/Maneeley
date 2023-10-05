import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Menus from "../components/Menus";
import Page from "../components/Page";
import { db } from "../firebase";

function Holiday() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsub = async () => {
      const docRef = doc(db, "menus", "Holiday");
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
    <Page flex fullHeight>
      <div>
        <p style={{ whiteSpace: "break-spaces" }}>
          This holiday season, we are excited to offer convenient pick-up and
          drop-off options for your festivities.
        </p>
        <p style={{ whiteSpace: "break-spaces" }}> 
          For Thanksgiving, indulge in a stress-free celebration with our full
          meal pick-up service. From succulent roasted turkey to savory sides
          like creamy mashed potatoes and buttery stuffing, our Thanksgiving
          spread is a feast to remember.
        </p>
        <p style={{ whiteSpace: "break-spaces" }}> 
          And for those seeking a memorable Christmas dining experience, host an
          event in our space, or we will bring the food to you. Our spacious and
          elegantly decorated venue provides the perfect ambiance for a festive
          gathering.
        </p>
        <p style={{ whiteSpace: "break-spaces" }}> 
          Have a small group you want to celebrate with here at our location?
          Join us at our Small Company Holiday Celebration on December 8th. Want
          to celebrate in the office? The corporate holiday selections will have
          something for everyone. With diverse menus tailored to your
          preferences, our culinary team will ensure your guests savor the
          flavors of the season.
        </p>
        <p style={{ whiteSpace: "break-spaces" }}> 
          Whether you choose to pick up a Thanksgiving meal to enjoy at home or
          host a corporate Christmas dinner, our commitment to exceptional
          service and delicious cuisine will make your holiday celebrations
          truly special. Leave the details to us, and savor the joy of the
          season with your loved ones or colleagues.
        </p>
      </div>
      <Menus menus={menus} />
    </Page>
  );
}

export default Holiday;
