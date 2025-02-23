"use client";
import { useSelector } from "react-redux";
import PageContainer from "../ui/PageContainer";
import Image from "next/image";
import { CardDescription } from "../ui/card";
import { FaRegTrashCan } from "react-icons/fa6";

const CartDetails = () => {
  const cartInfo = useSelector((state) => state.cart);
  console.log(`cart===>`, cartInfo);
  return (
    <PageContainer className={"space-y-6"}>
      <h1 className="text-6xl font-zentry text-center">My Cart</h1>
      <div className="grid lg:grid-cols-8 mx-auto  flex-col gap-1 ">
        <div className="col-span-6">
          {cartInfo.cart ? (
            cartInfo?.cart?.length > 0 ? (
              cartInfo.cart.map((item, i) => {
                const isFirst = i === 0;
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
                  <div className="grid grid-cols-5  justify-between p-3">
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
                        <div className="glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl">
                          -
                        </div>
                        <p className="text-xl"> {item.quantity}</p>
                        <div className="glassy-bg w-5 sm:w-6 h-5 sm:h-6 rounded-full grid place-content-center text-white text-xl">
                          +
                        </div>
                      </div>
                    </div>
                    <div className="justify-self-end  col-span-1 flex items-center h-fit gap-2 p-1 border rounded-lg px-3 ">
                      <FaRegTrashCan className="text-red-500" /> Remove
                    </div>
                  </div>
                );
              })
            ) : (
              "No Items"
            )
          ) : (
            <>
              <div className="h-24 w-full rounded-sm bg-gray-200 animate-pulse border-b-2"></div>

              <div className="h-24 w-full rounded-sm bg-gray-200 animate-pulse border-b-2"></div>
              <div className="h-24 w-full rounded-sm bg-gray-200 animate-pulse border-b-2"></div>
              <div className="h-24 w-full rounded-sm bg-gray-200 animate-pulse border-b-2"></div>
            </>
          )}
        </div>
      </div>
    </PageContainer>
  );
};
export default CartDetails;
