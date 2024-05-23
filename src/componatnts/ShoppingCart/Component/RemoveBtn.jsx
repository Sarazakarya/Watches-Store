import React from "react";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { $cartAtom } from "../../Store/cartAtom";
import { $ViewAtom } from "../../Store/ViewBtn";

export default function RemoveBtn({ id }) {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  const [Data, setData] = useRecoilState($ViewAtom);

  function removeProduct() {
    setCartData(cartData.filter((product) => product.id !== id));
    setData(Data.filter((product) => product.id !== id));
  }

  return (
    <FontAwesomeIcon
      icon={faTimes}
      onClick={removeProduct}
      className="remove-btn"
    />
  );
}
