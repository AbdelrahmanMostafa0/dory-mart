import { MdOutlineReviews } from "react-icons/md";
import RatingStars from "../ui/RatingStars";

const ProductRating = ({ data }) => {
  return (
    <div className="flex items-center gap-2">
      <RatingStars rating={data.rating} />
      <span className="text-gray-500 text-sm flex items-center gap-1">
        <MdOutlineReviews /> ({data.reviews.length} reviews)
      </span>
    </div>
  );
};
export default ProductRating;
