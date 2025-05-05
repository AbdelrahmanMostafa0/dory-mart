"use client";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutSuccess = () => {
  return (
    <PageWrapper>
      <div className="min-h-[95dvh]  flex flex-col items-center justify-center text-center px-4 animate-float relative">
        <Image
          src={"/bubble2.png"}
          width={1000}
          height={1000}
          className="absolute md:max-w-[700px] z-10  animate-t "
        />
        {/* <FaCheckCircle className="text-green-600 text-6xl mb-4" /> */}
        <Image
          src={"/success-dory.png"}
          width={200}
          height={200}
          className="sm:w-[200px] w-[80px]"
          alt="success dory"
        />
        <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-[800px]">
          <span className="sm:block hidden">
            Woohoo! Your order has been sent swimming your way! 🐠
            <br />
          </span>
          Thanks for trusting Dorymart—just keep shopping, just keep shopping...
        </p>

        <div className="flex gap-3 flex-wrap justify-center items-center z-20 max-w-[700px] mx-auto sm:text-base text-sm">
          <Link
            href="/"
            className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition duration-200 shadow-sm"
          >
            🐠 Back to Home
          </Link>
          <Link
            href="/products"
            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition duration-200 shadow-sm"
          >
            🛍️ View More Products
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CheckoutSuccess;
