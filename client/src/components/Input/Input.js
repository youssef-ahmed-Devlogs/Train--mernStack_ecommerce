import React from "react";

const Input = ({ label, type, name, required, onChange }) => {
  return (
    <div className="checkout-form-item">
      <label>{label}</label>
      <input type={type} required={required} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;
