import React, { useState } from "react";
import { getFilterQuery } from "./../../../getquery/getFilterQuery";
import HandleToTop from "../../../Use/HandleToTop";
import { Link } from "react-router-dom";

export default function FilterPrice({ setFilterQuery, setIsSorted }) {
  const [formData, setFormData] = useState({
    price_gte: "",
    price_lte: "",
  });

  function changeInputValue(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function filterProducts(e) {
    e.preventDefault();
    const query = getFilterQuery(formData);
    setFilterQuery(query);
    setIsSorted(false);
  }

  function reset() {
    setFormData({
      price_gte: "",
      price_lte: "",
    });
    setFilterQuery("");
    setIsSorted(false);
    HandleToTop();
  }

  return (
    <div className="FilterPrice">
      <h3>Filter by price</h3>
      <Link
        className="text-dark"
        onClick={(e) => {
          e.preventDefault();
          reset();
        }}
      >
        RESET
      </Link>
      <div className="FilterPrice__inp">
        <input
          className="filter__input col-sm-12"
          name="price_gte"
          placeholder="Min price"
          type="number"
          onChange={changeInputValue}
          value={formData.price_gte}
        />
        <input
          className="filter__input col-sm-12"
          name="price_lte"
          placeholder="Max price"
          type="number"
          onChange={changeInputValue}
          value={formData.price_lte}
        />
      </div>
      <button onClick={filterProducts}>Filter</button>
    </div>
  );
}
