import { getProductsByCategory } from "@/apis/productsApis";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ProductPagination from "../Pagination";
import RenderProducts from "@/components/RenderProducts";

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
    <div className="bg-gray-200">
      <RenderProducts
        category={params?.slug}
        searchParams={searchParams}
        response={response}
        page={page}
        limit={15}
      />
    </div>
  );
};
export default page;
