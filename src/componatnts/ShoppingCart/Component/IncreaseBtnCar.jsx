import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";

export default function IncreaseBtnCart({ product }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function increaseQuntity() {
    let UpdateCardData = cartData.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartData(UpdateCardData);
  }

  return (
    <div>
      <button className="increase-btn" onClick={increaseQuntity}>
        +
      </button>
    </div>
  );
}
