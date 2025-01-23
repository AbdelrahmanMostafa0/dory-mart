"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/features/categoriesListSlice";
import NavSideMenu from "./nav-side-menu/NavSideMenu";
import Link from "next/link";
const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [lastScrollY, setLastscrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const productsCat = useSelector(
    (state) => state.ProductsCategories.categories
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!productsCat) {
      dispatch(fetchCategories());
    }
  }, [productsCat, dispatch]);
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
          <Link
            href={"/"}
            className="text-2xl uppercase font-extrabold font-robert-medium text-white"
          >
            DoryMart
          </Link>
        </div>
        <div className="sm:flex hidden">hi</div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-4 text-white">
            <button className="flex items-center gap-2">
              <MdLanguage />
              <span>عربى</span>
            </button>
            <FaHeart className=" text-xl" />
            <FaCartShopping className=" text-xl" />
          </div>
          <button
            className=" flex items-center space-x-0.5"
            onClick={toggleAudio}
          >
            <audio
              onEnded={() => {
                setIsAudioPlaying(false);
                audioElementRef.current.pause();
              }}
              ref={audioElementRef}
              // loop
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
          <NavSideMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
