"use client";
import { useSelector } from "react-redux";
import PageContainer from "../ui/PageContainer";
import Image from "next/image";

import CartItemCard from "./CartItemCard";
import CartItemSkeleton from "./CartItemSkeleton";
import Link from "next/link";
import { Button } from "../ui/button";
import CartSummary from "./CartSummary";

const CartDetails = () => {
  const cartInfo = useSelector((state) => state.cart);
  return (
    <PageContainer className={"space-y-10"}>
      <h1 className="text-6xl font-zentry text-center">My Cart</h1>
      <div className="grid lg:grid-cols-8 mx-auto  flex-col gap-6 md:gap-4 ">
        <div className="lg:col-span-6 space-y-4 pt-2 px-3 w-full">
          {cartInfo.cart ? (
            cartInfo?.cart?.length > 0 ? (
              <div className="w-full grid sm:grid-cols-2 md:grid-cols-1 gap-6 ">
                {cartInfo.cart.map((item, index, cartItems) => {
                  const isLast = index + 1 === cartItems.length;
                  return (
                    <CartItemCard isLast={isLast} item={item} key={item.id} />
                  );
                })}
              </div>
            ) : (
              <div className="min-h-[55dvh] sm:min-h-[65dvh] flex items-center justify-center flex-col gap-4">
                <Image
                  src={"/please.png"}
                  width={300}
                  height={300}
                  alt="No products in the cart"
                  className="max-w-[330px] mx-auto"
                />{" "}
                <h2 className="text-2xl text-center font-z ">
                  No products in the cart go add pleaseeee
                </h2>
                <Button asChild className="bg-blue-600 hover:bg-blue-500">
                  <Link href="/products" className="text-center">
                    Go to Search
                  </Link>
                </Button>
              </div>
            )
          ) : (
            <>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
            </>
          )}
        </div>
        <div className="lg:col-span-2 relative">
          <CartSummary />
        </div>
      </div>
    </PageContainer>
  );
};
export default CartDetails;
