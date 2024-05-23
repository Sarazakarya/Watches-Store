import React, { useEffect, useState } from "react";
import AboutBackground from "../../componatnts/AboutPage/AboutBackground/AboutBackground";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";
import axios from "axios";
import { $search } from "../../componatnts/Store/Search";
import { useRecoilState } from "recoil";
import { getFilterQuery } from "../../componatnts/getquery/getFilterQuery";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { $ViewAtom } from "../../componatnts/Store/ViewBtn";
import View from "../../componatnts/View/View";
import SearchComponent from "./Component/SearchComponent";
import HandleToTop from "../../componatnts/Use/HandleToTop";

export default function Search() {
  const [product, setProductItem] = useState([]);
  const [issearch] = useState(true);
  const [searchValue, setSearchValue] = useRecoilState($search);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((data) => {
      setProductItem(data.data);
    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      filterProduct();
    }
  }, []);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function filterProduct() {
    const query = getFilterQuery({ q: searchValue });
    axios.get(`http://localhost:3000/products?${query}`).then((data) => {
      setProductItem(data.data);
      setCurrentPage(0);
    });
  }

  useEffect(() => {
    HandleToTop();
  }, []);
  const offset = currentPage * itemsPerPage;
  const currentItems = product.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className="pagenation-search">
      <AboutBackground title={"Search"} page={"Search"} />
      <div className="container">
        <div className=" search">
          <div className="seacrh-inp">
            {issearch ? (
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={handleChange}
              />
            ) : (
              <input type="text" placeholder="Search" />
            )}
            <FontAwesomeIcon
              icon={faSearch}
              className="icon"
              onClick={filterProduct}
            />
          </div>
        </div>
        <hr />

        <div className="SearchComponetnt container">
          <div className="row">
            {currentItems.length === 0 ? (
              <div className="Not-Found"> Not Found</div>
            ) : (
              currentItems.map((product) => (
                <div
                  className="seacrleft-Component col-md-6 col-sm-12"
                  key={product.id}
                >
                  <div className="seacrleft">
                    <img src={product.thumbnail} alt="" />
                    <SearchComponent product={product} />
                    <h3>${product.price}</h3>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
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
    </div>
  );
}
