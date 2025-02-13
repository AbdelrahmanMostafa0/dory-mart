import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const CategoryCard = ({ src, title, slug }) => {
  return (
    <Link
      href={`/categories/${slug}`}
      className="h-[480px] min-h-[300px] sm:h-[70dvh] min-w-[90vw] sm:min-w-96 md:min-w-[420px] bg-blue-300 rounded-3xl relative overflow-hidden group cat-card"
    >
      {src && (
        <Image
          src={src}
          width={1000}
          height={1000}
          alt="category-img"
          className="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-105 duration-150"
        />
      )}
      {title && (
        <h3 className=" font-zentry font-bold text-white text-5xl sm:text-7xl  absolute top-5 left-5">
          {title}
        </h3>
      )}
      <div className="absolute text-white flex items-center justify-center bottom-5 right-5 w-14 h-14 bg-black/30 hover:bg-black/20 duration-100 cursor-pointer rounded-full">
        <MdOutlineArrowOutward className="text-2xl" />
      </div>
    </Link>
  );
};
export default CategoryCard;
