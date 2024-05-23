import React from "react";
import { useRecoilState } from "recoil";
import { $ViewAtom } from "../Store/ViewBtn";

export default function View({ product }) {
  const [cartData, setCartData] = useRecoilState($ViewAtom);

  function addToCart() {
    setCartData([...cartData, { ...product, quantity: 1 }]);
  }
  return (
    <>
      <button className="View-btn" onClick={addToCart}>
        View More
      </button>
    </>
  );
}
