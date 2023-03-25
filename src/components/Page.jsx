import React from "react";

function Page({ children, flex = false, fullHeight = false, ...props }) {
  return (
    <div
      className="newPage"
      style={{
        display: flex ? "flex" : "block",
        height: fullHeight ? "100vh" : "auto",
      }}
      {...props}>
      {children}
    </div>
  );
}

export default Page;
