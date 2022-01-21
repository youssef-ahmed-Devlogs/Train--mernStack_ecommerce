import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Cart = (props) => {
  const { cartProducts, removeFromCart } = props;
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  // Calculate Total
  const calcTotal = () => {
    // ** Without reduce function ***

    // let total = 0;

    // cartProducts.forEach((product) => {
    //   total += product.price * product.qty;
    // });

    // return total;

    // *** With reduce function ***

    return cartProducts.reduce(
      (acc, product) => acc + product.price * product.qty,
      0
    );
  };

  const handelChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitOrder = (e) => {
    e.preventDefault();
    const order = { ...value };
    console.log(order);
  };

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
      {cartProducts.length && (
        <div className="checkout">
          <div className="total">Total is: {calcTotal()}$</div>
          <button className="select-products" onClick={() => setShowForm(true)}>
            Select Products
          </button>
        </div>
      )}

      {showForm && (
        <CheckoutForm
          setShowForm={setShowForm}
          submitOrder={submitOrder}
          handelChange={handelChange}
        />
      )}
    </div>
  );
};

export default Cart;
