import React from "react";
import aboutrepair from "../../Assets/aboutrepair.webp";
import "../../Watch/WatchDescription/WatchDescription.scss";
import { Link } from "react-router-dom";
import HandleToTop from "../../Use/HandleToTop";
export default function AboutSescription() {
  return (
    <div>
      <div className="WatchDescription row">
        <div className="WatchDescription-left col-md-6 col-sm-12 col-xs-12 ">
          <h1>Professional Watch Repair Services</h1>
          <p>
            The first association that comes to one’s mind with the phrase “a
            good wristwatch” is naturally one made somewhere in Switzerland. Do
            you want to know what makes Swiss watches stand out?
          </p>
          <Link to={"/Contact"} onClick={HandleToTop}>
            <button className="View-btn"> Contact Us</button>
          </Link>
        </div>
        <div className="WatchDescription-right col-md-6 col-sm-12  col-xs-12">
          <img src={aboutrepair} alt="" className="Watch-img" />
        </div>
      </div>
    </div>
  );
}
