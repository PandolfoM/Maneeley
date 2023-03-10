import { createStyles } from "@mantine/core";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import useImages from "../../hooks/useImages";
import DashboardImages from "./DashboardImages";

const useStyles = createStyles(() => ({
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
  wrapper: {
    border: "1px solid #3c3c3c",
    backgroundColor: "#2e2e2e80",

    "&:focus": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: "linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1",
    },
    "&:focus-within": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: "linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1",
    },
  },
}));

function DashboardImagesTab() {
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
      <DashboardImages classes={classes} name="Gallery" data={images[0]} />
      <DashboardImages classes={classes} name="Slideshow" data={images[1]} />
    </>
  );
}

export default DashboardImagesTab;
