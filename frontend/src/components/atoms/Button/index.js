import { forwardRef } from "react";

const style = {
  default: `px-4 py-2 rounded-lg transition-colors duration-200 border-2 font-medium text-sm`,
  type: {
    primary: ` text-white  bg-amber-600 border-amber-600 hover:bg-white hover:text-amber-600 hover:border-amber-600`,
    outlined: ` text-amber-600  bg-transparent hover:bg-amber-600 hover:text-white hover:border-amber-600`,
    contrast: ` text-amber-600  bg-white hover:bg-amber-600 hover:text-white hover:border-white`,
    danger: ` text-white  bg-red-600 border-red-600 hover:bg-white hover:text-red-600 hover:border-red-600`,
  },
};

export const Button = forwardRef(
  (
    { className = "", type = "button", color = "primary", children, ...props },
    ref
  ) => {
    return (
      <button
        className={`${style.default} ${style.type[color]} ${className}`}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);
