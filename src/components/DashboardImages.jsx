import { createStyles } from "@mantine/core";
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
  const { classes } = useStyles();

  return (
    <>
      <DashboardGallery classes={classes} name="Gallery" />
      <DashboardGallery classes={classes} name="Slideshow" />
    </>
  );
}

export default DashboardImages;
