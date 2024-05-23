import React from "react";
import "./WatchDescription.scss";
import WatchBackground from "../../Assets/backgroundwatch1.webp";
import { Link } from "react-router-dom";
import HandleToTop from "./../../Use/HandleToTop";

export default function WatchDescription() {
  return (
    <div className="WatchDescription row">
      <div className="WatchDescription-left col-md-6 col-sm-12 col-xs-12 ">
        <h1>Swiss Essence</h1>
        <p>
          Reprizo is a family-owned professional watch and jewelry repair store
          chain located in NewYork. We are experts in fixing and repairing
          watches from world-renowned brands including Rolex, Breitling, Bell &
          Ross, and many other brands. We offer a wi...
        </p>
        <Link to={"./AllCOLLECTION"} onClick={HandleToTop}>
          <button className="View-btn"> Learn More</button>
        </Link>
      </div>
      <div className="WatchDescription-right col-md-6 col-sm-12  col-xs-12">
        <img src={WatchBackground} alt="" className="Watch-img" />
      </div>
    </div>
  );
}
