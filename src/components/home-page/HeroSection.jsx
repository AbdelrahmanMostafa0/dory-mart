"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  useGSAP(() => {
    gsap.set("#hero-img", {
      clipPath: "polygon(20% 0%, 80% 0%,90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#hero-img", {
      clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#hero-img",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div className="relative h-dvh  overflow-x-hidden">
      <div
        id="hero-img"
        className="relative z-10 h-dvh  rounded-lg overflow-hidden"
      >
        <div className="bg-black/30 absolute  w-full h-full"></div>
        <Image
          src={"/wallpaperflare.com_wallpaper (2).jpg"}
          width={1920}
          height={1080}
          className="w-full   h-dvh object-cover   "
        />

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="text-white text-9xl font-semibold font-zentry lg:text-[200px]">
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
        <h1 className=" absolute bottom-5 right-5  z-10  text-white text-8xl font-semibold font-zentry lg:text-[150px]">
          shopping
        </h1>
      </div>
      <h1 className=" absolute bottom-5 right-5   text-black text-8xl font-semibold font-zentry lg:text-[150px]">
        shopping
      </h1>
    </div>
  );
};
export default HeroSection;
