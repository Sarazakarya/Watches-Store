import React, { useEffect, useState } from "react";
import "./HeroJewlary.scss";
import axios from "axios";
import Card from "../../Card/Card";
import "../../Card/Card.scss";
import { Link } from "react-router-dom";
import HandleToTop from "../../Use/HandleToTop";
export default function HeroJewlary() {
  const [product, setProductItem] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:3000/categoriesJewllary").then((data) => {
      setProductItem(data.data);
    });
  }, []);

  return (
    <div className="Hero">
      <div className="Hero-Dwscription">
        <h1>The Lawson Collection</h1>
        <p>
          We are happy to introduce the new Lawson Collection. These are three
          quartz models designed with simplicity and elegance kept in mind. They
          come in different sizes and colors, and all feature a stainless steel
          back — leaving enough space for a personalized engraving. The
          engraving service is complimentary with any watch from the Lawson
          series.
        </p>
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
          onClick={HandleToTop}
        >
          <button className="View-btn">Show ALl</button>
        </Link>
      </div>
    </div>
  );
}
