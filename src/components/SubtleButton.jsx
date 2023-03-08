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

function SubtleButton({ name, style, type, ...otherProps }) {
  return (
    <>
      {!type ? (
        <a className="activeLink" target="_blank" style={style} {...otherProps}>
          {name}
        </a>
      ) : (
        <button
          className="activeLink"
          type={type}
          style={style}
          {...otherProps}>
          {name}
        </button>
      )}
    </>
  );
}

export default SubtleButton;
