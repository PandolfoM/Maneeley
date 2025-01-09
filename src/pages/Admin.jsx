import { createStyles, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../auth/context";

import Button from "../components/Button";
import Page from "../components/Page";
import Separator from "../components/Separator";
import { auth } from "../firebase";
import useUsers from "../hooks/useUsers";
import SubtleButton from "../components/SubtleButton";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { classes } = useStyles();
  const { getUser } = useUsers();
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
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        setCurrentUser(user.user);
        setError("");
        const getUserData = await getUser(user.user.uid);
        if (getUserData.tempPassword) {
          setLoading(false);
          navigate("/newpassword");
        } else {
          setLoading(false);
          navigate("/dashboard");
        }
      })
      .catch((e) => {
        setError("Incorrect email or password!");
        setLoading(false);
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
        <SubtleButton name={error} className="delete" />
        <Button name="Login" type="submit" loading={loading} />
      </form>
    </Page>
  );
}

export default Admin;
