import React from "react";
import AppCard from "../components/AppCard";
import wedding from "../assets/wedding.jpg";
import banquet from "../assets/banquet.jpg";
import catering from "../assets/catering.jpg";
import venue from "../assets/venue.jpg";

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
  {
    id: 3,
    title: "Grand Lodge",
    subtite:
      "The Grand Lodge is nestled in five acres of woods in South Windsor, Connecticut, only minutes away from Hartford. It offers an elegant setting – and delectable cuisine for your wedding, banquet or other special event.",
    button: "Learn More",
    image: venue,
  },
];

function Services() {
  return (
    <section className="services">
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
  );
}

export default Services;
