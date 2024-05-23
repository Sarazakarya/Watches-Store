import React, { useEffect, useState } from "react";
import "./ShoppingCart.scss";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";

import ShoppingCartTable from "./Component/ShoppingCartTable";
import { $cartAtom } from "../Store/cartAtom";
import RemoveAll from "./Component/RemoveAll";
import Total from "./Component/Total";

export default function ShoppingCart() {
  const [cartData, setCartData] = useRecoilState($cartAtom);
  return (
    <>
      {cartData.length < 1 ? (
        <div className="notFound container">
          <h1>Your Cart</h1>
          <p>Your cart is currently empty.</p>
          <Link to={`/AllCOLLECTION`}>
            <button>CONTINUE SHOPPING</button>
          </Link>
        </div>
      ) : (
        <div className="ShoppingCart container">
          <Link to={"/AllProduct"}>
            <h1>Continue Shopping</h1>
          </Link>
          <table>
            <thead>
              <tr className="row table-items">
                <td className="col-md-6 col-sm-6 product-item-head">Product</td>
                <td className="col-md-2  col-sm-6  price-table">Price</td>
                <td className="col-md-2 text-center item-qunti">Quantity</td>
                <td className="col-md-2 text-end item-qunti">Total</td>
              </tr>
            </thead>
            <hr />
            <ShoppingCartTable />
          </table>
          <div className="remove-total">
            <RemoveAll />
            <Total />
          </div>
        </div>
      )}
    </>
  );
}
