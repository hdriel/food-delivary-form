import React from "react";
import {
  FieldErrors,
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { getRenderCount } from "../../utils/getRenderCount.tsx";
import { FoodDeliveryFormType } from "../../types";
import { CheckoutForm } from "./components/CheckoutForm.tsx";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm.tsx";
import { FoodDeliveryMasterForm } from "./components/FoodDeliveryMasterForm.tsx";

const RenderCount = getRenderCount();

const FoodDeliveryForm = () => {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
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
        address: {
          streetAddress: "",
          landmark: "",
          city: "",
          state: "",
        },
      },
    });

  const { handleSubmit } = methods;

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
      <FormProvider {...methods}>
        <FoodDeliveryMasterForm />
        <div>list of ordered food items</div>
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
