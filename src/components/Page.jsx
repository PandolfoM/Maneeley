import React from "react";

function Page({ children, flex = false, ...props }) {
  return (
    <div
      className="newPage"
      style={flex ? { display: "flex" } : { display: "block" }}
      {...props}>
      {children}
    </div>
  );
}

export default Page;
