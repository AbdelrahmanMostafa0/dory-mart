"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [lastScrollY, setLastscrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const { y: currentScrollY } = useWindowScroll();
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastscrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <nav
      ref={navContainerRef}
      className=" fixed    inset-x-2 top-4 z-50 border-none transition-all duration-700 sm:inset-x-6 bg-black/20 rounded-lg"
    >
      <div className="w-full h-16   px-6 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <Image
            src={"/doy-logo.png"}
            width={50}
            height={50}
            className="object-cover"
          /> */}
          <p className="text-2xl uppercase font-extrabold font-general text-white">
            DoryMart
          </p>
        </div>

        <button
          className="ml-10 flex items-center space-x-0.5"
          onClick={toggleAudio}
        >
          <audio
            ref={audioElementRef}
            loop
            className="hidden"
            src="/audio/justKeepSwimmingAr.mp3"
          ></audio>{" "}
          {["", "", "", ""].map((line, i) => {
            return (
              <div
                key={i}
                className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                style={{
                  animationDelay: `${(i + 1) * 0.1}s`,
                }}
              />
            );
          })}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
