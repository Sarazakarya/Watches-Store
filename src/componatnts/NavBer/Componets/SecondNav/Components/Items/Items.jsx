import React, { useEffect, useState } from "react";
import {
  faAngleDown,
  faUser,
  faHeart,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Items.scss";
import "../../SeconNav.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { $user } from "../../../../../Store/Login";
import { $cartAtom } from "../../../../../Store/cartAtom";

import StaticExample from "../../../../../WatchList/WatchList";
import WatchList from "../../../../../WatchList/WatchList";

export default function Items() {
  const [itemVisible, setitemVisible] = useState(false);
  const [auth, setAuth] = useRecoilState($user);
  const [cardData] = useRecoilState($cartAtom);
  const navigat = useNavigate();

  function ItemsDropDown() {
    return (
      <div className="dropDown-Home wow animate__animated animate__fadeIn">
        <ul>
          <li>
            <Link to="/SignIn">SIGN IN</Link>
          </li>
          <li>
            <Link to="/Create">CREATE</Link>
          </li>
        </ul>
      </div>
    );
  }

  function logOut() {
    setAuth({ isAuth: false, user: null });
    localStorage.removeItem("loggedInData");
    localStorage.removeItem("cart");
    navigat(`/`);
  }

  return (
    <div className="SecondNav-items-right">
      <div
        className="items-dropdown"
        onClick={() => {
          setitemVisible(!itemVisible);
        }}
      >
        {!auth.isAuth ? (
          <>
            <FontAwesomeIcon
              icon={faUser}
              className="items-dropdown-icon items-descr"
            />
            <a className="items ">
              <span href="" className="items-descr">
                ACCOUNT
              </span>
            </a>
            <div className="itemview">{itemVisible && <ItemsDropDown />}</div>
          </>
        ) : (
          <a
            href="#"
            className="items items-descr "
            onClick={() => {
              logOut();
            }}
          >
            LogOut
          </a>
        )}
      </div>

      <WatchList />

      <Link to={`/ShoppingCard`}>
        <div className="items-dropdown">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="items-dropdown-icon"
          />
          {auth.isAuth ? (
            <span className="items-descr">Cart ({cardData.length})</span>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
}
