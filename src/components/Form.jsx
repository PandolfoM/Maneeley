import { Formik } from "formik";
import React from "react";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={{
        first: "",
        last: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
