import React from "react";
import classNames from "classnames";

function InputContainer({ children, className }) {
  return (
    <div
      className={classNames("flex w-full items-start justify-start", className)}
    >
      {children}
    </div>
  );
}

export default InputContainer;
