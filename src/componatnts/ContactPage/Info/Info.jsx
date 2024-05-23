import React from "react";
import "./info.scss";
export default function Info() {
  return (
    <div className="info">
      <div className="information-sec ">
        <div className="col-lg-3 col-md-6 col-sm-12  ">
          <div className="information address-info">
            <h3>Address</h3>
            <p>12 Van Dyke St,</p>
            <p>Brooklyn, NY 11231</p>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-12  ">
          <div className="information ">
            <h3>Phone</h3>
            <a>1 (800) 123-4567</a>
            <a>1 (800) 123-4567</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12  ">
          <div className="information">
            <h3>Mail</h3>
            <a>sales@yoursite.com</a>
            <a>hr@yoursite.com</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12  ">
          <div className="information">
            <h3>Hours</h3>
            <a>Mon - Fri: 8 AM - 6 PM</a>
            <a>Sat: 9 AM - 4 PM</a>
          </div>
        </div>
      </div>
    </div>
  );
}
