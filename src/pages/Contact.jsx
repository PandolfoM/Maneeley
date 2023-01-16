import { Textarea, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import React from "react";
import * as Yup from "yup";

import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  first: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required")
    .label("First Name"),
  last: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required")
    .label("Last Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .label("Email"),
  phone: Yup.number().typeError("Invalid number").label("Phone Number"),
  message: Yup.string()
    .min(10, "Too Short")
    .required("Required")
    .label("Message"),
});

function Contact() {
  const form = useForm({
    initialValues: {
      first: "",
      last: "",
      email: "",
      phone: "",
      message: "",
    },

    validate: yupResolver(validationSchema),
  });

  return (
    <div className="contact">
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        className="contact-form">
        <div className="form-name">
          <TextInput
            variant="unstyled"
            name="first"
            label="First Name"
            withAsterisk
            {...form.getInputProps("first")}
          />
          <TextInput
            variant="unstyled"
            name="last"
            label="Last Name"
            withAsterisk
            {...form.getInputProps("last")}
          />
        </div>
        <TextInput
          variant="unstyled"
          name="email"
          label="Email"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <TextInput
          variant="unstyled"
          name="phone"
          label="Phone"
          {...form.getInputProps("phone")}
        />
        <Textarea
          name="message"
          variant="unstyled"
          label="Message"
          withAsterisk
          minRows={5}
          maxRows={5}
          {...form.getInputProps("message")}
        />
        <Button name={"Submit"} type="submit" />
      </form>
      <div className="contact-job">
        <h3 className="separator">
          <hr />
          Employment
          <hr />
        </h3>
        <p>
          We are always looking for the right people. Feel free to download and
          fill out our{" "}
          <a
            href="http://maneeleys.com/wp-content/uploads/2015/05/Employment-Application.pdf"
            target="_blank">
            application for employment.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
