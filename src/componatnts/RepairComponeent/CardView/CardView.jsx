import React from "react";
import "./CardView.scss";
import first from "../../Assets/repaiir1.webp";
import Second from "../../Assets/repair2webp.webp";
import third from "../../Assets/repair3webp.webp";
export default function CardView() {
  return (
    <div className="CardView">
      <div className="CardView-des">
        <h1>Jewelry Maintenance</h1>
        <p>
          Each store is staffed with some of the industry's best jewelers,
          watchmakers, watch repair professionals and smartphone technicians who
          provide superior quality services.
        </p>
      </div>

      <div className="CardView-cards ">
        <div className="col-md-4 col-sm-12 CardItem">
          <img src={first} alt="" className="" />
          <div className="product-description">
            <p>REPAIR</p>
            <a href="">Watch</a>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 CardItem">
          <img src={Second} alt="" className="" />
          <div className="product-description">
            <p>REPAIR</p>
            <a href="">JEWALLERY</a>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 CardItem">
          <img src={third} alt="" className="" />
          <div className="product-description">
            <p>SERVICE</p>
            <a href="">Engraving</a>
          </div>
        </div>
      </div>
    </div>
  );
}
