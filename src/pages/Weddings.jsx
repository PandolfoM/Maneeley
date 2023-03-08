import { Carousel } from "@mantine/carousel";
import { createStyles, Image } from "@mantine/core";
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
  const { getImages } = useImages();
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  useEffect(() => {
    const get = async () => {
      console.log("ran");
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
    </Page>
  );
}

export default Weddings;
