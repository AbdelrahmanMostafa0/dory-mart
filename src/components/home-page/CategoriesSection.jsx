"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import CategoryCard from "./elements/CategoryCard";

const CategoriesSection = () => {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="min-h-dvh h-full w-full py-24   px-2 mx-auto ">
      {" "}
      <div className="container mx-auto space-y-8">
        <h2 className="text-5xl md:text-7xl font-bold font-zentry sm:text-start">
          Dive Into Our Categories
        </h2>
        <div
          ref={sliderRef}
          className="w-[94dvw] mx-auto flex gap-4 no-scrollbar overflow-x-scroll pr-9 sm:pr-52 2xl:pr-96"
        >
          <CategoryCard
            title={"Shoes"}
            src={"/shoes-2.jpg"}
            slug={"mens-shoes"}
          />
          <CategoryCard
            title={"Laptops"}
            src={"/laptop.jpg"}
            slug={"laptops"}
          />
          <CategoryCard
            title={"Watches"}
            src={"/watch-2.jpg"}
            slug={"mens-watches"}
          />
          <CategoryCard
            title={"Sunglasses"}
            src={"/sunglasses-1.jpg"}
            slug={"sunglasses"}
          />
          <CategoryCard
            title={"Phones"}
            src={"/phone.jpg"}
            slug={"smartphones"}
          />
          <CategoryCard
            title={"Fragrances"}
            src={"/fragrances-1.jpg"}
            slug={"fragrances"}
          />
        </div>
        <div className="relative flex items-center justify-end w-full gap-4 ">
          {/* Left Scroll Button */}
          <Button onClick={scrollLeft} className=" w-14 h-14 rounded-full">
            <FaChevronLeft />
          </Button>
          {/* Right Scroll Button */}
          <Button onClick={scrollRight} className=" w-14 h-14 rounded-full">
            <FaChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CategoriesSection;
