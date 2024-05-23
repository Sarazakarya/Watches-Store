import React, { useEffect } from "react";
import Singleitem from "./../../componatnts/SingleItem/Singleitem";
import Hero from "../../componatnts/Hero/Hero";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BestSeller from "../../componatnts/BesSeller/Besseller";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  function handleClick() {
    window.scrollTo(0, 0);
  }
  handleClick();
  useEffect(() => {
    axios(`http://localhost:3000/products/${id}`).then((data) => {
      setProduct(data.data);
    });
  }, [id]);
  return (
    <div>
      <Singleitem product={product} />
      <BestSeller title={"Popular Products"} />
    </div>
  );
}
