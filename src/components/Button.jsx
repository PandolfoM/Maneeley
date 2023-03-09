import { Button } from "@mantine/core";
import React from "react";

function AppButton({ name, ...otherProps }) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: "#b17900", to: "#fdbb2d", deg: 360 }}
      radius={"xl"}
      uppercase
      {...otherProps}>
      {name}
    </Button>
  );
}

export default AppButton;
