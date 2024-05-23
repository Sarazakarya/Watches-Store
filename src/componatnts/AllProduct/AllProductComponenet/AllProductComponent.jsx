import React, { useEffect, useState } from "react";
import "../../AllColection/Categories/BesSeler/BestSellerComponent/BestSellerComponent.scss";
import axios from "axios";
import Card from "../../Card/Card";
import FilterComponent from "../../AllColection/Categories/FilterComponent/FilterComponent";
import FilterPrice from "../../AllColection/Categories/FilterComponent/FilterPrice";
import FilterCategory from "../../AllColection/Categories/FilterComponent/FilterCategory";
import ReactPaginate from "react-paginate";

export default function AllProductComponent() {
  const [product, setProductItem] = useState([]);
  const [options, setOptions] = useState([]);
  const [sorted, setIsSorted] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  const offset = currentPage * itemsPerPage;
  const currentItems = product.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(product.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    axios(`http://localhost:3000/products?${filterQuery}`).then((response) => {
      setProductItem(response.data);
    });
  }, [filterQuery]);

  function handelOptions(e) {
    const sortingType = e.target.value;
    if (sortingType === "Product") {
      setOptions([...product]);
      setIsSorted(true);
    } else {
      const sortedData = [...product].sort((a, b) => {
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
  const handleSorting = () => {
    setIsSorted(false);
  };

  return (
    <div className="container BestSellerComponent">
      <div className="row">
        <div className="col-lg-8 col-md-12 left-Component">
          <div className="categorySelected">
            <select onChange={handelOptions}>
              <option value={"Product"}>Product</option>
              <option value={"Alphabetically, A-Z"}>Alphabetically, A-Z</option>
              <option value={"Alphabetically, Z-A"}>Alphabetically, Z-A</option>
            </select>
          </div>

          <div className="Categories-items row gap-2">
            {sorted
              ? options.map((item) => <Card product={item} key={item.id} />)
              : currentItems.map((item) => (
                  <Card product={item} key={item.id} />
                ))}
          </div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            className="pagination"
          />
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
