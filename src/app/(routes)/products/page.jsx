import { getAllProducts } from "@/services/productService";
import RenderProducts from "@/components/search/RenderProducts";
import PageWrapper from "@/components/PageWrapper";

const page = async ({ searchParams }) => {
  const queries = await searchParams;
  const page = queries?.page || 1;
  const response = await getAllProducts({
    limit: 15,
    page,
    keyword: queries?.q || "",
  });

  return (
    <PageWrapper>
      <div className="bg-gray-200">
        <RenderProducts response={response} page={page} limit={15} />
      </div>
    </PageWrapper>
  );
};
export default page;
