import React from "react";
import AboutBackground from "../../../AboutPage/AboutBackground/AboutBackground";
import BestSellerComponent from "./BestSellerComponent/BestSellerComponent";

export default function BestSellerCategory({ brand }) {
  return (
    <div>
      <AboutBackground
        title={"Affordable Watches"}
        page={"Affordable Watches"}
      />

      <BestSellerComponent brand={brand} />
    </div>
  );
}
