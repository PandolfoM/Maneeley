import { createStyles, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../auth/context";

import Button from "../components/Button";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { auth } from "../firebase";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .label("Email"),
  password: Yup.string().required("Required").label("Password"),
});

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

function Admin() {
  const { classes } = useStyles();
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: yupResolver(validationSchema),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setCurrentUser(user.user);
        navigate("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Page>
      <Separator title={"Admin Login"} />
      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className="contact-form">
        <TextInput
          classNames={classes}
          variant="unstyled"
          name="email"
          label="Email"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <PasswordInput
          classNames={classes}
          variant="unstyled"
          name="password"
          label="Password"
          withAsterisk
          {...form.getInputProps("password")}
        />
        <Button name="Login" type="submit" />
      </form>
    </Page>
  );
}

export default Admin;
