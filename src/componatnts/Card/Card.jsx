import React, { useEffect, useState } from "react";
import StarsFive from "../Assets/starts5.png";
import "./Card.scss";
import WatchListIcon from "../Watch/WtchlistIcon/WatchListIcon";
import { Link } from "react-router-dom";
import View from "../View/View";
import Loader from "./../Loader/Loader";

export default function Card({ product, handle }) {
  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  function FirstImageHover() {
    setIsFirstHovered(true);
  }

  function FirstImageHoverOut() {
    setIsFirstHovered(false);
  }
  function handleClick() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div
      className={`CardItem col-md-4 col-sm-12   ${
        isFirstHovered ? "hovered" : ""
      }`}
      onMouseEnter={FirstImageHover}
      onMouseLeave={FirstImageHoverOut}
    >
      <WatchListIcon product={product} />

      <div className="img-watch">
        <img src={product.thumbnail} alt="Watch" className="Watch" />
      </div>
      {isFirstHovered ? (
        <div className="btn-watch">
          <Link
            to={`/product/${product.id}`}
            onClick={() => {
              handleClick();
              handle && handle();
            }}
          >
            <View product={product} />
          </Link>
        </div>
      ) : (
        <div className="product-description">
          <p>{product.title}</p>
          <img src={StarsFive} alt="Stars" />
          <div className="prices">
            <p className="new-price">${product.price}</p>
            <p className="old-price">{product.old_price}</p>
          </div>
        </div>
      )}
    </div>
  );
}
