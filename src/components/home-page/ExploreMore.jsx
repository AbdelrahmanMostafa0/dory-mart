import Image from "next/image";
import AnimatedTitle from "../ui/AnimatedTitle";

const ExploreMore = () => {
  return (
    <div className=" py-5 sm:py-20   flex items-center flex-col justify-center w-full mx-auto relative max-w-screen">
      <h3 className="text-center font-zentry text-4xl md:text-8xl font-bold">
        Explore the Depths of <br />{" "}
        <span
          style={{
            WebkitTextStroke: "3px #fff",
          }}
          className="bg-blue-600 px-3 text-transparent tracking-wider stroke-black"
        >
          Dorymart
        </span>
      </h3>
      {/* <div className="flex mt-5 items-center justify-center">
          <Button size="lg">Explore Now</Button>
        </div> */}
      <Image
        src={"/cover.jpg"}
        // layout="fill"
        objectFit="cover"
        className="w-full md:rounded-2xl md:w-8/12"
        alt=""
        width={1000}
        height={1000}
      />
    </div>
  );
};
export default ExploreMore;
