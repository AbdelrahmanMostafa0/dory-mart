/*
// todo: cancel add address
// todo: checkout card 
// todo: checkout card logic
// todo: page logic if no data
// todo: checkout page skeleton
*/
"use client";
import PhoneNumberInput from "@/shared/PhoneNumberInput";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingInfo } from "@/store/features/shippingInfoSlice";
import UserAdresses from "./UserAdresses";

const ShippingInfo = () => {
  const [showForm, setShowForm] = useState(false);
  const shippingInfo = useSelector((state) => state.shippingInfo.info);
  const dispatch = useDispatch();
  console.log(shippingInfo);

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
      email: "",
      fname: "",
      lname: "",
      address: "",
      apartment: "",
      city: "",
      moreInfo: "",
    },
  });

  useEffect(() => {
    const savedInfo = JSON.parse(localStorage.getItem("shippingInfo")) || [];
    dispatch(updateShippingInfo(savedInfo));
    setShowForm(savedInfo.length === 0);
  }, [dispatch]);

  const onSubmit = (data) => {
    const newId = shippingInfo.length > 0 ? shippingInfo[0].id + 1 : 1;
    const newItem = { id: newId, ...data, selected: true };

    const updatedShippingInfo = [
      newItem,
      ...shippingInfo.map((item) => ({ ...item, selected: false })),
    ];

    dispatch(updateShippingInfo(updatedShippingInfo));
    localStorage.setItem("shippingInfo", JSON.stringify(updatedShippingInfo));
    reset();
    clearErrors();
    setShowForm(false);
  };
  useEffect(() => {
    if (shippingInfo) {
      if (shippingInfo.length < 1) {
        setShowForm(true);
      }
    }
  }, [shippingInfo]);
  return (
    <div className="w-full space-y-4">
      <h2 className="text-4xl font-bold">Shipping Information</h2>
      <UserAdresses />

      {showForm ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid lg:grid-cols-2 gap-x-4 gap-y-6"
        >
          <div className="space-y-2 lg:col-span-2">
            <div className="flex justify-between items-center">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              {shippingInfo.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Cancel
                </button>
              )}
            </div>
            <Input
              type="email"
              error={errors.email}
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="fname" className="text-lg">
              First Name
            </label>
            <Input
              error={errors.fname}
              type="text"
              {...register("fname", { required: "First Name is required" })}
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lname" className="text-lg">
              Last Name
            </label>
            <Input
              error={errors.lname}
              type="text"
              {...register("lname", { required: "Last Name is required" })}
              placeholder="Enter your last name"
            />
          </div>

          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="address" className="text-lg">
              Address Details
            </label>
            <Input
              error={errors.address}
              type="text"
              {...register("address", { required: "Address is required" })}
              placeholder="Enter your address"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="apartment" className="text-lg">
              Apartment / Building
            </label>
            <Input
              error={errors.apartment}
              type="text"
              {...register("apartment", {
                required: "Apartment/Building Number is required",
              })}
              placeholder="e.g., Apt 5B, Building 12"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="city" className="text-lg">
              City
            </label>
            <Input
              error={errors.city}
              type="text"
              {...register("city", { required: "City is required" })}
              placeholder="Enter your city"
            />
          </div>

          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="phone" className="text-lg">
              Phone
            </label>
            <PhoneNumberInput
              placeholder="Enter your phone number"
              errors={errors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          </div>

          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="moreInfo" className="text-lg">
              Additional Information
            </label>
            <textarea
              {...register("moreInfo")}
              placeholder="Delivery notes or special requests"
              className="w-full h-[200px] resize-none bg-white border px-3 py-2 rounded-md focus:border-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-3 w-full py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-center"
            >
              Add Address
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-center"
        >
          Add New Address
        </button>
      )}
    </div>
  );
};

export default ShippingInfo;
