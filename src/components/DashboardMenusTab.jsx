import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  createStyles,
  FileInput,
  Table,
  TextInput,
} from "@mantine/core";
import React, { useContext, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import useMenus from "../hooks/useMenus";
import DashboardMenus from "./DashboardMenus";

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
  root: {
    width: "100%",
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

function DashboardMenusTab() {
  const { menus } = useContext(MenuContext);
  const { getMenus } = useMenus();
  const { classes } = useStyles();

  useEffect(() => {
    const get = async () => {
      await getMenus();
    };

    get();
  }, []);

  return (
    <>
      <DashboardMenus classes={classes} name="Catering" data={menus[1]} />
      <DashboardMenus classes={classes} name="Banquets" data={menus[0]} />
    </>
  );
}

export default DashboardMenusTab;
