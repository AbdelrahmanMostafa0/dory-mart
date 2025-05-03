import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

const page = () => {
  return (
    <PageWrapper>
      <div className="h-dvh mx-auto container px-2 grid place-content-center py-24">
        <div className="max-w-[1000px] grid grid-cols-2 h-full border min-h-[70dvh] rounded-lg overflow-hidden bg-white drop-shadow-md">
          <Image
            src={"/contatc-us.jpg"}
            width={1000}
            height={1000}
            alt="contactus"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full"></div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default page;
