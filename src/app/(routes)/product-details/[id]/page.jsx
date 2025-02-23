import { getSingleProduct } from "@/services/productService";
import PageContainer from "@/components/ui/PageContainer";

const page = async ({ params }) => {
  const { id } = await params;
  const data = await getSingleProduct({ id });

  return <PageContainer>{id}</PageContainer>;
};
export default page;
