import React from "react";
import Card from "../components/Card";
import wedding from "../assets/wedding.webp";
import banquet from "../assets/banquet.webp";
import catering from "../assets/catering.webp";
import holiday from "../assets/holiday.webp";
import corporate from "../assets/corporate.webp";
import xMasBanquet from "../assets/xmasbanquet.webp";
import Separator from "./Separator";

const cardData = [
  {
    id: 0,
    title: "Weddings",
    subtite:
      "We invite you to arrange a consultation and tour our Grand Lodge and to consider one of our beautifully-landscaped ceremony sites as a setting for exchanging your vows. We have a full complement of wedding services that will help you with the details of planning your day.",
    button: "Learn More",
    image: wedding,
    route: "/weddings",
  },
  {
    id: 1,
    title: "Banquets",
    subtite:
      "Consider the Grand Lodge for all celebrations: Sweet 16 ~ Quinceanera's ~ Birthdays ~ Anniversary's ~ Reunions ~ Showers ~ as well as all Social and Corporate Events.",
    button: "Learn More",
    image: banquet,
    route: "/banquets",
  },
  {
    id: 2,
    title: "Catering",
    subtite:
      "Maneeley's is dedicated to making your next working breakfast, lunch, dinner or business meeting a success. Our team of sales professionals will assist you in planning your special menu",
    button: "Learn More",
    image: catering,
    route: "/catering",
  },
  {
    id: 3,
    title: "Holidays",
    subtite: "",
    button: "View Now",
    image: holiday,
    // route:
    //   "https://firebasestorage.googleapis.com/v0/b/maneeley.appspot.com/o/Holiday%2FHoliday_menu.pdf?alt=media&token=2a66eda8-5c42-4010-8c94-359833fc7ae5",
    route: "/holiday",
  },
  {
    id: 4,
    title: "Corporate Catering",
    subtite: "",
    button: "View Now",
    image: corporate,
    route: "/corporate",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <Separator title={"Services"} />
      <Card
        title="Holiday Banquet Menu"
        subtitle="View our holiday banquet menu for this season's celebrations."
        button="View Now"
        orientation="horizontal"
        className="holiday"
        image={xMasBanquet}
        route={
          "https://firebasestorage.googleapis.com/v0/b/maneeley.appspot.com/o/Holiday%2F283d5b80-86ca-47dc-aa6f-58f31b490d8d?alt=media&token=697d67a1-d5bd-4275-88ce-514830e3da16"
        }
      />
      <div className="services-cards">
        {cardData.map((i) => (
          <Card
            key={i.id}
            title={i.title}
            subtitle={i.subtite}
            button={i.button}
            image={i.image}
            route={i.route}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
