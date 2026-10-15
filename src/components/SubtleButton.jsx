import React from "react";

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
