import { getAllProducts } from "@/services/productService";
import ProductCard from "./elements/ProductCard";

const NewstProducts = async () => {
  const data = await getAllProducts({ limit: 12, page: 9 });

  return (
    <div className="container mx-auto space-y-8 py-10 ">
      <h1 className="text-5xl md:text-7xl font-bold font-zentry sm:text-start">
        New arrivals
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data?.products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default NewstProducts;
