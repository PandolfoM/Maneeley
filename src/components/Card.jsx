import { Box } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import AppButton from "./Button";

function AppCard({
  title,
  subtitle,
  button,
  image,
  route,
  orientation,
  className,
}) {
  const link = route.includes("http");

  return (
    // https://codepen.io/hexagoncircle/pen/XWbWKwL?editors=1100
    <Box
      className={`card ${
        orientation === "horizontal" ? "horizontal" : ""
      } ${className}`}
      sx={{ "&:before": { backgroundImage: `url(${image})` } }}
    >
      <div className="card-content">
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        {link ? (
          <a href={route} target="_blank">
            <AppButton className="btn" name={button} />
          </a>
        ) : (
          <Link to={route}>
            <AppButton className="btn" name={button} />
          </Link>
        )}
      </div>
    </Box>
  );
}

export default AppCard;
