import React from "react";
import classNames from "classnames";

function InputContainer({ children, className }) {
  return (
    <div
      className={classNames(
        "flex w-full flex-col items-start justify-start gap-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default InputContainer;
