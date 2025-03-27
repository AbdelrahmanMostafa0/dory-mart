import PhoneNumberInput from "@/shared/PhoneNumberInput";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";

const ShippingInfo = () => {
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
    // Submit form data
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full  space-y-4">
      <h2 className="text-4xl font-bold">Shipping Information</h2>
      <div className="grid lg:grid-cols-2   gap-x-4 gap-y-6">
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
          <label htmlFor="apartment" className="text-lg">
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
        </div>
      </div>
      <button className="w-full text-center p-3 rounded-md bg-blue-500 hover:bg-blue-400 duration-150 text-white">
        {" "}
        Add Address
      </button>
    </form>
  );
};

export default ShippingInfo;
