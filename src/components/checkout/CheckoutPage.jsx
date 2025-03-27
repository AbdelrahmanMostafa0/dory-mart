"use client";

import PhoneNumberInput from "@/shared/PhoneNumberInput";
import { useForm } from "react-hook-form";
import ShippingInfo from "./ShippingInfo";
import { useEffect, useState } from "react";
import Image from "next/image";

const CheckoutPage = () => {
  const [showBillingForm, setShowBillingForm] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-zentry text-center">Checkout</h1>
      <div className="flex lg:flex-row flex-col items-start gap-6">
        <ShippingInfo />

        <div className="w-full p-5 bg-white rounded-md shadow-md border">a</div>
      </div>
    </div>
  );
};
export default CheckoutPage;
