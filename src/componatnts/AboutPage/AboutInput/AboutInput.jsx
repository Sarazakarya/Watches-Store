import React from "react";
import { Fragment } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

export default function AboutInput() {
  function handleContactSubmit(values, actions) {
    const newData = { ...values };
    axios.post(`http://localhost:3000/Contact`, newData).then(() => {
      actions.resetForm();
      toast.success("we will contact you soon");
    });
  }

  return (
    <Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={handleContactSubmit}
      >
        <Form className="col-lg-6 col-md-12 map-des">
          <h1>DROP LINE</h1>
          <div className="first-inpts ">
            <Field
              type="text"
              placeholder="Name"
              className="col-md-6 col-sm-12"
              name="name"
              id="name"
            />
            <Field
              type="email"
              placeholder="Email"
              className="col-md-6 col-sm-12"
              name="email"
              id="email"
            />
          </div>

          <Field
            name="message"
            as="textarea"
            id="message"
            cols="30"
            rows="10"
            placeholder="Comment"
            className="teatarea"
          ></Field>
          <button className="send-btn" type="submit">
            Send Message
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
}
