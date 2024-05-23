import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";
import IncreaseBtn from "./IncreaseBtn";
import { $ViewAtom } from "../../Store/ViewBtn";

export default function AddToCard() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [Data, setData] = useRecoilState($ViewAtom);

  function addToCart() {
    setCartData(cartData.concat(Data));
    setData([]);
  }
  return (
    <button className="addtocartd-btn" onClick={addToCart}>
      Add To Cart
    </button>
  );
}
