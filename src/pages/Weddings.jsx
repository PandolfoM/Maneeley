import { Carousel } from "@mantine/carousel";
import { createStyles, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { MenuContext } from "../context/MenuContext";
import { db } from "../firebase";
import useImages from "../hooks/useImages";

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
  const { slideshow, setSlideshow } = useContext(MenuContext);
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const tablet = useMediaQuery("(min-width: 900px)");
  const mobile = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    const get = async () => {
      const docRef = doc(db, "images", "slideshow");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSlideshow(docSnap.data());
      } else {
        console.log("No document");
      }
    };

    !slideshow.id && get();
  }, []);

  return (
    <Page>
      <Carousel
        maw={"100%"}
        mx="auto"
        withIndicators
        height={tablet ? 500 : mobile ? 400 : 300}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        classNames={classes}>
        {slideshow.images?.map((i) => (
          <Carousel.Slide key={i.id}>
            <LazyLoadImage
              src={i.file}
              style={{ maxWidth: "100%" }}
              alt={i.name}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Separator title="Weddings" style={{ marginTop: "4rem" }} />
      <p>
        The Grand Lodge at Maneeley’s is a full service wedding & event venue in
        South Windsor, CT. Five acres of manicured grounds are a picture-perfect
        backdrop for your celebration. Maneeleys exemplifies rustic romantic
        charm, with wooden walls and exposed beam ceilings. We can accommodate
        100 – 200 guests, with space available in the Grand Lodge, as well as
        the connecting Grand Tent. Maneeleys is a top leader in the CT wedding
        industry, creating amazing memories for thousands of couples over the
        last 25 years. We will assist you with every detail during the planning
        process of your wedding day. Our top tier staff will attend to your
        guests, and our bridal attendant will give you their undivided
        attention. Our team of expert chefs, lead by our Executive Chef Edgardo,
        will prepare a custom, mouthwatering menu for you and your guests to
        experience.
      </p>
    </Page>
  );
}

export default Weddings;
