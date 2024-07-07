import React from "react";

function ErrorMessage({ children }) {
  return <span className="text-sm text-red-500">{children}</span>;
}

export default ErrorMessage;
