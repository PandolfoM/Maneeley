import React from "react";
import Awards from "../components/Awards";
import Hero from "../components/Hero";
import Services from "../components/Services";

import xMasBanquet from "../assets/xmasbanquet.webp";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Hero />
      {/* <Card
        title="Holiday Banquet Menu"
        subtitle=""
        button="View Now"
        orientation="horizontal"
        image={xMasBanquet}
        route={
          "https://firebasestorage.googleapis.com/v0/b/maneeley.appspot.com/o/Holiday%2F283d5b80-86ca-47dc-aa6f-58f31b490d8d?alt=media&token=697d67a1-d5bd-4275-88ce-514830e3da16"
        }
      /> */}
      <Services />
      <Awards />
    </>
  );
}

export default Home;
