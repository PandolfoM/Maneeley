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
            <p style={{ marginTop: 0 }}>
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
