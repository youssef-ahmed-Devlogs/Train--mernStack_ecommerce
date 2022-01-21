import React from "react";
import "../../css/Filter/Filter.css";

const Filter = (props) => {
  const {
    products,
    handelFilterByCategory,
    handelSortByPrice,
    category,
    sort,
  } = props;

  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter Products</h2>
      <div className="products-count">{products.length} Products</div>
      <div className="filter-by-category">
        <span className="filter-head">Category</span>
        <select
          className="filter-category"
          value={category}
          onChange={handelFilterByCategory}
        >
          <option value="all">All</option>
          <option value="electronic">Electronic</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
      <div className="filter-by-category">
        <span className="filter-head">Sort</span>
        <select
          className="filter-category"
          value={sort}
          onChange={handelSortByPrice}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
