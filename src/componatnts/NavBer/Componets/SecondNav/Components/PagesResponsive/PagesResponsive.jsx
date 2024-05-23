import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faBars,
  faAngleRight,
  faAngleLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./PagesResponsive.scss";
import WowAnimation from "../../../../../Use/Wownimation";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $user } from "../../../../../Store/Login";

export default function PagesResponsive() {
  <WowAnimation />;
  const [items, setItems] = useState(false);
  const [homePages, setHomPages] = useState(false);
  const [pages, setPages] = useState(false);
  const [shopPages, setShopPages] = useState(false);
  const [newsPages, setNewsPages] = useState(false);
  const [accountPage, setAccount] = useState(false);
  const [auth, setAuth] = useRecoilState($user);
  const navigat = useNavigate();

  const [bar, setBar] = useState(true);

  function handlePages() {
    setItems(!items);

    const secondNavElement = document.querySelector(".SecondNav");
    secondNavElement.style.bottom = "8.1rem";
    secondNavElement.style.minHeight = "350px";

    setBar(false);
  }

  function handleclose() {
    setItems(false);
    setHomPages();
    setPages();
    setShopPages();
    setNewsPages();
    setAccount();
    setBar(true);
    const secondNavElement = document.querySelector(".SecondNav");
    secondNavElement.style.bottom = "auto";
    secondNavElement.style.minHeight = "auto";
  }

  function Homeitem() {
    setHomPages(!homePages);
    setPages(false);
    setShopPages(false);
    setNewsPages(false);
    setItems(false);
    setAccount(false);
  }

  function shop() {
    setHomPages(false);
    setPages(false);
    setShopPages(!shopPages);
    setNewsPages(false);
    setItems(false);
    setAccount(false);
  }

  function news() {
    setHomPages(false);
    setPages(false);
    setShopPages(false);
    setNewsPages(!newsPages);
    setItems(false);
    setAccount(false);
  }

  function Pages() {
    setHomPages(false);
    setPages(!pages);
    setShopPages(false);
    setNewsPages(false);
    setItems(false);
    setAccount(false);
  }

  function arrow() {
    setItems(true);
    setHomPages(false);
    setPages(false);
    setShopPages(false);
    setNewsPages(false);
    setAccount(false);
  }

  function account() {
    setItems(false);
    setHomPages(false);
    setPages(false);
    setShopPages(false);
    setNewsPages(false);
    setAccount(!accountPage);
  }

  function logOut() {
    setAuth({ isAuth: false, user: null });
    localStorage.removeItem("loggedInData");
    localStorage.removeItem("cart");
    navigat(`/`);
  }

  return (
    <div className="PagesResponsive">
      {bar ? (
        <FontAwesomeIcon
          icon={faBars}
          onClick={handlePages}
          className="bar-icon"
        />
      ) : (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={handleclose}
          className="close-icon"
        />
      )}

      {items ? (
        <div className="pages wow animate__animated animate__fadeInLeft">
          <div className="pages-item--responsive" onClick={Homeitem}>
            <p>Home</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="pages-item--responsive" onClick={Pages}>
            <p>Pages</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="pages-item--responsive" onClick={shop}>
            <p>Shop</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="pages-item--responsive" onClick={news}>
            <p>News</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>

          <div>
            {!auth.isAuth ? (
              <div className="pages-item--responsive" onClick={account}>
                <p>ACCOUNT</p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            ) : (
              <div className="pages-item--responsive">
                <p
                  onClick={() => {
                    logOut();
                  }}
                >
                  LogOut
                </p>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {homePages ? (
        <div className="pages wow animate__animated animate__fadeInRight">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon-left-arrow "
            onClick={arrow}
          />
          <div className="pages-item--responsive">
            <Link to={"/"} onClick={handleclose}>
              <p>Watches PAGE</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/JEWELLERY"} onClick={handleclose}>
              <p>JEWELRY PAGE</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/Repair"} onClick={handleclose}>
              <p>REPAIR PAGE</p>
            </Link>
          </div>
        </div>
      ) : null}
      {pages ? (
        <div className="pages wow animate__animated animate__fadeInRight">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon-left-arrow"
            onClick={arrow}
          />
          <div className="pages-item--responsive">
            <Link to={"/About"} onClick={handleclose}>
              <p>About</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/Contact"} onClick={handleclose}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
      ) : null}

      {shopPages ? (
        <div className="pages wow animate__animated animate__fadeInRight">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon-left-arrow"
            onClick={arrow}
          />
          <div className="pages-item--responsive">
            <Link to={"/AllCOLLECTION"} onClick={handleclose}>
              <p>ALL COLLECTION</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/AllProduct"} onClick={handleclose}>
              <p>ALL PRODUCT</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/Search"} onClick={handleclose}>
              <p>SEARCH</p>
            </Link>
          </div>
        </div>
      ) : null}

      {newsPages ? (
        <div className="pages wow animate__animated animate__fadeInRight">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon-left-arrow"
            onClick={arrow}
          />
          <div className="pages-item--responsive">
            <Link to={"/WatchesNews"} onClick={handleclose}>
              <p>Watches</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/Jewllarynews"} onClick={handleclose}>
              <p>JEWELRY</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/Repairnews"} onClick={handleclose}>
              <p>REPAIR</p>
            </Link>
          </div>
        </div>
      ) : null}

      {accountPage ? (
        <div className="pages wow animate__animated animate__fadeInRight">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="icon-left-arrow"
            onClick={arrow}
          />
          <div className="pages-item--responsive">
            <Link to={"/Create"} onClick={handleclose}>
              <p>Create</p>
            </Link>
          </div>
          <div className="pages-item--responsive">
            <Link to={"/SignIn"} onClick={handleclose}>
              <p>SignIn</p>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
