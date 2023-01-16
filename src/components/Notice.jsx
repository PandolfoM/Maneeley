import React from "react";
import Separator from "./Separator";

function Notice() {
  return (
    <div className="notice">
      <Separator title={"Notice"} />
      <p>
        Due to rising increase in food, beverage & labor cost, our pricing has
        increased and may not match the pricing you may see on our website.
      </p>
      <p>
        We do not want to offer anything less than the quality of food and
        service that we have built our reputation on for over 30 years.
      </p>
      <p>We value your patronage and we appreciate your understanding.</p>
    </div>
  );
}

export default Notice;
