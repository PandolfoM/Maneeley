import * as Yup from "yup";
import { createStyles, Textarea, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import React, { useEffect, useRef, useState } from "react";
import Reaptcha from "reaptcha";

import Button from "../components/Button";
import Separator from "../components/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SubtleButton from "../components/SubtleButton";
import Page from "../components/Page";
import { notifications } from "@mantine/notifications";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { Body, Heading, Html, Text } from "@react-email/components";
import axios from "axios";

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
  phone: Yup.number()
    .notRequired()
    .nullable()
    .typeError("Invalid phone number")
    .label("Phone Number")
    .transform((_, val) => (val !== "" ? Number(val) : null)),

  message: Yup.string()
    .min(10, "Too Short")
    .required("Required")
    .label("Message"),
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

function Contact() {
  const { classes } = useStyles();
  const captchaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const verify = () => {
    captchaRef.current.getResponse().then((res) => {
      if (res) {
        handleSubmit();
      }
    });
  };

  const handleSubmit = async () => {
    notifications.show({
      id: "submit-noti",
      title: "Sending",
      message: "Please wait while we send your message.",
      loading: true,
      autoClose: false,
      withCloseButton: false,
    });

    try {
      const { first, last, email, phone, message } = form.values;

      const res = await axios.post("http://localhost:3000/api/emails/send", {
        from: "Maneeley's Contact Form",
        to: import.meta.env.VITE_SENDEMAIL,
        subject: "Maneeley's Contact Form",
        emailProps: {
          Name: `${first} ${last}`,
          Email: email,
          Phone: phone ? phone : "N/A",
          Message: message,
        },
        text: `
            - Name: ${first} ${last}
            - Email: ${email}
            - Phone: ${phone}
              - Message: ${message}
            `,
      });

      if (res.status !== 200) {
        return notifications.update({
          id: "submit-noti",
          title: "Error",
          message: "There has been an error!",
          color: "red",
          icon: <FontAwesomeIcon icon={faX} />,
        });
      }

      form.reset();
      notifications.update({
        id: "submit-noti",
        color: "green",
        icon: <FontAwesomeIcon icon={faCheck} />,
        title: "Sent!",
        message: "Your message has been sent!",
      });
    } catch (e) {
      notifications.update({
        id: "submit-noti",
        title: "Error",
        message: "There has been an error!",
        color: "red",
        icon: <FontAwesomeIcon icon={faX} />,
      });
    } finally {
      captchaRef.current.reset();
    }
  };

  return (
    <Page flex>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          captchaRef.current.execute();
        }}
        className="contact-form contact-form-100"
      >
        <div className={`form-name ${classes}`}>
          <TextInput
            classNames={classes}
            variant="unstyled"
            name="first"
            label="First Name"
            withAsterisk
            {...form.getInputProps("first")}
          />
          <TextInput
            classNames={classes}
            variant="unstyled"
            name="last"
            label="Last Name"
            withAsterisk
            {...form.getInputProps("last")}
          />
        </div>
        <TextInput
          classNames={classes}
          variant="unstyled"
          name="email"
          label="Email"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <TextInput
          classNames={classes}
          variant="unstyled"
          name="phone"
          label="Phone"
          {...form.getInputProps("phone")}
        />
        <Textarea
          classNames={classes}
          name="message"
          variant="unstyled"
          label="Message"
          withAsterisk
          minRows={5}
          maxRows={5}
          {...form.getInputProps("message")}
        />
        <Reaptcha
          sitekey={import.meta.env.VITE_SITEKEY}
          ref={captchaRef}
          onVerify={verify}
          size="invisible"
          theme="dark"
        />
        <Button name={"Submit"} type="submit" />
      </form>
      <aside className="contact-aside">
        <div className="employment">
          <Separator title={"Employment"} />
          <p>
            We are always looking for the right people. Feel free to download
            and fill out our{" "}
            <SubtleButton
              name={"application for employment."}
              href="https://firebasestorage.googleapis.com/v0/b/maneeley.appspot.com/o/Employment_Application.pdf?alt=media&token=a2fa4a36-feef-414a-a03d-d129ff2fc590"
            />
          </p>
        </div>
        <div className="socials">
          <Separator title={"Socials"} />
          <p>
            Phone:{" "}
            <SubtleButton name={"(860) 528-6622"} href="tel:8605286622" />
          </p>
          <p>
            Fax: <SubtleButton name="(860) 291-9362" href="tel:8602919362" />
          </p>
          <p>
            Lodge:{" "}
            <SubtleButton
              name="65 Rye Street, South Windsor, CT 06074"
              href="https://goo.gl/maps/MdJ6XHXDynkjjzQj9"
            />
          </p>
          <p>
            Office:{" "}
            <SubtleButton
              name="136 Commerce Way, South Windsor, CT 06074"
              href="https://goo.gl/maps/69M4YL9UkVaJhY4c6"
            />
          </p>
          <div className="dark">
            <a href="https://www.facebook.com/Maneeleys" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} size="lg" title="Facebook" />
            </a>
            <a href="https://www.instagram.com/maneeleys/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" title="Instagram" />
            </a>
          </div>
        </div>
      </aside>
    </Page>
  );
}

const ContactEmail = (data) => {
  const { first, last, email, phone, message } = data;
  return (
    <Html>
      <Body>
        <Heading as="h2">Contact Form Submission</Heading>
        <Text>
          Name: {first} {last}
        </Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone ? phone : "N/A"}</Text>
        <Text>Message: {message}</Text>
      </Body>
    </Html>
    // <div>
    //   <h2>Contact Form Submission</h2>
    //   <p>
    //     Name: {first} {last}
    //   </p>
    //   <p>Email: {email}</p>
    //   <p>Phone: {phone ? phone : "N/A"}</p>
    //   <p>Message: {message}</p>
    // </div>
  );
};

export default Contact;
