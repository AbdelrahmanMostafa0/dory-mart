"use Client";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartInfo = useSelector((state) => state.cart);
  return (
    <div className="relative">
      <span className=" absolute left-4 bottom-3 w-5 h-5 text-xs glassy-bg rounded-full grid place-content-center ">
        {cartInfo?.totalQuantity}
      </span>
      <FaCartShopping className=" text-2xl" />
    </div>
  );
};
export default Cart;
