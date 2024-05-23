import React, { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import paymentSchema from "./../../Schemas/PaymentSchema/PaymentSchema";
import Erro from "../Error/Erro";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $user } from "../Store/Login";
import { $cartAtom } from "../Store/cartAtom";

export default function Paymentinp() {
  const [user] = useRecoilState($user);

  const [cartData, setCartData] = useRecoilState($cartAtom);
  const navigat = useNavigate();
  function handlePayment(values, actions) {
    const newData = {
      payment: [
        {
          ...values,
          cart: cartData,
        },
      ],
    };

    axios
      .patch(`http://localhost:3000/users/${user.user.id}`, newData)
      .then(() => {
        actions.resetForm();
        navigat("/");
        toast.success("Payment successful!");
        setCartData([]);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while processing payment.");
      });
  }

  return (
    <div>
      <h4>Content</h4>
      <Fragment>
        <Formik
          initialValues={{
            email: "",
            cardNunmber: "",
            securityCode: "",
            nameCard: "",
            country: "",
            firstName: "",
            lastName: "",
            date: "",
            address: "",
            city: "",
            government: "",
            postalCode: "",
          }}
          validationSchema={paymentSchema}
          onSubmit={handlePayment}
        >
          {({ errors }) => {
            return (
              <Form action="" className="Payment-Form">
                <div className="payment-inpts">
                  <Field
                    type="email"
                    placeholder="Email Or Mobile Phone Number"
                    name="email"
                  />
                  <Erro>{<ErrorMessage name="email" />}</Erro>
                </div>

                {/* payment */}
                <div className="payment-credit">
                  <h4>Payment</h4>
                  <p>All transactions are secure and encrypted.</p>
                  <div className="credit-card">
                    <div className="credit-head">
                      <h6>Credit card</h6>
                      <hr />
                    </div>
                    <div className="credit-footer">
                      <div className="payment-inpts">
                        <Field
                          type="number"
                          placeholder="Card Number"
                          name="cardNunmber"
                        />
                        <Erro>{<ErrorMessage name="cardNunmber" />}</Erro>
                      </div>
                      <div className="row">
                        <div className="payment-inpts col-md-6">
                          <Field
                            type="date"
                            placeholder="Expiration Date"
                            name="date"
                          />
                          <Erro>{<ErrorMessage name="date" />}</Erro>
                        </div>
                        <div className="payment-inpts col-md-6">
                          <Field
                            type="number"
                            placeholder="Security Code"
                            name="securityCode"
                          />
                          <Erro>{<ErrorMessage name="securityCode" />}</Erro>
                        </div>
                      </div>
                      <div className="payment-inpts ">
                        <Field
                          type="text"
                          placeholder="Name On Card"
                          name="nameCard"
                        />
                        <Erro>{<ErrorMessage name="nameCard" />}</Erro>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="address">
                  <h4>Billing address</h4>

                  <div className="payment-inpts ">
                    <Field type="text" placeholder="Country" name="country" />
                    <Erro>{<ErrorMessage name="country" />}</Erro>
                  </div>

                  <div className="row">
                    <div className="payment-inpts col-md-6">
                      <Field
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                      />
                      <Erro>{<ErrorMessage name="firstName" />}</Erro>
                    </div>
                    <div className="payment-inpts col-md-6">
                      <Field
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                      />
                      <Erro>{<ErrorMessage name="lastName" />}</Erro>
                    </div>
                  </div>

                  <div className="payment-inpts ">
                    <Field type="text" placeholder="Address" name="address" />
                    <Erro>{<ErrorMessage name="address" />}</Erro>
                  </div>
                </div>

                <div className="row">
                  <div className="payment-inpts col-md-4">
                    <Field type="text" placeholder="city" name="city" />
                    <Erro>{<ErrorMessage name="city" />}</Erro>
                  </div>

                  <div className="payment-inpts col-md-4">
                    <Field
                      type="text"
                      placeholder="Government"
                      name="government"
                    />
                    <Erro>{<ErrorMessage name="government" />}</Erro>
                  </div>

                  <div className="payment-inpts col-md-4">
                    <Field
                      type="number"
                      placeholder="Postal Code"
                      name="postalCode"
                    />
                    <Erro>{<ErrorMessage name="postalCode" />}</Erro>
                  </div>
                </div>

                <button type="submit" disabled={Object.keys(errors).length}>
                  Pay Now
                </button>
              </Form>
            );
          }}
        </Formik>
      </Fragment>
    </div>
  );
}
