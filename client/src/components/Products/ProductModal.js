import React from "react";
import Modal from "react-modal";

const ProductModal = ({ product, closeModal }) => {
  return (
    <Modal
      isOpen={product !== ""}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <span className="close-modal" onClick={closeModal}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} title={product.title} />

        <div className="details">
          <h3 className="title">{product.title}</h3>
          <span className="price">{product.price}$</span>
          <p className="desc">{product.desc}</p>

          <div className="colors">
            {product !== "" &&
              product.colors.map((color, index) => (
                <span
                  className={color}
                  key={Math.random() * index + Math.random()}
                ></span>
              ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
