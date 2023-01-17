import { Loader } from "@mantine/core";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

function CateringMenus() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "menus", "normal"), (doc) => {
      setMenus(doc.data().normal);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="cateringMenus">
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      )}
      {menus.map((i) => (
        <div key={i.link} className="cateringMenus-item">
          <a href={i.link} target="_blank">
            {i.name}
          </a>
        </div>
      ))}
      {menus.length === 0 && (
        <div className="cateringMenus-item">
          <a>No Menus</a>
        </div>
      )}
    </div>
  );
}

export default CateringMenus;
