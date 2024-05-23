import React from "react";
import { Fragment } from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

import "./ContactEmial.scss";
export default function ContactEmail() {
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
        <div className="ContactEmail ">
          <Form className="Contact-Input">
            <h1>DROP LINE</h1>

            <div className="first-inpts">
              <Field type="text" placeholder="Name" name="name" />
              <Field type="Email" placeholder="Email" name="email" />
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
        </div>
      </Formik>
    </Fragment>
  );
}
