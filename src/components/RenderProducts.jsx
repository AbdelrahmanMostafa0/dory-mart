import ProductPagination from "@/app/categories/Pagination";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const RenderProducts = ({ response, page, limit }) => {
  return (
    <div className="min-h-dvh pt-24 mx-auto container px-2 mb-5 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-5 min-h-[80dvh]">
        {response?.products &&
          response?.products.map((prod) => {
            const priceBefore =
              (prod.price * 100) / (100 - prod.discountPercentage);
            return (
              <div
                key={prod.id}
                className=" border h-fit overflow-hidden  rounded-lg max-w-[350px] w-full bg-white drop-shadow-md "
              >
                <Image
                  src={prod.thumbnail}
                  width={300}
                  height={300}
                  alt={prod.title}
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
        totalProducts={response.total}
        limit={limit}
      />
    </div>
  );
};
export default RenderProducts;
