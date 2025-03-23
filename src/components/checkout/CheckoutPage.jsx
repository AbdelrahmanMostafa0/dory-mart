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
    <div className="flex md:flex-raw flex-col-reverse items-start gap-4">
      <div className="grid md:grid-cols-2 w-[75%] bg-gray-300 min-h-svh gap-2">
        <input className="w-full  h-[50px] bg-white border   focus:border-blue-500 outline-none px-3 rounded-md my-0 " />
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
