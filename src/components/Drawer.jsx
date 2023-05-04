import React from "react";
import { Drawer } from "@mantine/core";

function AppDrawer({
  opened = false,
  setIsOpened,
  position = "right",
  size = "xs",
  children,
  ...otherProps
}) {
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setIsOpened(false)}
        position={position}
        size={size}
        {...otherProps}>
        {children}
      </Drawer>
    </div>
  );
}

export default AppDrawer;
