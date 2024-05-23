import React from "react";
import "./Collection.scss";
import firstimg from "../Assets/allCollection1.webp";
import secimg from "../Assets/RepairBackground1.webp";
import thirdtimg from "../Assets/allcoection3webp.webp";
import Fourthtimg from "../Assets/allcollection4webp.webp";
import Fifthtimg from "../Assets/allcolection5.webp";
import sixthtimg from "../Assets/allcolection6.webp";
import seventimg from "../Assets/allcolection7.webp";
import elghth from "../Assets/allcolection8.webp";
import ninthimg from "../Assets/allcolection9.webp";
import tenthimg from "../Assets/allcolection10.webp";
import { Link } from "react-router-dom";
import HandleToTop from "../Use/HandleToTop";
export default function Collection() {
  return (
    <div className="Collection container">
      <div className="row">
        <div className="  col-lg-3 col-md-4  col-sm-12">
          <Link
            to={"/BestSellerCategory"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={firstimg} alt="" />
            <span>Best Seller</span>
          </Link>
        </div>

        <div className="collection-item  col-lg-3 col-md-4 col-sm-12">
          <Link
            to={"/AFFORDABLE WATCHES"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={secimg} alt="" />
            <span> Affordable Watche</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4 col-sm-12">
          <Link
            to={"/birthstones"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={thirdtimg} alt="" />
            <span>Birthstones</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4  col-sm-12">
          <Link
            to={"/Earrings"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={Fourthtimg} alt="" />
            <span>Earrings</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4 col-sm-12">
          <Link
            to={"/Expression Jewelry"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={Fifthtimg} alt="" />
            <span>Expression Jewelry</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4 col-sm-12">
          <Link
            to={"/Gemstones"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={sixthtimg} alt="" />
            <span>Gemstones</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4  col-sm-12">
          <Link
            to={"/Gold Watches"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={seventimg} alt="" />
            <span>Gold Watches</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4  col-sm-12">
          <Link
            to={"/Limited Edition Jewelry"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={elghth} alt="" />
            <span>Limited Edition Jewelry</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4  col-sm-12">
          <Link
            to={"/Mechanical Watches"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={ninthimg} alt="" />
            <span>Mechanical Watches</span>
          </Link>
        </div>
        <div className="collection-item  col-lg-3 col-md-4 col-sm-12">
          <Link
            to={"/Pendants & Necklaces"}
            className="collection-item "
            onClick={HandleToTop}
          >
            <img src={tenthimg} alt="" />
            <span>Pendants & Necklaces</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
