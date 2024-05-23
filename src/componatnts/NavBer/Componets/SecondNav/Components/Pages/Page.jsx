import React, { useEffect, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.scss";
import { Link } from "react-router-dom";
import WowAnimation from "../../../../../Use/Wownimation";

export default function Pages() {
  <WowAnimation />;
  const [homeVisible, setHomeVisible] = useState(false);
  const [PagesVisible, setPagesVisible] = useState(false);
  const [shopVisible, setShopVisible] = useState(false);
  const [newsVisible, setnewsVisible] = useState(false);

  function HomeDropDown() {
    return (
      <div className="dropDown-Home wow animate__animated animate__fadeIn">
        <ul>
          <li>
            <Link to="/">WATCH PAGE</Link>
          </li>
          <li>
            <Link to="/JEWELLERY">JEWELLERY PAGE</Link>
          </li>
          <li>
            <Link to="/Repair">REPAIR PAGE</Link>
          </li>
        </ul>
      </div>
    );
  }
  function PagesDropDown() {
    return (
      <div className="dropDown-Home wow animate__animated animate__fadeIn">
        <ul>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
  function ShopDropDown() {
    return (
      <div className="dropDown-Home wow animate__animated animate__fadeIn">
        <ul>
          <li>
            <Link to="/AllCOLLECTION">All Collection</Link>
          </li>
          <li>
            <Link to="/AllProduct">All Product</Link>
          </li>
          <li>
            <Link to="/Search">SEARCH</Link>
          </li>
        </ul>
      </div>
    );
  }

  function NewsDropDown() {
    return (
      <div className="dropDown-Home wow animate__animated animate__fadeIn">
        <ul>
          <li>
            <Link to="/WatchesNews">Watches</Link>
          </li>
          <li>
            <Link to="/Jewllarynews">Jewallery</Link>
          </li>
          <li>
            <Link to="/Repairnews">Repair</Link>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="SecondNav-items">
      <div className="Pages-dropdown">
        <a
          href="#"
          className="home"
          onClick={() => {
            setHomeVisible(!homeVisible);
            setPagesVisible(false);
            setShopVisible(false);
            setnewsVisible(false); // Set PagesVisible to false when Home is clicked
          }}
        >
          Home
        </a>
        <FontAwesomeIcon icon={faAngleDown} className="Pages-dropdown-icon" />
        <div className="homevi">{homeVisible && <HomeDropDown />}</div>
      </div>

      <div className="Pages-dropdown">
        <a
          href="#"
          className="pages-page"
          onClick={() => {
            setPagesVisible(!PagesVisible);
            setHomeVisible(false);
            setShopVisible(false);
            setnewsVisible(false);
          }}
        >
          Pages
        </a>
        <FontAwesomeIcon icon={faAngleDown} className="Pages-dropdown-icon" />
        <div className="pagevisable">{PagesVisible && <PagesDropDown />}</div>
      </div>

      <div className="Pages-dropdown">
        <a
          href="#"
          className="shop-page"
          onClick={() => {
            setShopVisible(!shopVisible);
            setPagesVisible(false);
            setHomeVisible(false);
            setnewsVisible(false);
          }}
        >
          Shop
        </a>
        <FontAwesomeIcon icon={faAngleDown} className="Pages-dropdown-icon" />
        <div className="shopvisable">{shopVisible && <ShopDropDown />}</div>
      </div>

      <div className="Pages-dropdown">
        <a
          href="#"
          className="news-page"
          onClick={() => {
            setShopVisible(false);
            setPagesVisible(false);
            setHomeVisible(false);
            setnewsVisible(!newsVisible);
          }}
        >
          News
        </a>
        <FontAwesomeIcon icon={faAngleDown} className="Pages-dropdown-icon" />
        <div className="newsvisable">{newsVisible && <NewsDropDown />}</div>
      </div>
    </div>
  );
}
