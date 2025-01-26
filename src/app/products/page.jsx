import { getAllProducts } from "@/apis/productsApis";
import RenderProducts from "@/components/RenderProducts";

const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const response = await getAllProducts({ limit: 15, page });
  console.log("response", response);

  return <RenderProducts response={response} page={page} limit={15} />;
};
export default page;
