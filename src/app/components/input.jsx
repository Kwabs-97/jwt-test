import React from "react";

function Input({ type, value, className, placeholder, name }) {
  return (
    <input
      type={type}
      value={value}
      className={`${className}`}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
