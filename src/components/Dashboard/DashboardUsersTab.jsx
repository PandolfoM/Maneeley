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
import SubtleButton from "../SubtleButton";
import DashboardUsers from "./DashboardUsers";

const useStyles = createStyles((theme, { edit }) => ({
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
    position: "relative",
    "&[data-active]": {
      backgroundColor: "#2e2e2e80",
    },
  },
  wrapper: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: edit ? "#5ecd74" : "#3c3c3c",
    backgroundColor: "#2e2e2e80",

    "&:focus": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: !edit && "linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1",
    },
    "&:focus-within": {
      borderWidth: "1px",
      borderStyle: "solid",
      borderImage: !edit && "linear-gradient(0deg, #b17900 0%, #fdbb2d 60%) 1",
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
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { getUsers, createUser, updateUser } = useUsers();
  const { classes } = useStyles({ edit });

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
      oldEmail: "",
    },

    validate: {
      username: isNotEmpty(),
      email: isNotEmpty(),
      password: (value, values) => {
        edit
          ? null
          : isNotEmpty() || values.customPassword
          ? null
          : isNotEmpty();
      },
    },
  });

  return (
    <>
      <div className="dashboard-accordion">
        <form
          className="dashboard-user-form"
          onSubmit={form.onSubmit(async (values) => {
            setLoading(true);
            if (edit) {
              const updateuser = await updateUser(values, users, setUsers);
              if (updateuser) {
                setError(updateuser);
              } else {
                setEdit(false);
                setError("");
                form.reset();
              }
              setLoading(false);
            } else {
              const createuser = await createUser(values, users, setUsers);
              if (createuser) {
                setError(createuser);
              } else {
                setError("");
                form.reset();
              }
              setLoading(false);
            }
          })}>
          {edit && (
            <div className="dashboard-editmode">
              <div className="dashboard-editmode-header">
                <p>Edit mode enabled</p>
                <SubtleButton
                  name={"Disable"}
                  className="delete"
                  onClick={() => {
                    form.setValues({
                      username: "",
                      email: "",
                      oldEmail: "",
                    });
                    setEdit(false);
                  }}
                />
              </div>
            </div>
          )}
          <TextInput
            disabled={loading}
            classNames={classes}
            sx={{ borderColor: "red" }}
            variant="unstyled"
            size="xs"
            placeholder="Username"
            withAsterisk
            {...form.getInputProps("username")}
          />
          <TextInput
            disabled={loading}
            classNames={classes}
            variant="unstyled"
            size="xs"
            placeholder="Email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            disabled={form.values.customPassword || loading}
            classNames={classes}
            variant="unstyled"
            size="xs"
            placeholder="Password"
            withAsterisk
            {...form.getInputProps("password")}
          />
          <Checkbox
            disabled={loading}
            sx={{
              input: {
                border: "1px solid #3c3c3c",
                backgroundColor: "#2e2e2e80",
              },
            }}
            label="Have user create their own password next time they login"
            {...form.getInputProps("customPassword", { type: "checkbox" })}
          />
          <SubtleButton name={error} className="delete" />
          <AppButton name={"SUBMIT"} type="submit" loading={loading} />
        </form>
      </div>
      <DashboardUsers
        classes={classes}
        name="Users"
        data={users}
        users={users}
        setUsers={setUsers}
        form={form}
        setEdit={setEdit}
      />
    </>
  );
}

export default DashboardMenusTab;
