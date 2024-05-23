import React from "react";
import AboutBackground from "../../componatnts/AboutPage/AboutBackground/AboutBackground";
import Info from "../../componatnts/ContactPage/Info/Info";
import ContactEmail from "../../componatnts/ContactPage/ContactEmail/ContactEmail";
import ContactMap from "../../componatnts/ContactPage/ContactMap/ContactMap";

export default function Contact() {
  return (
    <div>
      <AboutBackground title={"Contact-Us"} page={"Contact"} />
      <Info />
      <ContactEmail />
      <ContactMap />
    </div>
  );
}
