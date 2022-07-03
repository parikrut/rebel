const style = {
  type: {
    h6: `text-xs font-light`,
    h5: `text-sm`,
    h4: `text-lg font-normal`,
    h3: `text-xl font-semibold`,
    h2: `text-2xl font-semibold`,
    h1: `text-5xl	font-semibold`,
    error: `text-sm font-medium`,
    label: `text-lg font-semibold`,
    heading: `text-2xl font-semibold`,
    semiHeading: `text-sm font-bold`,
  },
};

export const Typography = ({
  children,
  variant = "h5",
  className = "",
  lines = 3,
  color = "text-slate-500",
  space = "tracking-widest",
  ...props
}) => {
  return (
    <div
      className={`${color}  ${space} ${style.type[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
