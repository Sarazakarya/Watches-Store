import React, { Fragment, useEffect, useState } from "react";
import "./Create.scss";
import SignBackground from "./../../componatnts/SignBackground/SignBackground";
import { ErrorMessage, Field, Form, Formik } from "formik";
import registerSchema from "./../../Schemas/registerSchema/registerSchema";
import axios from "axios";
import Erro from "./../../componatnts/Error/Erro";
import { useNavigate } from "react-router-dom";
import Loader from "../../componatnts/Loader/Loader";

export default function Create() {
  const [Loading, setIsLoading] = useState(false);
  const navigat = useNavigate();
  function handelRegister(values, actions) {
    const newData = { ...values, cart: [], watchList: [] };
    setIsLoading(true);
    axios.post(`http://localhost:3000/users`, newData).then(() => {
      console.log("registeres");
    });
    setTimeout(() => {
      setIsLoading(false);
      navigat("/SignIn");
    }, 2000);

    actions.resetForm();
  }

  {
    return (
      <div>
        <SignBackground title={`Create Account`} page={`Create Account`} />
        <div>
          <Fragment>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handelRegister}
            >
              {({ errors }) => {
                return (
                  <Form action="" className="Sign-Form">
                    <h1>Create Account</h1>
                    <div className="form-inp">
                      <Field type="text" placeholder=" Name" name="name" />
                      <Erro>{<ErrorMessage name="name" />}</Erro>
                    </div>

                    <div className="form-inp">
                      <Field type="email" placeholder="Email" name="email" />
                      <Erro>{<ErrorMessage name="email" />}</Erro>
                    </div>
                    <div className="form-inp">
                      <Field
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                      <Erro>{<ErrorMessage name="password" />}</Erro>
                    </div>
                    <button type="submit" disabled={Object.keys(errors).length}>
                      {Loading ? <Loader /> : "CREATE"}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </Fragment>
        </div>
      </div>
    );
  }
}
