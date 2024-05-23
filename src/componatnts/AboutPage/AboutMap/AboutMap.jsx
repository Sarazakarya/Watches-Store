import React from "react";
import "./AboutMap.scss";
import AboutInput from "../AboutInput/AboutInput";
export default function AboutMap() {
  return (
    <div className="AboutMap">
      <AboutInput />
      <div className="col-lg-6 col-md-12 map-ifram">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23095.82979065976!2d-79.381667!3d43.648611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a57d767f%3A0x935ab2eb9fd5fb31!2sFirst%20Canadian%20Place!5e0!3m2!1sen!2sus!4v1704844696123!5m2!1sen!2sus"
          style={{ border: 0, width: "100%", height: "400px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
