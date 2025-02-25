"use client";
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
const SavedForLater = () => {
  const SavedForLater = useSelector((state) => state.savedForLater.savedItems);

  if (SavedForLater?.length > 0) {
    return (
      <div className="space-y-6 md:space-y-8">
        <h3 className="text-4xl font-bold">Saved For Later</h3>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-1 gap-6 ">
          {SavedForLater?.map((item, i, items) => {
            const isLast = i + 1 === items.length;
            return (
              <CartItemCard
                savedForLater={true}
                item={item}
                key={item.id}
                isLast={isLast}
              />
            );
          })}
        </div>
      </div>
    );
  }
};
export default SavedForLater;
