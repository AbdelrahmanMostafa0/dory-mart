"use client";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "react-use";

const Categories = ({ categories, curruntCat }) => {
  const [showMore, setShowMore] = useState(false);
  const { width } = useWindowSize();
  const current = categories.find((cat) => cat.slug === curruntCat);
  const otherCategories = categories.filter((cat) => cat.slug !== curruntCat);
  const renderedArr = current ? [current, ...otherCategories] : otherCategories;
  const toggleShowMore = () => setShowMore((prev) => !prev);
  return (
    <div className="space-y-2">
      <div className="flex sm:flex-wrap gap-3 overflow-x-auto sm:overflow-hidden sm:pr-0 pr-5 no-scrollbar">
        {width > 1024 || width <= 640 || showMore
          ? renderedArr?.map((category) => {
              const isSelected = category.slug === curruntCat;
              return (
                <Link
                  href={`/categories/${category.slug}`}
                  key={category.slug}
                  className={` rounded-full px-4 py-1 whitespace-nowrap ${
                    isSelected ? "bg-blue-300" : "bg-white"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })
          : renderedArr?.slice(0, 11)?.map((category) => {
              const isSelected = category.slug === curruntCat;
              return (
                <Link
                  href={`/categories/${category.slug}`}
                  key={category.slug}
                  className={` rounded-full px-4 py-1 whitespace-nowrap ${
                    isSelected ? "bg-blue-300" : "bg-white"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
      </div>
      {width <= 1024 && (
        <div className="flex justify-end ">
          <button className="sm:flex hidden" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};
export default Categories;
