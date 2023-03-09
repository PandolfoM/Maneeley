import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="NoMatch">
      <div className="NoMatch-content">
        <h1>404</h1>
        <h2>Doesn't seem like this a page</h2>
        <Link to={"/"} className="activeLink">
          HOME
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;
