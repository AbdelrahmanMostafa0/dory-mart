"use client";
import { MdLocalShipping } from "react-icons/md";
import ImageGallery from "../ui/ImageGallery";
import RatingStars from "../ui/RatingStars";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "@/hooks/useCart";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

const ProductDetails = ({ data }) => {
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
    <div className="flex md:flex-row flex-col gap-5">
      <div className="md:max-w-[500px]  w-full space-y-5">
        <ImageGallery data={data} />
        <div className="flex items-center justify-between text-stone-600">
          <button onClick={handleProdCount} className="text-4xl">
            {" "}
            <CiCircleMinus />
          </button>
          {numOfProducts}
          <button onClick={() => handleProdCount("add")} className="text-4xl">
            {" "}
            <CiCirclePlus />
          </button>
        </div>
        <button
          onClick={() => {
            addToCart(data, numOfProducts);
            setNumOfProducts(1);
          }}
          className="w-full text-center flex items-center justify-center gap-2 p-2 rounded-full border-2 border-blue-500 text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          <FaCartShopping /> Add to cart
        </button>
      </div>
      <div className="md:mt-10 space-y-3 md:space-y-5">
        <div className="flex items-center gap-2">
          <RatingStars rating={data.rating} />
        </div>
        <h1 className="text-xl md:text-4xl font-bold ">{data.title}</h1>
        <p className="text-blue-500 font-bold text-xl">
          ${data.price?.toLocaleString()}
        </p>
        <div className="flex items-center gap-2 text-stone-500">
          <MdLocalShipping />
          <p className="">{data?.shippingInformation}</p>
        </div>
        <p className="text-stone-500 md:font-normal font-thin md:text-xl">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
