import React from "react";
import "./JewlaryBrand.scss";
import firstBrand from "../../Assets/brand1.webp";
import secondBrand from "../../Assets/brand2.webp";
import thirdBrand from "../../Assets/brand4.webp";
import fourthBrand from "../../Assets/brand3x.webp";
import fifthdBrand from "../../Assets/brand5.webp";
import lasthBrand from "../../Assets/brand6.webp";
export default function JewlaryBrand() {
  return (
    <div className="JewlaryBrand row">
      <div className="jew-item col-lg-2 col-md-4 col-sm-6 ">
        <img src={firstBrand} alt="" />
      </div>

      <div className="jew-item col-lg-2 col-md-4 col-sm-6   ">
        <img src={secondBrand} alt="" />
      </div>

      <div className="jew-item col-lg-2 col-md-4 col-sm-6  ">
        <img src={thirdBrand} alt="" />
      </div>

      <div className="jew-item col-lg-2 col-md-4 col-sm-6   ">
        <img src={fourthBrand} alt="" />
      </div>

      <div className="jew-item col-lg-2 col-md-4 col-sm-6   ">
        <img src={fifthdBrand} alt="" />
      </div>

      <div className="jew-item col-lg-2 col-md-4 col-sm-6  ">
        <img src={lasthBrand} alt="" />
      </div>
    </div>
  );
}
