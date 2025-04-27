"use client";
import useCart from "@/hooks/useCart";
import ImageGallery from "../ui/ImageGallery";
import { CiBookmark, CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";

const ProductImages = ({ data }) => {
  const [numOfProducts, setNumOfProducts] = useState(1);
  const { addToCart, loading } = useCart();
  const handleProdCount = (type) => {
    if (type === "add") {
      if (numOfProducts < 10) {
        setNumOfProducts((prev) => prev + 1);
      }
    } else {
      if (numOfProducts > 1) {
        setNumOfProducts((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="md:max-w-[500px] w-full space-y-5 md:sticky md:top-32">
      <ImageGallery data={data} />
      <hr />
      {/* Quantity Selector */}
      <div className="flex items-center justify-between text-stone-600">
        <button
          onClick={() => handleProdCount("minus")}
          disabled={numOfProducts <= 1}
          className={`text-4xl p-2 rounded-full transition-all duration-200 ${
            numOfProducts <= 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          <CiCircleMinus />
        </button>
        <span className="text-lg font-semibold">{numOfProducts}</span>
        <button
          onClick={() => handleProdCount("add")}
          disabled={numOfProducts >= 10}
          className={`text-4xl p-2 rounded-full transition-all duration-200 ${
            numOfProducts >= 10
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          <CiCirclePlus />
        </button>
      </div>

      <button
        onClick={() => {
          addToCart(data, numOfProducts);
          setNumOfProducts(1);
        }}
        className="w-full  flex items-center justify-center gap-2 p-3 rounded-full border-2 border-blue-500 text-blue-500 font-bold hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
      >
        <FaCartShopping />
        <span>Add to cart</span>
      </button>
      <button className="w-full flex items-center justify-center gap-2 p-3 rounded-full border-2 border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white active:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200">
        {/* <CiBookmark className="text-xl" /> */}
        <AiOutlineHeart className="text-xl" />
        {/* {isFavorited ? (
          <AiFillHeart className="text-xl" />
        ) : (
          <AiOutlineHeart className="text-xl" />
        )} */}
        <span>Add to favorites</span>
        {/* <span>{isFavorited ? 'Remove from favorites' : 'Add to favorites'}</span> */}
      </button>
    </div>
  );
};

export default ProductImages;
