import { Textarea, TextInput } from "@mantine/core";

import React from "react";
import * as Yup from "yup";

import Button from "../components/Button";
import Form from "../components/Form";

const validationSchema = Yup.object().shape({
  first: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required()
    .label("First Name"),
  last: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required()
    .label("Last Name"),
  email: Yup.string().email("Invalid email").required().label("Email"),
  phone: Yup.number().max(10, "Too Long").label("Phone Number"),
  message: Yup.string().min(10, "Too Short").required().label("Message"),
});

function Contact() {
  return (
    <div className="contact">
      {/* <h3 className="separator">
        <hr />
        Contact
        <hr />
      </h3> */}
      <div className="contact-form">
        <Form
          initialValues={{
            first: "",
            last: "",
            email: "",
            phone: "",
            message: "",
          }}
          validationSchema={validationSchema}>
          <div className="form-name">
            <TextInput variant="unstyled" label="First Name" withAsterisk />
            <TextInput variant="unstyled" label="Last Name" withAsterisk />
          </div>
          <TextInput variant="unstyled" label="Email" withAsterisk />
          <TextInput variant="unstyled" label="Phone" />
          <Textarea
            variant="unstyled"
            label="Message"
            withAsterisk
            minRows={5}
            maxRows={5}
          />
          <Button name={"Submit"} />
        </Form>
      </div>
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
