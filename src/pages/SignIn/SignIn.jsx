import React, { Fragment, useEffect } from "react";
import "../Create/Create.scss";
import SignBackground from "./../../componatnts/SignBackground/SignBackground";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import Erro from "./../../componatnts/Error/Erro";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $user } from "../../componatnts/Store/Login";
import { toast } from "react-toastify";
import LoginSchema from "../../Schemas/LoginSchema/LoginSchema";
import HandleToTop from "../../componatnts/Use/HandleToTop";

export default function SignIn() {
  const [isAuth, setIsAuth] = useRecoilState($user);
  const navigat = useNavigate();

  function handelRegister(values, actions) {
    axios(
      `http://localhost:3000/users?email=${values.email}&password=${values.password}`
    ).then((data) => {
      if (data.data.length) {
        const authdata = {
          isAuth: true,
          user: data.data[0],
        };
        setIsAuth(authdata);
        localStorage.setItem("loggedInData", JSON.stringify(authdata));
        navigat("/");
        toast.success("Valid Email");
        HandleToTop();
      } else {
        toast.error("Password Or Email Is Not Valid");
      }
    });
    actions.resetForm();
  }

  {
    return (
      <div>
        <SignBackground title={`Login`} page={`Login`} />
        <div>
          <Fragment>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={handelRegister}
            >
              {({ errors }) => {
                return (
                  <Form action="" className="Sign-Form">
                    <h1>Login</h1>

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
                    <p>Forget Your Password?</p>
                    <button
                      type="submit"
                      disabled={Object.keys(errors).length}
                      className="login-btn"
                    >
                      SIGN IN
                    </button>
                    <Link to={`/Create`}>Create account</Link>
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
