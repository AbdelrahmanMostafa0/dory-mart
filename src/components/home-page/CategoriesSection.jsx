"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

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
    <section className="min-h-dvh h-full w-full py-24 max-w-[1600px]  px-2 mx-auto space-y-8">
      {" "}
      <h2 className="text-5xl md:text-7xl font-bold font-zentry sm:text-start">
        Dive Into Our Categories
      </h2>
      <div
        ref={sliderRef}
        className="w-[94dvw] mx-auto flex gap-4 no-scrollbar overflow-x-scroll pr-9 sm:pr-64"
      >
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
        <div className="h-[62dvh] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative">
          <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-start w-full gap-4">
        {/* Left Scroll Button */}
        <Button onClick={scrollLeft} className=" w-14 h-14 rounded-full">
          <FaChevronLeft />
        </Button>
        {/* Right Scroll Button */}
        <Button onClick={scrollRight} className=" w-14 h-14 rounded-full">
          <FaChevronRight />
        </Button>
      </div>
    </section>
  );
};
export default CategoriesSection;
