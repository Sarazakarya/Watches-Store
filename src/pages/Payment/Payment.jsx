import React from "react";
import "./Payment.scss";
import Paymentinp from "../../componatnts/PaymentComponent/Paymentinp";
import PaymentItem from "../../componatnts/PaymentComponent/PaymentItem/PaymentItem";

export default function Payment() {
  return (
    <div className="Payment">
      <hr />
      <div className="container">
        <div className="row">
          <div className="payment-inp col-lg-6 col-md-12">
            <Paymentinp />
          </div>
          <div className=" col-lg-6 col-md-12">
            <PaymentItem />
          </div>
        </div>
      </div>
    </div>
  );
}
