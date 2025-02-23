import { getAllCategories } from "@/services/productService";
import Categories from "./Categories";

const SearchCat = async ({ curruntCat }) => {
  const cat = await getAllCategories();

  return (
    <div>
      <Categories curruntCat={curruntCat} categories={cat} />
    </div>
  );
};
export default SearchCat;
