import React from "react";
import "../../Watch/WatchDescription/WatchDescription.scss";
import jewallryBackground from "../../Assets/jewejry_background3.webp";
import { Link } from "react-router-dom";
import HandleToTop from "../../Use/HandleToTop";

export default function JewallryDescription() {
  return (
    <div className="WatchDescription row">
      <div className="WatchDescription-left col-md-6 col-sm-12 col-xs-12 ">
        <h1>Engraving Services</h1>
        <p>
          The most personal touch you can add to any gift is personalizing it
          with your own words. Whether it’s Gold, Silver, Platinum or Glass, we
          can customize all your gifts. Our Reprizo locations offer a wide
          variety of engraving services and merchandis...
        </p>

        <Link to={"/Repair"} onClick={HandleToTop}>
          <button className="View-btn"> Learn More</button>
        </Link>
      </div>
      <div className="WatchDescription-right col-md-6 col-sm-12  col-xs-12">
        <img src={jewallryBackground} alt="" className="Watch-img" />
      </div>
    </div>
  );
}
