import React from "react";
import "./LastNews.scss";
import post1 from "../../../Assets/watchnews.webp";
import post2 from "../../../Assets/newsJewllary.webp";
import post3 from "../../../Assets/aboutrepair.webp";
import { Link } from "react-router-dom";
import HandleToTop from "../../../Use/HandleToTop";
export default function LastNews() {
  return (
    <div className="LastNews">
      <h1>Latest posts</h1>
      <div className="posts_sec">
        <div className="posts">
          <img src={post1} alt="" className="posts_img" />
          <div className="posts-des">
            <Link to={"/WatchesNews"} onClick={HandleToTop}>
              <h6>What Type of Metal Will You Choose?</h6>
            </Link>
            <p>June 23, 2021</p>
          </div>
        </div>

        <div className="posts">
          <img src={post2} alt="" className="posts_img" />
          <div className="posts-des">
            <Link to={"/Jewllarynews"} onClick={HandleToTop}>
              <h6>Masterpieces 2021 Collection Unveiled in Singapore</h6>
            </Link>
            <p>June 23, 2021</p>
          </div>
        </div>

        <div className="posts">
          <img src={post3} alt="" className="posts_img" />
          <div className="posts-des">
            <Link to={"/Repairnews"} onClick={HandleToTop}>
              <h6>How to Find a Watch Repair Shop You Can Trust</h6>
            </Link>
            <p>JULY 26, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
