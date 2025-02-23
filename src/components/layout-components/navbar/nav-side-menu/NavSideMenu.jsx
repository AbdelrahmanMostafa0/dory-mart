"use client";
import { RiMenuFill } from "react-icons/ri";
import { FaCartShopping, FaChevronRight, FaHeart } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import Link from "next/link";
// import { Button } from "../ui/button";

const NavSideMenu = () => {
  const productsCat = useSelector(
    (state) => state.ProductsCategories.categories
  );
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <div className="sm:hidden">
          <RiMenuFill className="text-xl text-white" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg font-bold text-start">Menu</SheetTitle>
          <div className="size-full   overflow-y-auto">
            <div className="h-dvh max-h-[83dvh] space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <SheetClose className="w-full">
                  <div className="w-full min-h-20 py-6 bg-white border drop-shadow-md rounded-md flex flex-col  items-center justify-center">
                    <FaCartShopping className=" text-xl" />
                    <p className="text-center font-semibold ">Cart</p>
                  </div>
                </SheetClose>
                <div className="w-full min-h-20 py-6 bg-white border drop-shadow-md rounded-md flex flex-col  items-center justify-center">
                  {" "}
                  <FaHeart className=" text-xl" />
                  <p className="text-center font-semibold ">Favorite</p>
                </div>
                {/* <div className="w-full h-20 bg-white border drop-shadow-md rounded-md"></div> */}
              </div>
              <div className="w-full text-start space-y-3">
                <p className="font-semibold">Categories</p>
                <div className="space-y-2">
                  {productsCat &&
                    productsCat?.slice(1, 12)?.map((cat) => {
                      return (
                        <Link href={`/categories/${cat.slug}`} key={cat.slug}>
                          <SheetClose className="w-full flex items-center justify-between">
                            <span>{cat.name}</span>
                            <FaChevronRight />
                          </SheetClose>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2">
              <MdLanguage />
              <span>عربى</span>
            </button>
          </div>
          {/* <SheetDescription>
          This action cannot be undone. This will permanently delete
          your account and remove your data from our servers.
        </SheetDescription> */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default NavSideMenu;
