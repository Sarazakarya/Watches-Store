import React from "react";
import AboutBackground from "../AboutPage/AboutBackground/AboutBackground";
import AllProductComponent from "./AllProductComponenet/AllProductComponent";

export default function AllProduct() {
  return (
    <div>
      <AboutBackground title={"All Product"} page={"All Product"} />
      <AllProductComponent />
    </div>
  );
}
