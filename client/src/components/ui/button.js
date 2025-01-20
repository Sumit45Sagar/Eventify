
import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
