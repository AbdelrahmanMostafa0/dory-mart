import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-dvh  relative flex items-center justify-center">
      <div className="flex items-center justify-center absolute    w-full mx-auto">
        <Image
          src={"/wallpaperflare.com_wallpaper (2).jpg"}
          width={1920}
          height={1080}
          className="w-full   h-dvh object-cover   "
        />
        <div className="bg-black/30 absolute w-full h-full"></div>
      </div>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="text-white text-9xl font-semibold font-zentry">
            Just keep
          </h1>
        </div>
      </div>
      {/* <div className="z-10 w-full h-full full-screen-section container flex justify-center flex-col mx-auto gap-6">
        <p className="md:w-6/12 text-white text-xl leading-8">
          🎉 Welcome to Dormart – Your ultimate destination for everything you
          love! Inspired by Dory’s adventurous spirit, Dormart makes shopping as
          fun as an ocean adventure. 🐟 With endless options and unbeatable
          deals, we make it easy to “Just Keep Shopping!” 🌊 Dive into a sea of
          exciting products and enjoy a smooth, delightful shopping experience
          like no other. Let’s explore together!
        </p>
      </div> */}
      <h1 className=" absolute bottom-5 right-5   text-white text-8xl font-semibold font-zentry">
        shopping
      </h1>
    </div>
  );
};
export default HeroSection;
