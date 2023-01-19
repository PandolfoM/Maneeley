import styled from "@emotion/styled";
import { Button } from "@mantine/core";
import React from "react";

const SubtleBtn = styled(Button)`
  background: transparent;
  color: #bbb;

  &:hover {
    color: "#fffcf1";
    background: transparent;
  }
`;

// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;

function SubtleButton({ name, onClick, isActive, ...otherProps }) {
  return (
    <SubtleBtn
      onClick={onClick}
      sx={
        isActive && {
          background:
            "linear-gradient(0deg, #b57d09 0%, #fdbb2d 60%) !important",
          WebkitBackgroundClip: "text !important",
          WebkitTextFillColor: "transparent",
        }
      }
      {...otherProps}>
      {name}
    </SubtleBtn>
  );
}

export default SubtleButton;
