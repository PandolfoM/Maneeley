import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Notice from "../components/Notice";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Hero />
      <Notice />
      <Services />
      <About />
    </>
  );
}

export default Home;
