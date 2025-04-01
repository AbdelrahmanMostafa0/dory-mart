"use client";
import PhoneNumberInput from "@/shared/PhoneNumberInput";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingInfo } from "@/store/features/shippingInfoSlice";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import UserAdresses from "./UserAdresses";
const ShippingInfo = () => {
  const [showForm, setShowForm] = useState(false);
  const shippingInfo = useSelector((state) => state.shippingInfo.info);
  console.log(shippingInfo);
  const dispatch = useDispatch();
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
  const onSubmit = (data) => {
    console.log(data);

    // Submit form data
    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || [];
    if (shippingInfo && shippingInfo.length > 0) {
      const newId = shippingInfo[shippingInfo.length - 1]?.id || 0 + 1;
      const newItem = { id: newId, ...data };
      const updatedShippingInfo = [newItem, ...shippingInfo];
      dispatch(updateShippingInfo(updatedShippingInfo));
      localStorage.setItem("shippingInfo", JSON.stringify(updatedShippingInfo));
    } else {
      const newItem = { id: 1, ...data };
      dispatch(updateShippingInfo([newItem]));
      localStorage.setItem("shippingInfo", JSON.stringify([newItem]));
    }
    reset();
    setShowForm(false);
    clearErrors();
  };

  useEffect(() => {
    if (shippingInfo && shippingInfo.length > 0) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  }, [shippingInfo]);
  useEffect(() => {
    /* 
    if address check the last address in use 
    if not show the address form 
    Todo: button to add 
    */
    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
    if (shippingInfo) {
      dispatch(updateShippingInfo(shippingInfo));
    } else {
      dispatch(updateShippingInfo([]));
    }
  }, []);
  return (
    <div className="w-full  space-y-4">
      <h2 className="text-4xl font-bold">Shipping Information</h2>
      <UserAdresses />
      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid lg:grid-cols-2   gap-x-4 gap-y-6"
        >
          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
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
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="name" className="text-lg">
              Last Name
            </label>
            <Input
              error={errors.lname}
              type="text"
              {...register("lname", { required: "Last Name is required" })}
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="address" className="text-lg">
              Address in details
            </label>
            <Input
              error={errors.address}
              type="text"
              {...register("address", { required: "Address is required" })}
              placeholder="Enter your address"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="apartment" className="text-lg line-clamp-1">
              Apartment/Building Number
            </label>
            <Input
              error={errors.apartment}
              type="text"
              {...register("apartment", {
                required: "Apartment/Building Number is required",
              })}
              placeholder="e.g., Apartment 5B, Building 12"
              className="w-full  h-[50px] bg-white border focus:border-blue-500 outline-none px-3 rounded-md my-0 "
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
              className="w-full  h-[50px] bg-white border focus:border-blue-500 outline-none px-3 rounded-md my-0 "
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
              name="moreInfo"
              {...register("moreInfo")}
              placeholder="Add delivery instructions or special requests"
              className="w-full  h-[200px] resize-none bg-white border focus:border-blue-500 outline-none p-3 rounded-md my-0 "
            ></textarea>
            <button className="w-full text-center p-3 rounded-md bg-blue-500 hover:bg-blue-400 duration-150 text-white">
              {" "}
              Add Address
            </button>
          </div>
        </form>
      )}
      {!showForm && (
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setShowForm(true)}
            className="w-full text-center p-3 rounded-md bg-blue-500 hover:bg-blue-400 duration-150 text-white"
          >
            Add New Address
          </button>
        </div>
      )}
    </div>
  );
};

export default ShippingInfo;
