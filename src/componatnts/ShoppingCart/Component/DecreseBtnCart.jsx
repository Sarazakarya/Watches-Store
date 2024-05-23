import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";

export default function DecreseBtnCart({ product }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);

  function DescrseQuntity() {
    let UpdateCardData = cartData.map((item) => {
      if (item.id === product.id) {
        if (item.quantity == 1) {
          return item;
        }
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartData(UpdateCardData);
  }
  return (
    <button className="decrease-btn" onClick={DescrseQuntity}>
      -
    </button>
  );
}
