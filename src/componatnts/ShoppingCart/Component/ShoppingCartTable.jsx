import React, { useEffect, useState } from "react";
import axios from "axios";
import IncreaseBtnCart from "./IncreaseBtnCar";
import DecreseBtnCart from "./DecreseBtnCart";
import RemoveBtn from "./RemoveBtn";
import { $user } from "../../Store/Login";
import { useRecoilState } from "recoil";
export default function ShoppingCartTable() {
  const [user] = useRecoilState($user);

  const [shoppingCart, setShoppingCart] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/users/${user.user.id}`).then((data) => {
      setShoppingCart(data.data.cart);
    });
  }, [shoppingCart]);

  return (
    <tbody>
      {shoppingCart.map((product, index) => {
        return (
          <tr key={index}>
            <div className=" item-table ">
              <td className="col-lg-6 col-md-6 col-sm-6 item-card">
                <RemoveBtn id={product.id} />
                <img src={product.thumbnail} alt="" />
                <div>
                  <p className="product-single-item">{product.title}</p>

                  <p>silver</p>
                </div>
              </td>
              <td className="col-md-2 text-center item-price item-qunti">
                ${product.price}
              </td>
              <td className="col-lg-2  col-md-2 col-sm-6 text-center prices">
                <div className="respo-quntity">
                  <p className="quntity-prices">
                    ${product.quantity * product.price}
                  </p>
                  <div className="priceitem">
                    <div className="quntity">{product.quantity}</div>

                    <div className="btns-price">
                      <IncreaseBtnCart product={product} />
                      <DecreseBtnCart product={product} />
                    </div>
                  </div>
                </div>
              </td>
              <td className="col-md-2  text-end item-price item-qunti ">
                ${product.quantity * product.price}
              </td>
            </div>
            <hr className="hr-table-items" />
          </tr>
        );
      })}
    </tbody>
  );
}
