import ProductPagination from "@/app/(routes)/categories/Pagination";
import PageContainer from "../ui/PageContainer";
import ProductCard from "../home-page/elements/ProductCard";
import ProductFilters from "./product-filters/ProductFilters";
import SearchCat from "./SearchCat";

const RenderProducts = async ({
  category,
  response,
  page,
  limit,
  searchParams,
}) => {
  return (
    <PageContainer className={"space-y-4 mb-0"}>
      {/* <ProductFilters curruntCat={category} /> */}
      <SearchCat curruntCat={category} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-5 min-h-[80dvh]">
        {response?.products &&
          response?.products.map((prod) => {
            const random = Math.floor(Math.random() * 50);
            return (
              <ProductCard product={prod} key={prod.id + prod.title + random} />
            );
          })}
      </div>

      <ProductPagination
        curruntPage={page}
        totalProducts={response.total}
        limit={limit}
      />
    </PageContainer>
  );
};
export default RenderProducts;
