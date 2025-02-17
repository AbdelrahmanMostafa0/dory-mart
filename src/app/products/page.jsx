import { getAllProducts } from "@/apis/productsApis";
import RenderProducts from "@/components/RenderProducts";

const page = async ({ searchParams }) => {
  const queries = await searchParams;
  const page = queries?.page || 1;
  const response = await getAllProducts({
    limit: 15,
    page,
    keyword: queries?.q || "",
  });
  console.log("response", response);

  return (
    <div className="bg-gray-200">
      <RenderProducts response={response} page={page} limit={15} />
    </div>
  );
};
export default page;
