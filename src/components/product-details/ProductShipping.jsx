import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const ProductShipping = ({ data }) => (
  <div className="flex items-center gap-2 text-stone-500">
    <MdOutlineLocalShipping />
    <p>{data.shippingInformation}</p>
  </div>
);

export default ProductShipping;
