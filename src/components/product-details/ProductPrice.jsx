import { FaMoneyBillWave } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";

const ProductPrice = ({ data }) => (
  <div className="flex items-center gap-3">
    {data.discountPercentage > 0 && (
      <p className="text-gray-400 line-through flex items-center gap-1">
        <MdOutlineDiscount /> $
        {(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}
      </p>
    )}
    <p className="text-blue-500 font-bold text-2xl flex items-center gap-1">
      <FaMoneyBillWave /> ${data.price.toLocaleString()}
    </p>
  </div>
);

export default ProductPrice;
