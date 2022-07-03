import { forwardRef } from "react";

const style = {
  default: `font-light rounded-xl p-2 px-4 flex justify-center text-sm`,
  type: {
    green: ` bg-green-600 text-white`,
    red: ` bg-red-600 text-white`,
  },
};

export const Bubble = forwardRef(
  ({ className = "", color = "red", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${style.default} ${style.type[color]} ${className}`}
      >
        {children}
      </div>
    );
  }
);
