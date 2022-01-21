import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "../Products/ProductModal";

const Products = (props) => {
  const { products, addToCart } = props;

  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct("");
  };

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div
          onClick={() => openModal(product)}
          key={product.id}
          className="product-item"
        >
          <img
            className="product-item_img"
            src={product.imageUrl}
            alt={product.title}
            title={product.title}
          />
          <div className="product-item_bottom">
            <div className="details">
              <h3 className="title">
                {product.title.length <= 10
                  ? product.title
                  : product.title.slice(0, 10) + "..."}
              </h3>
              <span className="price">{product.price}$</span>
            </div>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
};

export default Products;
