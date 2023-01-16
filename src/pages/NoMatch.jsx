import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="NoMatch">
      <div className="NoMatch-content">
        <h1>404</h1>
        <h2>Doesn't seem like this a page</h2>
        <Link to={"/"}>HOME</Link>
      </div>
    </div>
  );
}

export default NoMatch;
