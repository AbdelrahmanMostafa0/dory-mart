import { cn } from "@/lib/utils";

const PageContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "min-h-[89dvh] pt-24 mx-auto container pb-5 px-2 mb-5",
        className
      )}
    >
      {children}
    </div>
  );
};
export default PageContainer;
