import React from "react";
import "./SignBackground.scss";
import { Link } from "react-router-dom";
export default function SignBackground(props) {
  return (
    <div className="SignBackground">
      <div className="img-sign"></div>
      <div className="about-description">
        <h4>{props.title}</h4>
        <div className="about-link">
          <Link to={"/"}>Home</Link>/<Link>{props.page}</Link>
        </div>
      </div>
    </div>
  );
}
