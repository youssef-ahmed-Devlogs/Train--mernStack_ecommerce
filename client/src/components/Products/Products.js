import React from "react";
import "../../css/Products/Products.css";

const Products = (props) => {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            className="product-item_img"
            src={product.imageUrl}
            alt={product.title}
            title={product.title}
          />
          <div className="product-item_bottom">
            <div className="details">
              <h3 className="title">{product.title}</h3>
              <span className="price">{product.price}$</span>
            </div>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
