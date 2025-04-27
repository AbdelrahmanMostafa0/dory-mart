import { MdLocalShipping } from "react-icons/md";
import { PiPackageDuotone } from "react-icons/pi";

const ProductWarrantyAndPolicy = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-gray-100 text-sm">
      {/* Warranty */}
      <div className="flex flex-col items-start gap-2 p-3 bg-white rounded-md shadow-sm">
        <div className="flex items-center gap-2 text-blue-500">
          <PiPackageDuotone className="text-xl" />
          <strong>Warranty</strong>
        </div>
        <p className="text-stone-600">{data.warrantyInformation}</p>
        <span className="text-gray-400 text-xs">
          Covers manufacturing defects only
        </span>
      </div>

      {/* Return Policy */}
      <div className="flex flex-col items-start gap-2 p-3 bg-white rounded-md shadow-sm">
        <div className="flex items-center gap-2 text-green-500">
          <MdLocalShipping className="text-xl" />
          <strong>Return Policy</strong>
        </div>
        <p className="text-stone-600">{data.returnPolicy}</p>
        <span className="text-gray-400 text-xs">
          Easy returns within policy period
        </span>
      </div>
    </div>
  );
};
export default ProductWarrantyAndPolicy;
