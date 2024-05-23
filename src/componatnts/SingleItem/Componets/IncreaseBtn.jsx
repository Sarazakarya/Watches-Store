import React from "react";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../Store/cartAtom";
import { $ViewAtom } from "../../Store/ViewBtn";

export default function IncreaseBtn({ product }) {
  const [Data, setData] = useRecoilState($ViewAtom);

  function increaseQuntity() {
    let UpdateCardData = Data.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setData(UpdateCardData);
  }

  return (
    <div>
      <button className="increase-btn" onClick={increaseQuntity}>
        +
      </button>
    </div>
  );
}
