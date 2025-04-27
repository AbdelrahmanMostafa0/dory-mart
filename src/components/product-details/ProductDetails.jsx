import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";
import ProductStock from "./ProductStock";
import ProductShipping from "./ProductShipping";
import { ProductDescription } from "./ProductDescription";
import ProductWarrantyAndPolicy from "./ProductWarrantyAndPolicy";
import ProductTags from "./ProductTags";
import ProductReviews from "./ProductReviews";
import ProductRating from "./ProductRating";

const ProductDetails = ({ data }) => {
  return (
    <div className="flex md:flex-row flex-col gap-8  ">
      <ProductImages data={data} />
      <div className="md:mt-10 space-y-6">
        <ProductRating data={data} />
        <h1 className="text-3xl font-bold text-blue-600">{data.title}</h1>
        <ProductPrice data={data} />
        <ProductStock data={data} />
        <ProductShipping data={data} />
        <ProductDescription data={data} />
        <ProductTags data={data} />
        <ProductWarrantyAndPolicy data={data} />
        <ProductReviews data={data} />
      </div>
    </div>
  );
};

export default ProductDetails;
