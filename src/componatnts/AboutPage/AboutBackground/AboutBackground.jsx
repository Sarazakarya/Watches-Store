import React from "react";
import "./AboutBackground.scss";
import { Link } from "react-router-dom";

export default function AboutBackground(props) {
  return (
    <div className="AboutBackground">
      <div className="img-about"></div>
      <div className="about-description">
        <h4>{props.title}</h4>
        <div className="about-link">
          <Link to={"/"}>Home</Link>/<Link>{props.page}</Link>
        </div>
      </div>
    </div>
  );
}
