import React from "react";
import { Select } from "../../../controls/Select.tsx";
import { CheckoutFormType, SelectOptionType } from "../../../types";
import { useFormContext } from "react-hook-form";

type Props = {};

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

export const CheckoutForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();

  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
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
    </>
  );
};
