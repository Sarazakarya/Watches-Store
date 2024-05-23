import React, { useEffect, useState } from "react";
import "../Hero/Hero";
import axios from "axios";
import Card from "../Card/Card";
import "../Card/Card.scss";
import { Link } from "react-router-dom";
export default function BestSeller({ title }) {
  const [product, setProductItem] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:3000/categoriesWatch").then((data) => {
      setProductItem(data.data);
    });
  }, []);
  function handleClick() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="Hero">
      <div className="Hero-Dwscription">
        <h1>{title}</h1>
      </div>

      <div className="carditems">
        {product.map((item) => (
          <Card product={item} key={item.id} />
        ))}
      </div>

      <div className="btn-watch">
        <Link
          to={"/AllCOLLECTION"}
          className="text-decoration-none"
          onClick={handleClick}
        >
          <button className="View-btn">Show ALl</button>
        </Link>
      </div>
    </div>
  );
}
