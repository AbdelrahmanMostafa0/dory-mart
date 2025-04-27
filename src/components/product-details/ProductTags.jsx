import { TbTags } from "react-icons/tb";

const ProductTags = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {data?.tags?.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
        >
          <TbTags /> {tag}
        </span>
      ))}
    </div>
  );
};
export default ProductTags;
