import { forwardRef } from "react";

export const Box = forwardRef(({ children, className }, ref) => {
  return (
    <div
      className={`${className}   rounded-xl shadow-lg hover:shadow-2xl transition-all`}
      ref={ref}
    >
      {children}
    </div>
  );
});
