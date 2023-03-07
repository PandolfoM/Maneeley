import styled from "@emotion/styled";
import { Button } from "@mantine/core";
import React from "react";

const SubtleBtn = styled(Button)`
  background: transparent;
  color: #bbb;
  padding: 0;

  &:hover {
    color: "#fffcf1";
    background: transparent;
  }
`;

function SubtleButton({ name, ...otherProps }) {
  return (
    // <SubtleBtn
    //   onClick={onClick}
    //   sx={
    //     isActive && {
    //       background:
    //         "linear-gradient(0deg, #b57d09 0%, #fdbb2d 60%) !important",
    //       WebkitBackgroundClip: "text !important",
    //       WebkitTextFillColor: "transparent",
    //     }
    //   }
    //   {...otherProps}>
    //   {name}
    // </SubtleBtn>
    <a className="activeLink" target="_blank" {...otherProps}>
      {name}
    </a>
  );
}

export default SubtleButton;
