import { getSingleProduct } from "@/services/productService";
import PageContainer from "@/components/ui/PageContainer";
import ProductDetails from "@/components/product-details/ProductDetails";

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await getSingleProduct({ id });

  return {
    title: product?.title || "Product Details",
    description:
      product?.description?.slice(0, 150) || "Check out this product.",
    openGraph: {
      title: product?.title,
      description: product?.description,
      images: [
        {
          url: product?.thumbnail || "/default-og-image.jpg",
        },
      ],
    },
  };
}
const page = async ({ params }) => {
  const { id } = await params;
  const data = await getSingleProduct({ id });
  console.log(data);

  return (
    <PageContainer>
      <ProductDetails data={data} />
    </PageContainer>
  );
};
export default page;
