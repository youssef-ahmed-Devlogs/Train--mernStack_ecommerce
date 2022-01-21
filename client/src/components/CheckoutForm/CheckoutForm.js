import React from "react";
import "../../css/CheckoutForm/CheckoutForm.css";
import Input from "../Input/Input";

const CheckoutForm = ({ setShowForm, submitOrder, handelChange }) => {
  return (
    <div className="checkout-form">
      <span className="close-checkout-form" onClick={() => setShowForm(false)}>
        &times;
      </span>

      <form onSubmit={submitOrder}>
        <Input
          label="Name"
          type="text"
          name="name"
          onChange={handelChange}
          required={true}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          onChange={handelChange}
          required={true}
        />

        <div className="checkout-form-submit">
          <button type="submit">Checkout</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
