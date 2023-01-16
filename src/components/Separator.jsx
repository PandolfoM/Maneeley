import React from "react";

function Separator({ title }) {
  return (
    <h3 className="separator">
      <hr />
      {title}
      <hr />
    </h3>
  );
}

export default Separator;
