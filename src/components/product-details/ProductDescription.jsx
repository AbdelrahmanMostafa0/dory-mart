import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export const ProductDescription = ({ data }) => {
  return (
    <p className="text-stone-500 flex items-start gap-1">
      <HiOutlineClipboardDocumentList className="w-10" /> {data.description}
    </p>
  );
};
