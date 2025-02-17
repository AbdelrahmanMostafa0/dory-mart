"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

const Categories = ({ curruntCat }) => {
  const categories = useSelector(
    (state) => state.ProductsCategories?.categories || []
  );

  const current = categories.find((cat) => cat.slug === curruntCat);
  const otherCategories = categories.filter((cat) => cat.slug !== curruntCat);

  const renderedArr = current ? [current, ...otherCategories] : otherCategories;
  return (
    <div className="flex sm:flex-wrap gap-3 overflow-x-auto sm:overflow-hidden sm:pr-0 pr-5">
      {renderedArr?.map((category) => {
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
  );
};
export default Categories;
