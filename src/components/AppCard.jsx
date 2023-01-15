import { Button } from "@mantine/core";
import React from "react";

function AppCard({ key, title, subtitle, button, image }) {
  return (
    // https://codepen.io/hexagoncircle/pen/XWbWKwL?editors=1100
    <dv className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <h4 className="title">{title}</h4>
        <p className="copy">{subtitle}</p>
        <Button className="btn" radius={"xl"}>
          {button}
        </Button>
      </div>
    </dv>
  );
}

export default AppCard;
