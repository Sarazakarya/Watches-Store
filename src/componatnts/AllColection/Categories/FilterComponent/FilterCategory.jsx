import React from "react";
import { Link } from "react-router-dom";

export default function FilterCategory({ setIsSorted }) {
  function setsorting() {
    setIsSorted();
  }
  return (
    <div className="Categories-Pages">
      <h3>CATEGORIES</h3>

      <div className="Pages-links">
        <Link
          to={"/BestSellerCategory"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>BEST SELLER</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/AFFORDABLE WATCHES"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Affordable Watches</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Birthstones"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Birthstones</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Earrings"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Earrings</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Expression Jewelry"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Expression Jewelry</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Gemstones"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Gemstones</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Gold Watches"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Gold Watches</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Limited Edition Jewelry"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Limited Edition Watches</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Mechanical Watches"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Mechanical Watches</span>
        </Link>
      </div>
      <div className="Pages-links">
        <Link
          to={"/Pendants & Necklaces"}
          className="Pages-links text-decoration-none"
          onClick={setsorting}
        >
          <span>-</span>
          <span>Pendants & Necklaces</span>
        </Link>
      </div>
    </div>
  );
}
