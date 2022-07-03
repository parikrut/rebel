import { Controller } from "react-hook-form";
import { Typography } from "../Typography";

export const Input = (props) => {
  const {
    label,
    registerTitle,
    control,
    placeholder,
    tooltipText,
    type,
    inputClassName = "",
    labelClassName = "",
    ...restProps
  } = props;

  return (
    <div className="mt-2 mb-2 flex flex-col gap-2 w-full">
      <Typography
        variant="label"
        className={`${labelClassName} flex flex-row gap-2`}
      >
        <div> {label}</div>
      </Typography>

      <Controller
        name={registerTitle}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`${inputClassName} text-sm block w-full px-4 py-2 border border-slate-300 rounded-md 
              placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary `}
              {...restProps}
            />
            <Typography
              variant="error"
              color="text-red-600"
              className="animate-bounce"
            >
              {error?.message}
            </Typography>
          </>
        )}
      />
    </div>
  );
};

// Example
// <Input
// label={"Website"}
// registerTitle={"website"}
// control={control}
// placeholder={"Website"}
// type={"text"}
// tooltip={true}
// tooltipText={"test"}
// />
