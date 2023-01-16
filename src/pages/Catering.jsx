import React from "react";
import { Link } from "react-router-dom";
import Separator from "../components/Separator";

function Catering() {
  return (
    <div className="catering">
      <Separator title={"Catering"} />
      <p>
        Whatever the occasion, Maneeley’s Catering executes each event with
        skill, pride and professionalism.
      </p>
      <p>
        Whether you’re looking for a full service dinner, cocktail party or back
        yard cook out, Maneeley’s Catering is always ready to assist in planning
        that special day!
      </p>
      <p>
        At Maneeley’s Catering, we offer menus for a variety of celebrations and
        events. If you are looking to have an event catered at your place of
        business or to simply order lunch for your staff please view below.
      </p>
      <p>
        For any questions on our catering menu, please{" "}
        <Link to="/contact">contact us today.</Link>
      </p>
    </div>
  );
}

export default Catering;
