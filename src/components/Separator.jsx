import React from "react";

function Separator({ title, ...props }) {
  return (
    <h3 className="separator" {...props}>
      <hr />
      {title}
      <hr />
    </h3>
  );
}

export default Separator;
