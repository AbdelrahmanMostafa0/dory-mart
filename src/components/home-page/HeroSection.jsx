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
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="relative h-lvh  overflow-x-hidden">
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
            <h1 className="text-white text-9xl font-semibold font-zentry lg:text-[200px] hero-title">
              Just keep
            </h1>
          </div>
        </div>
        <h1 className=" absolute bottom-5 right-5  z-10  text-white text-8xl font-semibold font-zentry lg:text-[150px] hero-title">
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
