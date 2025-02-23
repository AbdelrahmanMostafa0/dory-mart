import useCart from "@/hooks/useCart";
import { CardDescription } from "../ui/card";
import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";

const CartItemCard = ({ item }) => {
  const { decreseQuantity, increseQuantity, removeFromCart } = useCart();

  return (
    <div className="grid grid-cols-5  justify-between ">
      <div className="flex justify-self-start col-span-3  items-start gap-4">
        <Image
          src={item.image}
          width={300}
          height={300}
          className="w-full md:max-w-[130px] bg-gray-200 rounded-lg"
        />
        <div>
          <h3 className="font-robert-regular font-bold text-xl">
            {item.title}
          </h3>

          <CardDescription>{item.brand}</CardDescription>
        </div>
      </div>
      <div className="justify-self-end  col-span-1">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => decreseQuantity(item.id)}
            className="glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl"
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
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="justify-self-end  col-span-1 flex items-center h-fit gap-2 p-1 border rounded-lg px-3 "
      >
        <FaRegTrashCan className="text-red-500" /> Remove
      </button>
    </div>
  );
};
export default CartItemCard;
