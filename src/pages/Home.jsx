import { Button } from "@mantine/core";
import React from "react";
import AppCard from "../components/AppCard";
import wedding from "../assets/wedding.jpg";
import banquet from "../assets/banquet.jpg";
import catering from "../assets/catering.jpg";
import hero from "../assets/hero.jpg";
import svg from "../assets/svg.svg";

const cardData = [
  {
    id: 0,
    title: "Weddings",
    subtite:
      "We invite you to arrange a consultation and tour our Grand Lodge and to consider one of our beautifully-landscaped ceremony sites as a setting for exchanging your vows. We have a full complement of wedding services that will help you with the details of planning your day.",
    button: "Learn More",
    image: wedding,
  },
  {
    id: 1,
    title: "Banquets",
    subtite:
      "Consider the Grand Lodge for all celebrations: Sweet 16 ~ Quinceanera’s ~ Birthdays ~ Anniversary’s ~ Reunions ~ Showers ~ as well as all Social and Corporate Events.",
    button: "Learn More",
    image: banquet,
  },
  {
    id: 2,
    title: "Catering",
    subtite:
      "Maneeley’s is dedicated to making your next working breakfast, lunch, dinner or business meeting a success. Our team of sales professionals will assist you in planning your special menu. Maneeley’s has been providing catering services for over 25 years for many of the most prominent and successful companies in Connecticut.",
    button: "Learn More",
    image: catering,
  },
];

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content">
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
      <section className="services" style={{ backgroundImage: `url(${svg})` }}>
        <h3>
          <hr />
          Services
          <hr />
        </h3>
        <div className="services-cards">
          {cardData.map((i) => (
            <AppCard
              key={i.id}
              title={i.title}
              subtitle={i.subtite}
              button={i.button}
              image={i.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
