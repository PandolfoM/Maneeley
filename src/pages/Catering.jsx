import { Accordion, createStyles } from "@mantine/core";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Separator from "../components/Separator";
import { db } from "../firebase";

function Catering() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const unsub = async () => {
      setMenus([]);
      const q = query(collection(db, "menus"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setMenus((current) => [...current, doc.data()]);
      });
    };

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="catering">
      <div>
        <p>
          Whatever the occasion, Maneeley’s Catering executes each event with
          skill, pride and professionalism.
        </p>
        <p>
          Whether you’re looking for a full service dinner, cocktail party or
          back yard cook out, Maneeley’s Catering is always ready to assist in
          planning that special day!
        </p>
        <p>
          At Maneeley’s Catering, we offer menus for a variety of celebrations
          and events. If you are looking to have an event catered at your place
          of business or to simply order lunch for your staff please view our
          menus below.
        </p>
        <p>
          For any questions on our catering menu, please{" "}
          <Link to="/contact">contact us today.</Link>
        </p>
      </div>
      <aside className="catering-menus">
        <Separator title={"Menus"} />
        <Accordion variant="filled" transitionDuration={300}>
          {menus.map((m) => (
            <Accordion.Item value={m.name} key={m.id}>
              <Accordion.Control>{m.name} Menus</Accordion.Control>
              <Accordion.Panel>
                <div className="cateringMenus">
                  {m.items.map((i) => (
                    <div key={i.link} className="cateringMenus-item">
                      <a href={i.link} target="_blank">
                        {i.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </aside>
    </div>
  );
}

export default Catering;
