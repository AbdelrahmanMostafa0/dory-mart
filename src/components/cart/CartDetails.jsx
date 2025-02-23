"use client";
import { useSelector } from "react-redux";
import PageContainer from "../ui/PageContainer";
import Image from "next/image";
import { CardDescription } from "../ui/card";
import { FaRegTrashCan } from "react-icons/fa6";
import useCart from "@/hooks/useCart";
import CartItemCard from "./CartItemCard";
import CartItemSkeleton from "./CartItemSkeleton";

const CartDetails = () => {
  const { decreseQuantity, increseQuantity, removeFromCart } = useCart();
  const cartInfo = useSelector((state) => state.cart);
  console.log(`cart===>`, cartInfo);
  return (
    <PageContainer className={"space-y-10"}>
      <h1 className="text-6xl font-zentry text-center">My Cart</h1>
      <div className="grid lg:grid-cols-8 mx-auto  flex-col gap-1 ">
        <div className="col-span-6 space-y-4">
          {cartInfo.cart ? (
            cartInfo?.cart?.length > 0 ? (
              cartInfo.cart.map((item, i) => {
                return (
                  //   <div
                  //     className={`${
                  //       isFirst && "border-t-2"
                  //     } border-b-2 flex flex-col-reverse gap-4 sm:flex-row py-4  border-black`}
                  //   >
                  //     <div className="w-full flex flex-col justify-between">
                  //       <div className="space-y-2">
                  //         {" "}
                  //         <h3 className=" font-zentry text-4xl">{item.title}</h3>
                  //         <CardDescription>{item.description}</CardDescription>
                  //         <p className="text-xl">$ {item.price}</p>
                  //       </div>
                  //       <div className="flex gap-4 items-center">
                  //         <div className="glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl">
                  //           -
                  //         </div>
                  //         <p className="text-xl"> {item.quantity}</p>
                  //         <div className="glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl">
                  //           +
                  //         </div>
                  //       </div>
                  //     </div>
                  //     <Image
                  //       src={item.image}
                  //       width={300}
                  //       height={300}
                  //       className="aspect-square rounded-md sm:w-fit w-full bg-gray-200"
                  //     />
                  //   </div>
                  <CartItemCard item={item} key={item.id} />
                );
              })
            ) : (
              "No Items"
            )
          ) : (
            <>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
              <CartItemSkeleton></CartItemSkeleton>
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
};
export default CartDetails;
