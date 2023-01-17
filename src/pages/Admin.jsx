import { PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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

function Admin() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: yupResolver(validationSchema),
  });

  const handleSubmit = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Page>
      <Separator title={"Admin Panel"} />
      <form
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
        className="contact-form">
        <TextInput
          variant="unstyled"
          name="email"
          label="Email"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <PasswordInput
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
