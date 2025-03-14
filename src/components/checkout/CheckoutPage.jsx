"use client";

import PhoneNumberInput from "@/shared/PhoneNumberInput";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const {
    register,
    setValue,
    clearErrors,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      code: "+20",
      phone: "",
    },
  });
  return (
    <div>
      <div className="max-w-[300px]">
        <PhoneNumberInput
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />
      </div>
    </div>
  );
};
export default CheckoutPage;
