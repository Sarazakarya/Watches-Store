import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";
import { $ViewAtom } from "../../Store/ViewBtn";

export default function RemoveAll() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [Data, setData] = useRecoilState($ViewAtom);
  function removeAllProducts() {
    setCartData([]);
    setData([]);
  }
  return (
    <button
      className="remove-all-products View-btn"
      onClick={removeAllProducts}
    >
      CLEAR ALL
    </button>
  );
}
