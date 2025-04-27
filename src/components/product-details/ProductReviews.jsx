import { MdOutlineReviews } from "react-icons/md";
import RatingStars from "../ui/RatingStars";

const ProductReviews = ({ data }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-3 flex items-center gap-1">
        <MdOutlineReviews /> Customer Reviews
      </h2>

      {data.reviews.length === 0 ? (
        <p className="text-stone-500 italic">
          No reviews yet — be the first to roast or praise this product!
        </p>
      ) : (
        <div className="space-y-4">
          {data.reviews.map((review, index) => {
            const reviewDate = new Date(review.date).toLocaleDateString();
            const isPositive = review.rating >= 4;
            const isNegative = review.rating <= 2;
            const bgColor = isPositive
              ? "bg-green-50"
              : isNegative
              ? "bg-red-50"
              : "bg-gray-50";

            return (
              <div key={index} className={`p-4 rounded-lg border ${bgColor}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="font-semibold">{review.reviewerName}</span>
                    <span className="text-xs text-gray-400">
                      {review.reviewerEmail}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{reviewDate}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <RatingStars rating={review.rating} />
                </div>
                <p className="text-stone-600 mt-2">{review.comment}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ProductReviews;
