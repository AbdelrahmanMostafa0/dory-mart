import { getProductsByCategory } from "@/apis/productsApis";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ProductPagination from "../Pagination";

const page = async ({ params, searchParams }) => {
  const page = searchParams?.page || 1;

  const response = await getProductsByCategory({
    category: params?.slug,
    page,
  });
  console.log(response);
  //
  // console.log("Category Slug:", categorySlug);
  // console.log("Page:", page);
  // console.log("Order:", order);

  return (
    <div className="min-h-dvh pt-24 mx-auto container px-2 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {response?.products &&
          response?.products.map((prod) => {
            const priceBefore =
              (prod.price * 100) / (100 - prod.discountPercentage);
            return (
              <div
                key={prod.id}
                className=" border  rounded-lg max-w-[350px] w-full bg-white drop-shadow-md "
              >
                <Image
                  src={prod.thumbnail}
                  width={300}
                  height={300}
                  className="object-cover border  w-full bg-gray-50"
                />
                <div className="p-2 px-4 space-y-2 text-lg">
                  <p className="line-clamp-1" title={prod.title}>
                    {prod.title}
                  </p>
                  <p className="font-extrabold font-robert-medium">
                    ${prod.price}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="p-0.5 px-2 text-red-400 bg-red-500/30 rounded-md text-sm">
                      {prod?.discountPercentage}%
                    </div>
                    <div className="line-through text-gray-300 text-sm">
                      ${parseInt(priceBefore)}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span>{prod.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <ProductPagination
        curruntPage={page}
        totalPages={Math.ceil(response.total / response.limit)}
      />
    </div>
  );
};
export default page;
