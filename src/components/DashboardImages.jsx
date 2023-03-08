import { createStyles } from "@mantine/core";
import { useContext, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import useImages from "../hooks/useImages";
import DashboardGallery from "./DashboardGallery";

const useStyles = createStyles((theme, params, getRef) => ({
  chevron: {
    color: "white",
  },
  label: {
    color: "#bbb",
  },
  control: {
    backgroundColor: "#2e2e2e80",
    "&:hover": {
      backgroundColor: "#3c3c3c",
    },
  },
  item: {
    marginBottom: "0.5rem",
    overflow: "hidden",
    "&[data-active]": {
      backgroundColor: "#2e2e2e80",
    },
  },
}));

function DashboardImages() {
  const { images } = useContext(MenuContext);
  const { getImages } = useImages();
  const { classes } = useStyles();

  useEffect(() => {
    const get = async () => {
      await getImages();
    };

    get();
  }, []);

  return (
    <>
      <DashboardGallery classes={classes} name="Gallery" data={images[0]} />
      <DashboardGallery classes={classes} name="Slideshow" data={images[1]} />
    </>
  );
}

export default DashboardImages;
