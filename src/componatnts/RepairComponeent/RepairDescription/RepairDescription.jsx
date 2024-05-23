import React from "react";
import "../../Watch/WatchDescription/WatchDescription.scss";
import WatchBackground from "../../Assets/repair_Photo.webp";

export default function RepairhDescription() {
  return (
    <div className="WatchDescription row">
      <div className="WatchDescription-left col-md-6 col-sm-12 col-xs-12 ">
        <h1>Watch Repair Services</h1>
        <p>
          Our Reprizo repair centers are staffed with professionally trained,
          expert watchmakers that service all brands of timepieces, from Timex
          to Rolex. Whether it’s a wristwatch, pocket watch, stopwatch, clock or
          any other timepiece, we have exceptiona...
        </p>
        <button className="View-btn"> Learn More</button>
      </div>
      <div className="WatchDescription-right col-md-6 col-sm-12  col-xs-12">
        <img src={WatchBackground} alt="" className="Watch-img" />
      </div>
    </div>
  );
}
