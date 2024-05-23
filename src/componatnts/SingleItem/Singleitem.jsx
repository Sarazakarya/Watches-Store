import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import stars from "../../componatnts/Assets/starts51.png";
import "./SingelItem.scss";
import IncreaseBtn from "./Componets/IncreaseBtn";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../Store/cartAtom";
import DescrseBtn from "./Componets/DescrseBtn";
import { $ViewAtom } from "../Store/ViewBtn";
import AddToCard from "./Componets/AddToCard";

export default function Singleitem({ product }) {
  const [cartData] = useRecoilState($cartAtom);
  const [view] = useRecoilState($ViewAtom);
  const productInCart = cartData.find((item) => item.id === product.id);
  const productInView = view.find((item) => item.id === product.id);
  const productQuantity = productInView
    ? productInView.quantity
    : productInCart
    ? productInCart.quantity
    : 0;

  return (
    <div className="ProductPage">
      <hr />
      <div className="Product-Item row">
        <div className="Product-left col-lg-6 col-md-12 ">
          <div className="main-img">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="other-imgs">
            <div className="col-md-3">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="col-md-3">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="col-md-3">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="col-md-3">
              <img src={product.thumbnail} alt="" />
            </div>
          </div>
        </div>

        {/* Product-Right */}
        <div className="Product-right col-lg-6 col-md-12">
          <h1>{product.title}</h1>

          <p className="product-price">${product.price}</p>

          <div className="product-des ">
            <p>Tax included.</p>
            <p className="product-fullDescription">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiati.
            </p>
          </div>

          <div className="color-product">
            <p>Color</p>
            <h6>Sliver</h6>
          </div>

          <div className="addToCard-sec">
            <div className={productInCart ? "btns-hide" : "quntity-btns"}>
              <p className="count">{productQuantity}</p>{" "}
              <div className="btns">
                <IncreaseBtn product={product} />
                <DescrseBtn product={product} />
              </div>
            </div>
            {!productInCart ? (
              <AddToCard />
            ) : (
              <button className="Added">Added Successfully !</button>
            )}
          </div>

          <button className="buy-it-btn">Buy it Now</button>

          <div className="Social-icons">
            <div className="social-icons-item">
              {<FontAwesomeIcon icon={faFacebook} />}
              <p className="social-iconsDes">Share</p>
            </div>
            <div className="social-icons-item">
              {<FontAwesomeIcon icon={faTwitter} />}
              <p className="social-iconsDes">tweet</p>
            </div>
            <div className="social-icons-item">
              {<FontAwesomeIcon icon={faPinterest} />}
              <p className="social-iconsDes">pin it</p>
            </div>
          </div>

          <div className="review">
            <h2> Customer Review</h2>
            <div className="review-Star">
              <img src={stars} alt="" />
              <p>Based on 1 review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
