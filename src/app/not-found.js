import PageContainer from "@/components/ui/PageContainer";
import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  return (
    <PageContainer>
      <div className="min-h-[83dvh] grid place-content-center gap-5 px-5">
        <h1 className="text-7xl text-center  font-zentry">Oops!</h1>
        <Image
          src={"/dory-oops.png"}
          alt="404"
          width={1000}
          height={1000}
          className="max-w-[200px] sm:max-w-[300px] w-full mx-auto"
        />
        <h2 className="text-xl sm:text-3xl text-center text-black max-w-[600px]">
          The page {"you're"} trying to access {"doesn't "}exist or has been
          removed.
        </h2>
        <Link
          href="/"
          className="bg-blue-600 text-white w-fit mx-auto px-4 py-2 rounded-xl text-center"
        >
          {" "}
          Go Back Home
        </Link>
      </div>
    </PageContainer>
  );
};
export default notFound;
