import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { $search } from "../../../Store/Search";
import { Link } from "react-router-dom";
import "./FilterComponent.scss";
export default function FilterComponent() {
  const [searchValue, setSearchValue] = useRecoilState($search);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="FilterCompnent">
      <div className="sarch-Btn">
        <h3>Search</h3>
        <div className="seacrh-inp">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={searchValue}
          />
          <Link to={"/Search"} className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>
      </div>
    </div>
  );
}
