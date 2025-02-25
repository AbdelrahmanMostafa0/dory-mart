import Link from "next/link";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartInfo = useSelector((state) => state.cart);
  const total = parseFloat(cartInfo?.totalPrice).toFixed(2);
  return (
    <div className="border p-5 rounded-lg space-y-5 bg-white drop-shadow-md md:sticky top-24">
      <h2 className="text-2xl font-bold text-center">Cart Summary</h2>
      <div className="grid  gap-4 text-center ">
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <p>Shipping</p>
          <p>Free</p>
        </div>{" "}
        <hr />
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      {!!cartInfo?.totalPrice && (
        <Button
          asChild
          disabled={!cartInfo?.totalPrice}
          className="bg-blue-600 hover:bg-blue-500 w-full"
        >
          <Link
            disabled={!cartInfo?.totalPrice}
            href="/checkout"
            className="text-center"
          >
            Proceed to Checkout
          </Link>
        </Button>
      )}
    </div>
  );
};
export default CartSummary;
