// @flow
import * as React from "react";
import { TextField } from "../../../controls/TextField.tsx";
import { useFormContext } from "react-hook-form";
import { DeliveryAddressFormType } from "../../../types";

type Props = {};

export const DeliveryAddressForm = (props: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ address: DeliveryAddressFormType }>();

  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street Address"
            error={errors.address?.streetAddress}
            {...register("address.streetAddress", {
              required: "This Field is required",
            })}
          />
        </div>
        <div className="col">
          <TextField
            label="City"
            error={errors.address?.city}
            {...register("address.city", {
              required: "This Field is required",
            })}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Landmark"
            error={errors.address?.landmark}
            {...register("address.landmark")}
          />
        </div>
        <div className="col">
          <TextField
            label="State"
            error={errors.address?.state}
            {...register("address.state")}
          />
        </div>
      </div>
    </>
  );
};
