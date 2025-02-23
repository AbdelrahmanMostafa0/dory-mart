"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPagination = ({ curruntPage, totalProducts, limit }) => {
  const totalPages = Math.ceil(totalProducts / limit);
  const currentPage = parseInt(curruntPage); // Ensure curruntPage is an integer

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : true;

  // Function to calculate page range for desktop
  const getPageRange = () => {
    const range = [];

    if (totalPages <= 5) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // Always show the first page
      range.push(1);

      // Add ellipsis if the current page is far from the first page
      if (currentPage > 3) range.push("...");

      // Show the current page and one page before and after it
      if (currentPage > 1) range.push(currentPage - 1);
      range.push(currentPage);
      if (currentPage < totalPages) range.push(currentPage + 1);

      // Add ellipsis if the current page is far from the last page
      if (currentPage < totalPages - 2) range.push("...");

      // Always show the last page
      range.push(totalPages);
    }

    return range;
  };

  const pages = !isMobile ? getPageRange() : [currentPage];

  if (totalPages > 1) {
    return (
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            className="relative disabled:opacity-20"
          >
            {currentPage === 1 && (
              <div className="absolute w-full z-10 h-full"></div>
            )}
            <PaginationItem>
              <PaginationPrevious href={`?page=${currentPage - 1}`} />
            </PaginationItem>
          </button>

          {/* Pages */}
          {pages.map((page, i) => {
            if (page === "...") {
              // Render ellipsis
              return (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
            // Render page numbers
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  href={`?page=${page}`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            className="relative disabled:opacity-20"
          >
            {currentPage === totalPages && (
              <div className="absolute w-full z-10 h-full"></div>
            )}
            <PaginationItem>
              <PaginationNext href={`?page=${currentPage + 1}`} />
            </PaginationItem>
          </button>
        </PaginationContent>
      </Pagination>
    );
  }

  return null;
};

export default ProductPagination;
