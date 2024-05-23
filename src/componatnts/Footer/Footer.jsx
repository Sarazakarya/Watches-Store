import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import HandleToTop from "./../Use/HandleToTop";
export default function Footer() {
  return (
    <div className="footer row">
      <div className="footer-left col-md-6 col-sm-12">
        <div className="description-letter">
          <h5>
            Sign up for our newsletter to receive special offers, news and great
            sales notifications.
          </h5>
        </div>
        <div className="new-letter">
          <input type="text" name="" id="" placeholder="Email Address" />
          <button>SUBSCIBE</button>
        </div>
      </div>
      <div className="footer-right col-md-6 col-sm-12">
        <div className="col-md-4 col-sm-12">
          <ul>
            <li className="main">
              <Link onClick={HandleToTop}>LINK</Link>
            </li>
            <li>
              <Link to={"/"} onClick={HandleToTop}>
                HOME
              </Link>
            </li>
            <li>
              <Link onClick={HandleToTop}>SHOP</Link>
            </li>
            <li>
              <Link to={"/AllCOLLECTION"} onClick={HandleToTop}>
                COLLECTION
              </Link>
            </li>
            <li>
              <Link to={"/Search"} onClick={HandleToTop}>
                SEARCH
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12">
          <ul>
            <li className="main">
              <Link to={"/"} onClick={HandleToTop}>
                LINK
              </Link>
            </li>
            <li>
              <Link to={"/JEWELLERY"} onClick={HandleToTop}>
                JEWELRY
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={HandleToTop}>
                WATCHES
              </Link>
            </li>
            <li>
              <Link to={"/About"} onClick={HandleToTop}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to={"/Contact"} onClick={HandleToTop}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-12">
          <ul>
            <li className="main">
              <Link to={"/"} onClick={HandleToTop}>
                SOCIAL
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={HandleToTop}>
                FACEBOOK
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={HandleToTop}>
                PINTEREST
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={HandleToTop}>
                INSTAGRAM
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={HandleToTop}>
                YOUTUBE
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center">
        Reprizo © 2024, <span>Powered by Shopify</span>
      </div>
    </div>
  );
}
