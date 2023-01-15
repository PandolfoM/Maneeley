import { Box, Button } from "@mantine/core";
import React from "react";

function AppCard({ title, subtitle, button, image }) {
  return (
    // https://codepen.io/hexagoncircle/pen/XWbWKwL?editors=1100
    <Box
      className="card"
      sx={{ "&:before": { backgroundImage: `url(${image})` } }}>
      <div className="card-content">
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        <Button
          className="btn"
          variant="gradient"
          gradient={{ from: "#b57d09", to: "#fdbb2d", deg: 360 }}
          radius={"xl"}
          uppercase>
          {button}
        </Button>
      </div>
    </Box>
  );
}

export default AppCard;
