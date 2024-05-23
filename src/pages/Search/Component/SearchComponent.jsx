import React from "react";
import { useRecoilState } from "recoil";
import { $ViewAtom } from "../../../componatnts/Store/ViewBtn";
import { Link } from "react-router-dom";
export default function SearchComponent({ product }) {
  const [cartData, setCartData] = useRecoilState($ViewAtom);

  function addToCart() {
    setCartData([...cartData, { ...product, quantity: 1 }]);
  }
  return (
    <Link to={`/product/${product.id}`} onClick={addToCart}>
      {product.title}
    </Link>
  );
}
