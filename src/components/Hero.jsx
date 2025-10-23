import React from "react";
import AppButton from "./Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="landing">
          <div>
            <h1>
              Welcome to <span>Maneeley's</span>
            </h1>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/maneeley.appspot.com/o/Holiday%2F283d5b80-86ca-47dc-aa6f-58f31b490d8d?alt=media&token=697d67a1-d5bd-4275-88ce-514830e3da16"
              target="_blank"
            >
              <AppButton name={"Group Party Celebration Night"} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
