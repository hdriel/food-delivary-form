import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { getRenderCount } from "./utils/getRenderCount.tsx";
import { TextField } from "./controls/TextField.tsx";
import { Select } from "./controls/Select.tsx";
import { SelectOptionType } from "./types";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
  paymentMethod: string;
  deliveryIn: number;
};

const RenderCount = getRenderCount();

// const paymentOptions: SelectOptionType[] = ['Select', 'Online', 'COD'];
const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid online" },
  { value: "COD", text: "Cash on Delivery" },
];

const deliveryInOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];

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
      paymentMethod: "",
      deliveryIn: 0,
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
          <TextField
            label="#Order No."
            error={errors?.orderNo}
            disabled
            {...register("orderNo", {
              required: "This Field is required",
            })}
          />
        </div>
        <div className="col">
          <TextField
            label="Mobile"
            error={errors?.mobile}
            {...register("mobile", {
              minLength: {
                value: 10,
                message: "Must be 10 digits",
              },
              maxLength: 10,
              required: "This Field is required",
            })}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <TextField
            label="Customer Name"
            error={errors?.customerName}
            {...register("customerName", {
              required: {
                value: true,
                message: "This Field is required",
              },
            })}
          />
        </div>
        <div className="col">
          <TextField
            type="email"
            label="Email"
            error={errors?.email}
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]*\.[^\s@]*$/,
                message: "Incorrect email format",
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
                notFromBlackListDomain: (value, formValues) => {
                  return (
                    (!value.endsWith("@xyz.com") &&
                      !value.endsWith("@example.com")) ||
                    "this domain not supported!"
                  );
                },
              },
            })}
          />
        </div>
      </div>
      <div>list of ordered food items</div>
      <div className="row mb-2">
        <div className="col">
          <Select
            label="Payment Method"
            options={paymentOptions}
            {...register("paymentMethod", {
              required: "This field is required.",
            })}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          <Select
            label="Delivery Within"
            options={deliveryInOptions}
            {...register("deliveryIn")}
            error={errors.deliveryIn}
          />
        </div>
      </div>
      <div>delivery address</div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
