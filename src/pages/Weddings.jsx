import { Carousel } from "@mantine/carousel";
import { createStyles } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";
import Page from "../components/Page";

import hero from "../assets/hero.jpg";
import Separator from "../components/Separator";

const useStyles = createStyles((theme, params, getRef) => ({
  indicator: {
    width: "2rem",
    transition: "width 250ms ease",

    "&[data-active]": {
      width: "3rem",
    },
  },
  control: {
    "&[data-inactive]": {
      opacity: 0,
      cursor: "default",
    },
  },
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },
  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

function Weddings() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Page>
      <Separator title="Weddings" />
      <Carousel
        maw={"75%"}
        mx="auto"
        withIndicators
        height={500}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        classNames={classes}>
        <Carousel.Slide>
          <img src={hero} style={{ maxWidth: "100%" }} />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={hero} style={{ maxWidth: "100%" }} />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={hero} style={{ maxWidth: "100%" }} />
        </Carousel.Slide>
      </Carousel>
    </Page>
  );
}

export default Weddings;
