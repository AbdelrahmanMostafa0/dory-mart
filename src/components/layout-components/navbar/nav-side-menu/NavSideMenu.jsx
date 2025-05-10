"use client";

import { RiMenuFill } from "react-icons/ri";
import { FaCartShopping, FaChevronRight, FaHeart } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSelector } from "react-redux";
import Link from "next/link";

const NavSideMenu = () => {
  const productsCat = useSelector(
    (state) => state.ProductsCategories.categories
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open menu" className="sm:hidden p-2 text-white">
          <RiMenuFill className="text-2xl" />
        </button>
      </SheetTrigger>

      <SheetContent>
        <div className="h-[calc(100vh-5rem)] overflow-y-auto flex flex-col justify-between mt-5">
          <div className="space-y-6">
            {/* Top Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <SheetClose asChild>
                <Link
                  href={"/cart"}
                  className="w-full min-h-20 py-6 bg-blue-100 hover:bg-blue-200 border-2 border-blue-300 rounded-2xl shadow-md transition-all duration-200 flex flex-col items-center justify-center"
                >
                  <FaCartShopping className="text-2xl text-blue-700 mb-1" />
                  <span className="font-bold text-blue-800">Cart</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"favorites"}
                  className="w-full min-h-20 py-6 bg-pink-100 hover:bg-pink-200 border-2 border-pink-300 rounded-2xl shadow-md transition-all duration-200 flex flex-col items-center justify-center"
                >
                  <FaHeart className="text-2xl text-pink-600 mb-1" />
                  <span className="font-bold text-pink-700">Favorite</span>
                </Link>
              </SheetClose>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <p className="font-semibold text-base">Categories</p>
              <ul className="space-y-2">
                {productsCat?.slice(1, 12).map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/categories/${cat.slug}`} passHref>
                      <SheetClose asChild>
                        <button className="w-full flex items-center justify-between py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                          <span>{cat.name}</span>
                          <FaChevronRight className="text-sm" />
                        </button>
                      </SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Language Switcher */}
          {/* <div className="pt-6 border-t mt-4 flex items-center justify-center">
            <button className="flex items-center gap-2 text-sm font-medium hover:underline">
              <MdLanguage className="text-xl" />
              <span>عربى</span>
            </button>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSideMenu;
