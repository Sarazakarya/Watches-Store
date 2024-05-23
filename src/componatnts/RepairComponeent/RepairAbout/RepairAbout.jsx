import React from "react";
import "../../Watch/WatchDescription/WatchDescription.scss";
import WatchBackground from "../../Assets/repairbackground.webp";
import { Link } from "react-router-dom";
import HandleToTop from "../../Use/HandleToTop";

export default function RepairhAbout() {
  return (
    <div className="WatchDescription row">
      <div className="WatchDescription-left col-md-6 col-sm-12 col-xs-12 ">
        <h1>Professional Services by Reprizo Co.</h1>
        <p>
          We are a family-owned and operated full-service jeweler and
          professional watch repair store located in the heart of Lansing, MI.
          Reprizo are experts in repairing fine watches from world-renowned
          brands including Rolex, Breitling, Patek Philippe, T...
        </p>
        <Link to={"/About"} onClick={HandleToTop}>
          <button className="View-btn">ABOUT US</button>
        </Link>
      </div>
      <div className="WatchDescription-right col-md-6 col-sm-12  col-xs-12">
        <img src={WatchBackground} alt="" className="Watch-img" />
      </div>
    </div>
  );
}
