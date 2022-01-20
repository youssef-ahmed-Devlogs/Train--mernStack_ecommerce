import React from "react";
import "../../css/Filter/Filter.css";

const Filter = (props) => {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter Products</h2>
      <div className="products-count">10 Products</div>
      <div className="filter-by-category">
        <span className="filter-head">Category</span>
        <select className="filter-category">
          <option value="all">All</option>
          <option value="electronic">Electronic</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
