import React, { useEffect, useState } from "react";
import AboutBackground from "../../componatnts/AboutPage/AboutBackground/AboutBackground";
import FilterComponent from "../../componatnts/AllColection/Categories/FilterComponent/FilterComponent";

import "./News.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import LastNews from "../../componatnts/NewsPage/Categories/LastNews/LastNews";
import { Link } from "react-router-dom";
import Loader from "./../../componatnts/Loader/Loader";

export default function Nwes({ responsedata }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 2;
  const pageCount = Math.ceil(responsedata.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  const renderNewsItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, responsedata.length);

    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      const item = responsedata[i];
      items.push(
        <div key={i} className="news-item">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="img-news">
              <img src={item.thumbnail} alt="" />
            </div>
          )}
          <div className="news_description">
            <h1>{item.title}</h1>
            <p>
              Vestibulum sem elit, eget in cum. Diam praesent lorem, fermentum
              omnis libero dignissim consectetuer luctus scelerisque, auctor
              massa diam in nullam. Dignissim amet amet, eros quis felis. Ut
              faucibus dolor etiam, porttitor vel. Tortor in orci ligu...
            </p>
            <div className="news-comment">
              <Link to={`/ReadMore/${item.id}`} className="link-news">
                READ MORE <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
          <hr className="new-hr" />
        </div>
      );
    }
    return items;
  };

  return (
    <div>
      <AboutBackground title={"News"} page={"News"} />

      <div className="Nwes container">
        <div className="row">
          <div className="col-lg-8 col-md-12 news-leftComponent">
            {renderNewsItems()}
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
            <LastNews />
          </div>
        </div>
      </div>
    </div>
  );
}
