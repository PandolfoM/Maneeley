import { Button } from "@mantine/core";
import React from "react";

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
            <Button
              variant="gradient"
              gradient={{ from: "#b57d09", to: "#fdbb2d", deg: 360 }}
              radius={"xl"}
              uppercase>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
