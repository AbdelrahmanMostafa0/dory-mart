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
      className={`md:grid w-full grid-cols-5 gap-4 justify-between pb-5 ${
        !isLast && "md:border-b "
      }  `}
    >
      <div className="flex flex-col md:flex-row justify-self-start md:col-span-3 w-full md:w-fit  items-start gap-4">
        <div className="relative w-full md:max-w-[130px]">
          <button
            onClick={deleteFromCart}
            className="absolute top-3 right-3 md:hidden flex w-9 h-9 rounded-full items-center justify-center bg-white drop-shadow-md  "
          >
            <FaRegTrashCan className="text-red-500" />
          </button>
          <Image
            src={item.thumbnail}
            width={300}
            height={300}
            alt={item.title}
            className="w-full md:max-w-[130px] bg-gray-200 rounded-lg"
          />
        </div>
        <div className="flex-col flex justify-between h-full">
          <div>
            <h3
              className="font-robert-regular font-black text-2xl line-clamp-1"
              title={item.title}
            >
              {item.title}
            </h3>

            <CardDescription>{item.brand}</CardDescription>
          </div>
          <p className="flex items-center gap-2 font-semibold ">
            ${parseFloat(item.price * item.quantity).toFixed(2)}{" "}
            {!savedForLater && (
              <span className="text-gray-400 text-xs font-normal">
                ( ${item.price} x {item.quantity} )
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:items-start md:col-span-2 ">
        <div className="justify-self-end ">
          {!savedForLater && (
            <div className="flex gap-4 items-center">
              <button
                disabled={item.quantity === 1}
                onClick={() => decreseQuantity(item.id)}
                className="disabled:opacity-50 glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl"
              >
                -
              </button>
              <p className="text-xl min-w-4 text-center"> {item.quantity}</p>
              <button
                onClick={() => increseQuantity(item.id)}
                className="glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl"
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="h-full justify-between items-end flex flex-col gap-2">
          <button
            onClick={deleteFromCart}
            className="justify-self-end md:w-fit hidden  md:flex items-center h-fit gap-2 p-1 border rounded-lg px-3 "
          >
            <FaRegTrashCan className="text-red-500" /> Remove
          </button>
          {savedForLater ? (
            <button
              onClick={addSavedToCart}
              className="justify-self-end  flex items-center h-fit gap-2 p-1 border rounded-lg px-3 "
            >
              <MdOutlineShoppingCart /> Add to cart
            </button>
          ) : (
            <button
              onClick={() => saveForLater(item.id)}
              className="justify-self-end  flex items-center h-fit gap-2 p-1 border rounded-lg px-3 "
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
