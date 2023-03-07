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
    <a className="activeLink" target="_blank" {...otherProps}>
      {name}
    </a>
  );
}

export default SubtleButton;
