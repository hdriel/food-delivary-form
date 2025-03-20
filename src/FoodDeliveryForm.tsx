import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { getRenderCount } from "./utils/getRenderCount.tsx";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

const RenderCount = getRenderCount();

const FoodDeliveryForm = () => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
  });

  const onSubmit = (formData) => {
    console.log("form data", formData);
  };

  const onError = (errors: FieldErrors) => {
    console.log("validation errors", errors);
  };

  return (
    <form
      autoComplete="off"
      noValidate={false}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <RenderCount />
      FoodDeliveryForm
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="#Order No."
              disabled
              {...register("orderNo")}
            />
            <label>#Order No.</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              {...register("mobile", {
                minLength: {
                  value: 10,
                  message: "Must be 10 digits",
                },
                maxLength: 10,
                required: "This Field is required",
              })}
            />
            <label>Mobile</label>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name"
              {...register("customerName", {
                required: {
                  value: true,
                  message: "This Field is required",
                },
              })}
            />
            <label>Customer Name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]*\.[^\s@]*$/,
                  message: "Incorrect email format",
                },
              })}
            />
            <label>Email</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
