import React, { useEffect, useState } from "react";
import "./BestSellerComponent.scss";
import axios from "axios";
import Card from "../../../../Card/Card";
import FilterComponent from "./../../FilterComponent/FilterComponent";
import FilterPrice from "../../FilterComponent/FilterPrice";
import FilterCategory from "./../../FilterComponent/FilterCategory";
import Loader from "./../../../../Loader/Loader";

export default function BestSellerComponent({ brand }) {
  const [product, setProductItem] = useState([]);
  const [options, setOptions] = useState([]);
  const [sorted, setIsSorted] = useState(false);
  const [filterdProduct, setFilteredProduct] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [loading, setIsLoading] = useState(true);

  const handleSorting = () => {
    setIsSorted(false);
  };

  const filteredProducts = product.filter((item) => item.brand === brand);

  useEffect(() => {
    axios(
      `http://localhost:3000/products?${filteredProducts}?` + filterQuery
    ).then((data) => {
      setProductItem(data.data);
      setFilteredProduct(filteredProducts);
      setIsLoading(false);
    });
  }, [filterdProduct, filterQuery]);

  function handelOptions(e) {
    const sortingType = e.target.value;
    if (sortingType === brand) {
      setOptions([...filterdProduct]);
      setIsSorted(true);
    } else {
      const sortedData = [...filterdProduct].sort((a, b) => {
        const nameA = a.title ? a.title.toLowerCase() : "";
        const nameB = b.title ? b.title.toLowerCase() : "";
        if (sortingType === "Alphabetically, A-Z") {
          return nameA.localeCompare(nameB);
        } else if (sortingType === "Alphabetically, Z-A") {
          return nameB.localeCompare(nameA);
        }
      });
      setOptions(sortedData);
      setIsSorted(true);
    }
  }

  return (
    <div className="container BestSellerComponent">
      {loading && <Loader />}
      <div className="row">
        <div className="col-lg-8 col-md-12  left-Component">
          <img src={filterdProduct[0]?.thumbnai2} alt="" className="img-back" />

          <div className="categorySelected">
            <select onChange={handelOptions}>
              <option value={brand}>{brand}</option>
              <option value={"Alphabetically, A-Z"}>Alphabetically, A-Z</option>
              <option value={"Alphabetically, Z-A"}>Alphabetically, Z-A</option>
            </select>
          </div>

          <div className="Categories-items row gap-2">
            {sorted
              ? options.map((item) => <Card product={item} key={item.id} />)
              : filterdProduct.map((item) => (
                  <Card product={item} key={item.id} />
                ))}
          </div>
        </div>

        <div className="col-lg-4 col-md-12 left-Component">
          <FilterComponent />
          <FilterCategory setIsSorted={handleSorting} />
          <FilterPrice
            setFilterQuery={setFilterQuery}
            setIsSorted={setIsSorted}
          />
        </div>
      </div>
    </div>
  );
}
