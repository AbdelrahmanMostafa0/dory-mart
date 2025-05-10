"use client";
import useCart from "@/hooks/useCart";
import useFav from "@/hooks/useFav";
import ImageGallery from "../ui/ImageGallery";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";

const ProductImages = ({ data }) => {
  const [numOfProducts, setNumOfProducts] = useState(1);
  const { addToCart, loading } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFav();

  const isFavorited = isFavorite(data?.id);

  const handleProdCount = (type) => {
    if (type === "add" && numOfProducts < 10) {
      setNumOfProducts((prev) => prev + 1);
    } else if (type === "minus" && numOfProducts > 1) {
      setNumOfProducts((prev) => prev - 1);
    }
  };

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFromFavorites(data);
    } else {
      addToFavorites(data);
    }
  };

  return (
    <div className="md:max-w-[500px] w-full space-y-5 md:sticky md:top-32 transition-all duration-300">
      <ImageGallery data={data} />
      <hr />

      {/* Quantity Selector */}
      <div className="flex items-center justify-between text-stone-600">
        <button
          onClick={() => handleProdCount("minus")}
          disabled={numOfProducts <= 1}
          className={`text-3xl p-2 rounded-full transition-all duration-200 shadow-sm ${
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
          className={`text-3xl p-2 rounded-full transition-all duration-200 shadow-sm ${
            numOfProducts >= 10
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-500 hover:bg-blue-100"
          }`}
        >
          <CiCirclePlus />
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => {
          addToCart(data, numOfProducts);
          setNumOfProducts(1);
        }}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 p-3 rounded-full font-semibold transition-all duration-200 shadow-md ${
          loading
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-sky-500 text-white hover:from-blue-600 hover:to-sky-600"
        } focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1`}
      >
        {loading ? (
          <ImSpinner2 className="animate-spin text-lg" />
        ) : (
          <FaCartShopping />
        )}
        <span>{loading ? "Adding..." : "Add to cart"}</span>
      </button>

      {/* Favorites Button */}
      <button
        onClick={handleFavoriteToggle}
        className={`w-full flex items-center justify-center gap-2 p-3 rounded-full font-semibold transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1 ${
          isFavorited
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-pink-50 text-red-500 border border-red-300 hover:bg-red-100"
        }`}
      >
        {isFavorited ? (
          <AiFillHeart className="text-xl transition-all duration-200" />
        ) : (
          <AiOutlineHeart className="text-xl transition-all duration-200" />
        )}
        <span>
          {isFavorited ? "Remove from favorites" : "Add to favorites"}
        </span>
      </button>
    </div>
  );
};

export default ProductImages;
