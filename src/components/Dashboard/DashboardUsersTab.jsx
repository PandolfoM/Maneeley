import {
  Checkbox,
  createStyles,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import AppButton from "../Button";
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
  visibilityToggle: {
    "&:hover": {
      background: "transparent",
    },
  },
  innerInput: {
    padding: "1px 2px",
  },
}));

function DashboardMenusTab() {
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);
  const { getUsers } = useUsers();
  const { classes } = useStyles();

  useEffect(() => {
    const get = async () => {
      const result = await getUsers();
      setUsers(result);
    };

    get();
  }, []);

  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      customPassword: false,
    },

    validate: {
      username: isNotEmpty(),
    },
  });

  return (
    <>
      <div className="dashboard-accordion">
        <form
          className="dashboard-user-form"
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            form.reset();
          })}>
          <TextInput
            classNames={classes}
            variant="unstyled"
            size="xs"
            placeholder="Username"
            withAsterisk
            {...form.getInputProps("username")}
          />
          <TextInput
            classNames={classes}
            variant="unstyled"
            size="xs"
            placeholder="Email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            disabled={form.values.customPassword}
            classNames={classes}
            variant="unstyled"
            size="xs"
            placeholder="Password"
            withAsterisk
            {...form.getInputProps("password")}
          />
          <Checkbox
            sx={{
              input: {
                border: "1px solid #3c3c3c",
                backgroundColor: "#2e2e2e80",
              },
            }}
            label="Have user create their own password"
            {...form.getInputProps("customPassword", { type: "checkbox" })}
          />
          <AppButton name={"SUBMIT"} type="submit" />
        </form>
      </div>
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
