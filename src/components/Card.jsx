import { Box } from "@mantine/core";
import React from "react";
import AppButton from "./Button";

function AppCard({ title, subtitle, button, image }) {
  return (
    // https://codepen.io/hexagoncircle/pen/XWbWKwL?editors=1100
    <Box
      className="card"
      sx={{ "&:before": { backgroundImage: `url(${image})` } }}>
      <div className="card-content">
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        <AppButton className="btn" name={button} />
      </div>
    </Box>
  );
}

export default AppCard;
