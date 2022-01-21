import React from "react";
import "../../css/Cart/Cart.css";

const Cart = (props) => {
  const { cartProducts, removeFromCart } = props;
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cartProducts.length ? (
          <p>{cartProducts.length} Product In Cart</p>
        ) : (
          "Empty Cart"
        )}
      </div>
      <div className="cart-items">
        {cartProducts.map((product) => {
          return (
            <div className="cart-item" key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.title}
                title={product.title}
              />
              <div className="cart-info">
                <h5 className="item-title">{product.title}</h5>
                <span className="item-qty">{product.qty}</span>
                <span className="item-price">{product.price}$</span>
              </div>
              <div className="cart-actions">
                <button
                  className="remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
