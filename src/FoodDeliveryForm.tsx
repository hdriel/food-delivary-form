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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    mode: "onSubmit",
    // reValidateMode: "onSubmit",
    // criteriaMode: "all",
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
            {errors?.mobile && (
              <div className="error-feedback">
                <p>{errors?.mobile?.message}</p>

                {/*{errors?.mobile?.types?.required && (*/}
                {/*  <p>This Field is required</p>*/}
                {/*)}*/}
                {/*{errors?.mobile?.types?.minLength && (*/}
                {/*  <p>Must be 10 digits</p>*/}
                {/*)}*/}
              </div>
            )}
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
                validate: {
                  noFake: (value) => {
                    return (
                      value !== "email@gmail.com" || "Particular email is block"
                    );
                    // if (value === "email@gmail.com")
                    //   return "Particular email is block";
                    // return true;
                  },
                },
              })}
            />
            <label>Customer Name</label>
            {errors?.customerName && (
              <div className="error-feedback">
                <p>{errors?.customerName?.message}</p>
              </div>
            )}
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
            {errors?.email && (
              <div className="error-feedback">
                <p>{errors?.email?.message}</p>
              </div>
            )}
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
