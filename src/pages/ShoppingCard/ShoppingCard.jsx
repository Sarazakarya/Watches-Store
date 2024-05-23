import React from "react";
import SignBackground from "../../componatnts/SignBackground/SignBackground";
import ShoppingCart from "../../componatnts/ShoppingCart/ShoppingCart";

export default function ShoppingCard() {
  return (
    <div>
      <SignBackground title={`Your cart`} page={`Your cart`} />
      <ShoppingCart />
    </div>
  );
}
