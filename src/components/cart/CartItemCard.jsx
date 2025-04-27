"use client";
import useCart from "@/hooks/useCart";
import { CardDescription } from "../ui/card";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartItemCard = ({ item, isLast, savedForLater }) => {
  const {
    decreseQuantity,
    increseQuantity,
    removeFromCart,
    saveForLater,
    removeFromSaved,
    addToCart,
  } = useCart();

  const deleteFromCart = () =>
    !savedForLater ? removeFromCart(item.id) : removeFromSaved(item.id);

  const addSavedToCart = () => {
    addToCart(item);
    removeFromSaved(item.id);
  };

  return (
    <div
      className={`w-full flex flex-col md:grid md:grid-cols-5 gap-6 py-4 ${
        !isLast && "md:border-b"
      }`}
    >
      {/* Left side: Image + Details */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:col-span-3">
        <div className="relative w-full md:w-[130px]">
          <button
            onClick={deleteFromCart}
            className="absolute top-3 right-3 md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-red-100 transition-all"
          >
            <FaRegTrashCan className="text-red-500" />
          </button>
          <Image
            src={item.thumbnail}
            width={300}
            height={300}
            alt={item.title}
            className="w-full bg-gray-200 rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="font-black text-2xl line-clamp-1" title={item.title}>
              {item.title}
            </h3>
            <CardDescription>{item.brand}</CardDescription>
          </div>

          <p className="flex items-center gap-2 font-semibold">
            ${parseFloat(item.price * item.quantity).toFixed(2)}
            {!savedForLater && (
              <span className="text-gray-400 text-xs">
                ( ${item.price} x {item.quantity} )
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Right side: Quantity & Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between md:col-span-2 gap-4">
        {/* Quantity Controls */}
        {!savedForLater && (
          <div className="flex items-center gap-4">
            <button
              disabled={item.quantity === 1}
              onClick={() => decreseQuantity(item.id)}
              className="w-8 h-8 rounded-full bg-blue-500 text-white text-xl hover:bg-blue-600 transition-all disabled:opacity-50"
            >
              -
            </button>
            <p className="text-xl min-w-8 text-center">{item.quantity}</p>
            <button
              onClick={() => increseQuantity(item.id)}
              className="w-8 h-8 rounded-full bg-blue-500 text-white text-xl hover:bg-blue-600 transition-all"
            >
              +
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex w-full flex-col gap-3 items-end">
          {/* Remove Button */}
          <button
            onClick={deleteFromCart}
            className="flex items-center gap-2 p-2 border rounded-lg w-full md:w-auto text-red-500 hover:bg-red-100 transition-all"
          >
            <FaRegTrashCan /> Remove
          </button>

          {/* Save for Later / Add to Cart Button */}
          {savedForLater ? (
            <button
              onClick={addSavedToCart}
              className="flex items-center gap-2 p-2 border rounded-lg w-full md:w-auto text-green-500 hover:bg-green-100 transition-all"
            >
              <MdOutlineShoppingCart /> Add to cart
            </button>
          ) : (
            <button
              onClick={() => saveForLater(item.id)}
              className="flex items-center gap-2 p-2 border rounded-lg w-full md:w-auto text-blue-500 hover:bg-blue-100 transition-all"
            >
              <CiBookmark /> Save for later
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
