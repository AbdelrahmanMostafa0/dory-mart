"use Client";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  useEffect(() => {
    if (cartItems.length) {
      setItemsCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, [cartItems]);
  return (
    <div className="relative">
      {itemsCount}
      <FaCartShopping className=" text-xl" />
    </div>
  );
};
export default Cart;
