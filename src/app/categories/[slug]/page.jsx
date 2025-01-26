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

  return <RenderProducts response={response} page={page} limit={15} />;
};
export default page;
