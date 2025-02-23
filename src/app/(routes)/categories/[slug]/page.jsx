import { getProductsByCategory } from "@/services/productService";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ProductPagination from "../Pagination";
import RenderProducts from "@/components/search/RenderProducts";

const page = async ({ params, searchParams }) => {
  const { page } = await searchParams;
  const { slug } = await params;
  const response = await getProductsByCategory({
    category: slug,
    page: page || 1,
  });

  return (
    <div className="bg-gray-200">
      <RenderProducts
        category={slug}
        searchParams={searchParams}
        response={response}
        page={page}
        limit={15}
      />
    </div>
  );
};
export default page;
