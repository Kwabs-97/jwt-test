import React from "react";

function Label({ children, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={`${className}text-base font-bold`}>
      {children}
    </label>
  );
}

export default Label;
