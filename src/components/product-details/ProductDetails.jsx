"use client";
import {
  MdLocalShipping,
  MdOutlineDiscount,
  MdOutlineReviews,
} from "react-icons/md";
import { TbTruckDelivery, TbTags } from "react-icons/tb";
import { PiPackageDuotone } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaCartShopping, FaMoneyBillWave } from "react-icons/fa6";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import ImageGallery from "../ui/ImageGallery";
import RatingStars from "../ui/RatingStars";
import useCart from "@/hooks/useCart";
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
      {/* Left Side */}
      <div className="md:max-w-[500px] w-full space-y-5">
        <ImageGallery data={data} />
        <hr />

        {/* Quantity Selector */}
        <div className="flex items-center justify-between text-stone-600">
          <button onClick={() => handleProdCount("minus")} className="text-4xl">
            <CiCircleMinus />
          </button>
          {numOfProducts}
          <button onClick={() => handleProdCount("add")} className="text-4xl">
            <CiCirclePlus />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => {
            addToCart(data, numOfProducts);
            setNumOfProducts(1);
          }}
          className="w-full flex items-center justify-center gap-2 p-2 rounded-full border-2 border-blue-500 text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all"
        >
          <FaCartShopping /> Add to cart
        </button>
      </div>

      {/* Right Side */}
      <div className="md:mt-10 space-y-5">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <RatingStars rating={data.rating} />
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <MdOutlineReviews /> ({data.reviews.length} reviews)
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold">{data.title}</h1>

        {/* Price & Discount */}
        <div className="flex items-center gap-3">
          {data.discountPercentage > 0 && (
            <p className="text-gray-400 line-through flex items-center gap-1">
              <MdOutlineDiscount /> $
              {(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
            </p>
          )}
          <p className="text-blue-500 font-bold text-2xl flex items-center gap-1">
            <FaMoneyBillWave /> ${data.price.toLocaleString()}
          </p>
        </div>

        {/* Stock Status */}
        <p className="text-green-600 font-semibold flex items-center gap-1">
          <AiOutlineStock />{" "}
          {data.stock > 0 ? `${data.stock} available` : "Out of Stock"}
        </p>

        {/* Shipping */}
        <div className="flex items-center gap-2 text-stone-500">
          <TbTruckDelivery />
          <p>{data.shippingInformation}</p>
        </div>

        {/* Description */}
        <p className="text-stone-500 flex items-start gap-1">
          <HiOutlineClipboardDocumentList className="w-10" /> {data.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
            >
              <TbTags /> {tag}
            </span>
          ))}
        </div>

        {/* Warranty and Return Policy */}
        <div className="p-3 rounded-lg bg-gray-100 space-y-2 text-sm">
          <p className="flex items-center gap-1">
            <PiPackageDuotone className="text-gray-500" />
            <strong>Warranty:</strong> {data.warrantyInformation}
          </p>
          <p className="flex items-center gap-1">
            <PiPackageDuotone className="text-gray-500" />
            <strong>Return Policy:</strong> {data.returnPolicy}
          </p>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-1">
            <MdOutlineReviews /> Customer Reviews
          </h2>
          <div className="space-y-3">
            {data.reviews.map((review, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <RatingStars rating={review.rating} />
                  <span className="font-semibold">{review.reviewerName}</span>
                </div>
                <p className="text-stone-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
