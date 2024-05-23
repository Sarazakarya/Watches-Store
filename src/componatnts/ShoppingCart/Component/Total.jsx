import React from "react";
import { $cartAtom } from "../../Store/cartAtom";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

export default function Total() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const cartTotal = cartData.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  function handleClick() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="Total">
      <div className="total-price">
        <p>SubTotal:</p>
        <p>${cartTotal} USD</p>
      </div>
      <p>Tax included and shipping calculated at checkout</p>
      <div onClick={handleClick}>
        <Link to="/Payment">
          <button className=" View-btn">CHECK OUT</button>
        </Link>
      </div>
    </div>
  );
}
