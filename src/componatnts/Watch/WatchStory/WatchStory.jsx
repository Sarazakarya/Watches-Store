import React from "react";
import "./WatchStory.scss";
import WatchBackgroundPeople from "../../Assets/backgroundPeaoplewebp.webp";
import { Link } from "react-router-dom";
import HandleToTop from "../../Use/HandleToTop";

export default function WatchStory() {
  return (
    <div className="WatchStory row">
      <div className="WatchStory-left col-md-6 col-sm-12 col-xs-12 ">
        <img src={WatchBackgroundPeople} alt="" className="Watch-img" />
      </div>
      <div className="WatchStory-right col-md-6 col-sm-12  col-xs-12">
        <h1>Designed for Those Who Evade Limits</h1>
        <p>
          Attention to details is always a good feature. We couldn’t think of
          any better present for our 5th anniversary than a pair of exclusive
          watches from the Lawson collection. Every time I look at my watch I
          think of her and feel she thinks of me.
        </p>
        <Link to={"./WatchesNews"} onClick={HandleToTop}>
          <button className="View-btn"> READ OUR STORY</button>
        </Link>
      </div>
    </div>
  );
}
