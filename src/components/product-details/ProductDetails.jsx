import { MdLocalShipping } from "react-icons/md";
import ImageGallery from "../ui/ImageGallery";

const ProductDetails = ({ data }) => {
  return (
    <div className="flex md:flex-row flex-col gap-5">
      <div className="md:max-w-[500px]  w-full">
        <ImageGallery data={data} />
      </div>
      <div className="md:mt-10 space-y-3 md:space-y-5">
        <h1 className="text-xl md:text-4xl font-bold ">{data.title}</h1>
        <p className="text-blue-500 font-bold text-xl">
          ${data.price?.toLocaleString()}
        </p>
        <div className="flex items-center gap-2 text-stone-500">
          <MdLocalShipping />
          <p className="">{data?.shippingInformation}</p>
        </div>
        <p className="text-stone-500 md:font-normal font-thin md:text-xl">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
