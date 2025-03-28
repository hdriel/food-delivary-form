import * as React from "react";
import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError | null;
};

export const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", className = "", label, error, ...other } = props;

    return (
      <div className="form-floating">
        <input
          type={type}
          className={`form-control ${className} `}
          placeholder={label}
          ref={ref}
          {...other}
        />
        <label>{label}</label>
        {error && (
          <div className="form-floating">
            {error && <div className="error-feedback">{error.message}</div>}
          </div>
        )}
      </div>
    );
  },
);
