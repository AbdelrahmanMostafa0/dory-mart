import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: totalStars }, (_, index) => {
        const currentStar = index + 1;

        if (rating >= currentStar) {
          // Full star
          return <FaStar key={index} color="#ffc107" size={20} />;
        } else if (rating >= currentStar - 0.5) {
          // Half star
          return <FaStarHalfAlt key={index} color="#ffc107" size={20} />;
        } else {
          // Empty star with a different color
          return <FaRegStar key={index} color="#bbb" size={20} />;
        }
      })}
    </div>
  );
};

export default RatingStars;
