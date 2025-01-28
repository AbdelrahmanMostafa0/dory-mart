"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import CategoryCard from "./elements/CategoryCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  const categories = [
    { title: "Shoes", src: "/shoes-2.jpg", slug: "mens-shoes" },
    { title: "Laptops", src: "/laptop.jpg", slug: "laptops" },
    { title: "Watches", src: "/watch-2.jpg", slug: "mens-watches" },
    { title: "Sunglasses", src: "/sunglasses-1.jpg", slug: "sunglasses" },
    { title: "Phones", src: "/phone.jpg", slug: "smartphones" },
    { title: "Fragrances", src: "/fragrances-1.jpg", slug: "fragrances" },
  ];
  useGSAP(
    () => {
      gsap.fromTo(
        ".cat-card",
        { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
        {
          opacity: 1,
          y: 0, // Final state: fully visible and in place
          stagger: 0.3,
          ease: "power1.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: sliderRef.current, // Use the slider as the triggerx
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sliderRef }
  );
  return (
    <section className="min-h-dvh h-full w-full py-16 sm:py-24   px-2 mx-auto ">
      {" "}
      <div className="container mx-auto space-y-8">
        <h2 className="text-5xl md:text-7xl font-bold font-zentry sm:text-start">
          Dive Into Our Categories
        </h2>
        <div
          ref={sliderRef}
          className="w-[94dvw] mx-auto flex gap-4 no-scrollbar overflow-x-scroll pr-9 sm:pr-52 2xl:pr-96"
        >
          {categories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                title={category.title}
                src={category.src}
                slug={category.slug}
              />
            );
          })}
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
