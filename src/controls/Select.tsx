import * as React from "react";
import { ForwardedRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { SelectOptionType } from "../types";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: FieldError | null;
  options: SelectOptionType[];
};

export const Select = forwardRef(
  (props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { className = "", label, options, error, ...other } = props;

    return (
      <div className="form-floating">
        <select className={`form-select ${className}`} ref={ref} {...other}>
          {options.map((x, index) => (
            <option key={index} value={typeof x === "string" ? x : x.value}>
              {typeof x === "string" ? x : x.text}
            </option>
          ))}
        </select>
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
