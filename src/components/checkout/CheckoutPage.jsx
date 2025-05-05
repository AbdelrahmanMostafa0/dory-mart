"use client";
import { useEffect, useState } from "react";
import ShippingInfo from "./ShippingInfo";
import Image from "next/image";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/useCart";

const CheckoutPage = () => {
  const { emptyCart } = useCart();
  const router = useRouter();
  const shippingInfo = useSelector((state) => state.shippingInfo.info);
  const [cartItems, setCartItems] = useState([]);
  const cartInfo = useSelector((state) => state.cart);

  useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const handleCheckout = () => {
    router.push("/checkout/success");
    emptyCart();
  };
  // console.log(cartInfo);

  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-zentry text-center">Checkout</h1>
      <div className="flex lg:flex-row flex-col items-start gap-6">
        <ShippingInfo />

        <div className="w-full lg:w-[40%] p-5 bg-white rounded-md shadow-md border flex flex-col space-y-4 ">
          <h2 className="text-2xl font-semibold border-b pb-2">Your Items</h2>
          {cartInfo?.cart?.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <div className="space-y-4 max-h-[480px] overflow-y-auto scrollbar-hide pr-1">
                {cartInfo?.cart?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                      <p className="text-sm">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm font-bold text-blue-600">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" pt-4 space-y-2">
                <div className="text-xl font-bold">
                  Total: ${cartInfo?.totalPrice?.toFixed(2)}
                </div>
                <p className="text-sm text-gray-600 italic capitalize">
                  cash upon delivery.
                </p>
                <button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0 || shippingInfo.length < 1}
                  className={cn(
                    `px-6 py-2 rounded-md text-white bg-green-600 disabled:opacity-60  w-full font-semibold transition-colors duration-200 `
                  )}
                >
                  Order Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
