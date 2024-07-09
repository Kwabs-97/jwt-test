import React from "react";

function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${className} flex w-full items-center justify-center gap-3 rounded-lg border-[1px] border-solid border-gray-300 px-5 py-2`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
