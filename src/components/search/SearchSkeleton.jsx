"use client";
import { useWindowSize } from "react-use";
import PageContainer from "../ui/PageContainer";

const SearchSkeleton = () => {
  const { width } = useWindowSize();
  const cat = Array(20).fill(" ");
  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="w-full border rounded-md p-3 py-4 bg-gray-200 h-20 animate-pulse "></div>
        <div className="flex sm:flex-wrap gap-4 overflow-auto no-scrollbar">
          {width > 1024
            ? cat.map((_, i) => (
                <div
                  key={i}
                  className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"
                ></div>
              ))
            : width <= 640
            ? cat
                .slice(0, 4)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-1/4 h-8 rounded-full bg-gray-200 animate-pulse"
                  ></div>
                ))
            : cat
                .slice(0, 11)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"
                  ></div>
                ))}

          {/* <div className="w-28 h-8 rounded-full bg-grdivay-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-28 h-8 rounded-full bg-gray-200 animate-pulse"></div> */}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-5 min-h-[80dvh]">
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
          <div className="border h-fit overflow-hidden  rounded-lg w-full bg-gray-200 animate-pulse drop-shadow-md min-h-[430px]"></div>
        </div>
      </div>
    </PageContainer>
  );
};
export default SearchSkeleton;
