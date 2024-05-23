import React from "react";
import "../../Watch/WatchStory/WatchStory.scss";
import JewallryBackgroundPeople from "../../Assets/jewejry_background1.webp";
import { Link } from "react-router-dom";
import HandleToTop from "../../Use/HandleToTop";

export default function JewallryStory() {
  return (
    <div className="WatchStory row">
      <div className="WatchStory-left col-md-6 col-sm-12 col-xs-12 ">
        <img src={JewallryBackgroundPeople} alt="" className="Watch-img" />
      </div>
      <div className="WatchStory-right col-md-6 col-sm-12  col-xs-12">
        <h1>Jewelry Repair Services</h1>
        <p>
          With proper care and maintenance, your jewelry will reward you with a
          lifetime of enjoyment and luxury. Reprizo Jewelry and Watch Repair
          stores are staffed with professionally skilled Jewelers that provide a
          full range of exceptional jewelry repai...
        </p>
        <Link to={"/Repair"} onClick={HandleToTop}>
          <button className="View-btn">LEARN MORE</button>
        </Link>
      </div>
    </div>
  );
}
