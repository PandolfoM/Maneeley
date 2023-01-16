import React from "react";

import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="landing">
          <div>
            <h1>
              Welcome to <span>Maneeley's</span>
            </h1>
            <p>
              Maneely's is a highly reputable wedding venue in South Windsor,
              CT.
            </p>
            <Button name={"Get Started"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
