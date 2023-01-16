import { Button } from "@mantine/core";
import React from "react";

function AppButton({ name }) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: "#b57d09", to: "#fdbb2d", deg: 360 }}
      radius={"xl"}
      uppercase>
      {name}
    </Button>
  );
}

export default AppButton;
