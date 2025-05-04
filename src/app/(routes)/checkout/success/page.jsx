"use client";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutSuccess = () => {
  return (
    <PageWrapper>
      <div className="min-h-[95dvh] flex flex-col items-center justify-center text-center px-4">
        <FaCheckCircle className="text-green-600 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Woohoo! Your order has been sent swimming your way! 🐠
          <br />
          Thanks for trusting Dorymart—just keep shopping, just keep shopping...
        </p>

        <div className="flex gap-4 flex-wrap justify-center items-center">
          <Link
            href="/"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
          >
            Back to Home
          </Link>
          <Link
            href="/products"
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md font-medium transition"
          >
            View More Products
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CheckoutSuccess;
