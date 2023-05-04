import { createStyles, PasswordInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";
import Button from "../components/Button";
import Page from "../components/Page";
import Separator from "../components/Separator";
import SubtleButton from "../components/SubtleButton";
import useUsers from "../hooks/useUsers";

const useStyles = createStyles(() => ({
  label: {
    color: "#fffcf1",
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
}));

function NewPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { classes } = useStyles();
  const { resetPassword } = useUsers();
  const { currentUser } = useContext(AuthContext);

  const form = useForm({
    initialValues: {
      password: "",
    },

    validate: {
      password: isNotEmpty(),
    },
  });

  return (
    <Page>
      <Separator title={"Create Password"} />
      <form
        className="contact-form"
        onSubmit={form.onSubmit(async (values) => {
          setLoading(true);
          resetPassword(values.password, currentUser, true)
            .then(() => {
              setLoading(false);
              navigate("/dashboard");
            })
            .catch(() => {
              setLoading(false);
              setError("There has been an error!");
            });
        })}>
        <PasswordInput
          classNames={classes}
          variant="unstyled"
          name="password"
          label="Password"
          withAsterisk
          {...form.getInputProps("password")}
        />
        <SubtleButton name={error} className="delete" />
        <Button name="Submit" type="submit" loading={loading} />
      </form>
    </Page>
  );
}

export default NewPassword;
