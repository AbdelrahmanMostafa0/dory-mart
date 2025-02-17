import ProductPagination from "@/app/categories/Pagination";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import PageContainer from "./ui/PageContainer";
import Link from "next/link";
import ProductCard from "./home-page/elements/ProductCard";
import ProductFilters from "./product-filters/ProductFilters";
import Categories from "./Categories";

const RenderProducts = async ({
  category,
  response,
  page,
  limit,
  searchParams,
}) => {
  const queries = await searchParams;
  console.log("this fun", category);

  return (
    <PageContainer className={"space-y-4"}>
      <ProductFilters />
      <Categories curruntCat={category} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-5 min-h-[80dvh]">
        {response?.products &&
          response?.products.map((prod) => {
            const random = Math.floor(Math.random() * 50);
            return (
              <ProductCard product={prod} key={prod.id + prod.title + random} />
              // <div
              //   key={prod.id}
              //   className=" border h-fit overflow-hidden  rounded-lg max-w-[350px] w-full bg-white drop-shadow-md "
              // >
              //   <Link href={`/product-details/${prod.id}`}>
              //     <Image
              //       src={prod.thumbnail}
              //       width={300}
              //       height={300}
              //       alt={prod.title}
              //       className="object-cover border  w-full bg-gray-50"
              //     />
              //   </Link>
              //   <div className="p-2 px-4 space-y-2 text-lg">
              //     <p className="line-clamp-1" title={prod.title}>
              //       {prod.title}
              //     </p>
              //     <p className="font-extrabold font-robert-medium">
              //       ${prod.price}
              //     </p>
              //     <div className="flex items-center gap-2">
              //       <div className="p-0.5 px-2 text-red-400 bg-red-500/30 rounded-md text-sm">
              //         {prod?.discountPercentage}%
              //       </div>
              //       <div className="line-through text-gray-300 text-sm">
              //         ${parseInt(priceBefore)}
              //       </div>
              //     </div>
              //     <div className="flex items-center">
              //       <FaStar className="text-yellow-400" />
              //       <span>{prod.rating}</span>
              //     </div>
              //   </div>
              // </div>
            );
          })}
      </div>

      <ProductPagination
        curruntPage={page}
        totalProducts={response.total}
        limit={limit}
      />
    </PageContainer>
  );
};
export default RenderProducts;
