import { Carousel } from "@mantine/carousel";
import { Text, createStyles, getStylesRef } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { MenuContext } from "../context/MenuContext";
import { db } from "../firebase";
import LazyImage from "../components/LazyImage";
import Menus from "../components/Menus";

const useStyles = createStyles((theme, params) => ({
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
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },
  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

function Weddings() {
  const [menus, setMenus] = useState([]);
  const { slideshow, setSlideshow } = useContext(MenuContext);
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const desktop = useMediaQuery("(min-width: 1200px)");
  const tablet = useMediaQuery("(min-width: 900px)");
  const mobile = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
    const get = async () => {
      const docRef = doc(db, "images", "Slideshow");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSlideshow(docSnap.data());
      } else {
        return;
      }
    };

    !slideshow.id && get();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsub = async () => {
      const docRef = doc(db, "menus", "Wedding");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMenus(docSnap.data());
      } else {
        return;
      }
    };

    unsub();
  }, []);

  return (
    <Page>
      <Carousel
        maw={desktop ? "75%" : "100%"}
        mx="auto"
        withIndicators
        height={tablet ? 500 : mobile ? 400 : 300}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        classNames={classes}>
        {slideshow.images?.map((i) => (
          <Carousel.Slide key={i.id}>
            <LazyImage
              src={i.file}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt={i.name}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Text color="#bbb" fw="lighter" size="sm" align="center">
        Photos were provided by Jennifer Cardinal Photography
      </Text>
      <div style={{ marginTop: "4rem" }}>
        <Separator title="Weddings" />
        <div className="wedding-content">
          <div>
            {/* <p style={{ marginTop: 0 }}>
              The Grand Lodge at Maneeley's is a full service wedding & event
              venue in South Windsor, CT. Five acres of manicured grounds are a
              picture-perfect backdrop for your celebration. Maneeley's
              exemplifies rustic romantic charm, with wooden walls and exposed
              beam ceilings. We can accommodate 100 - 200 guests, with space
              available in the Grand Lodge, as well as the connecting Grand
              Tent.
            </p>
            <p>
              Maneeley's is a top leader in the CT wedding industry, creating
              amazing memories for thousands of couples over the last 25 years.
              We will assist you with every detail during the planning process
              of your wedding day. Our top tier staff will attend to your
              guests, and our bridal attendant will give you their undivided
              attention. Our team of expert chefs, lead by our Executive Chef
              Edgardo, will prepare a custom, mouthwatering menu for you and
              your guests to experience.
            </p> */}
            <p>
              <b>Maneeley's Rustic Romantic Lodge</b> - The Perfect Setting for
              Your Love Story
            </p>
            <p>
              Nestled in the heart of South Windsor, Connecticut, Maneeley's
              Rustic Romantic Lodge is a breathtaking venue designed to bring
              your wedding dreams to life. With its warm and inviting
              atmosphere, this picturesque lodge offers the perfect blend of
              rustic charm and romantic elegance, creating unforgettable moments
              for you and your guests.
            </p>
            <p>
              Whether you're planning an intimate gathering or a grand
              celebration, our venue is designed to accommodate weddings from
              100 to 225 guests, ensuring the perfect space for your special
              day. Surrounded by serene landscapes and timeless beauty, the
              lodge features stunning wood-beam interiors, cozy fire pit , and
              an enchanting ambiance that sets the stage for heartfelt
              celebrations.
            </p>
            <p>
              At Maneeley's, we offer exceptional service, delicious catering,
              and a setting that feels like home—so you can relax and enjoy
              every moment. Your wedding deserves a venue as special as your
              love story, and we're honored to be part of it.{" "}
            </p>
            <p>
              <b>
                Maneeley's Rustic Romantic Lodge: Where memories are made and
                forever begins.
              </b>
            </p>
          </div>
          <aside>
            <Menus menus={menus} separator={false} />
          </aside>
        </div>
      </div>
    </Page>
  );
}

export default Weddings;
