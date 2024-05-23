import React from "react";
import { $cartAtom } from "../../Store/cartAtom";
import { useRecoilState } from "recoil";
import first from "../../Assets/product-3.webp";
import "./PaymentItem.scss";

export default function PaymentItem() {
  const [cartData] = useRecoilState($cartAtom);
  const cartTotal = cartData.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <div className="payment-item">
      <div
        className={
          cartData.length > 1 ? "all-products-payments" : "all-products-payment"
        }
      >
        {cartData.map((item, index) => {
          return (
            <div className="products-payment" key={index}>
              <div className=" item-payment-img">
                <img src={item.thumbnail} alt="" />
                <p className="item-quntity-payment">{item.quantity}</p>
                <p>{item.title}</p>
              </div>

              <div className="">
                <p>$ {item.price * item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="total-price-payment">
        <p className="total-payment">Total:</p>

        <p>$ {cartTotal}</p>
      </div>
    </div>
  );
}
