import { AiOutlineStock } from "react-icons/ai";

const ProductStock = ({ data }) => (
  <p
    className={`font-semibold flex items-center gap-1 ${
      data.stock > 0 ? "text-green-600" : "text-red-600"
    }`}
  >
    <AiOutlineStock />{" "}
    {data.stock > 0 ? `${data.stock} available` : "Out of Stock"}
  </p>
);

export default ProductStock;
