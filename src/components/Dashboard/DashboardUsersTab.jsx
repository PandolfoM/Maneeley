import { createStyles } from "@mantine/core";
import React, { useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import DashboardUsers from "./DashboardUsers";

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

function DashboardMenusTab() {
  const [users, setUsers] = useState([]);
  const { getUsers } = useUsers();
  const { classes } = useStyles();

  useEffect(() => {
    const get = async () => {
      const result = await getUsers();
      setUsers(result);
    };

    get();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <DashboardUsers
        classes={classes}
        name="Users"
        data={users}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
}

export default DashboardMenusTab;
