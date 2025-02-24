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
import { useRouter } from "next/navigation";
import Image from "next/image";
import Searchbar from "./Searchbar";
import { Volume, Volume2 } from "lucide-react";
import Cart from "./Cart";
import {
  updateCart,
  updatePrice,
  updateQuantity,
} from "@/store/features/cartSlice";
import { updateSaved } from "@/store/features/savedItemsSlice";
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
  const router = useRouter();
  const isHome = router.pathname === "/";
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedForLater = JSON.parse(localStorage.getItem("saved")) || [];
    dispatch(updateCart(storedCart));
    dispatch(
      updateQuantity(storedCart.reduce((acc, item) => acc + item.quantity, 0))
    );
    dispatch(
      updatePrice(
        storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      )
    );
    dispatch(updateSaved(savedForLater));
  }, []);
  useEffect(() => {
    if (isHome) {
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
    }
  }, [currentScrollY, lastScrollY, router]);
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <nav
      style={{
        background: "rgba(1, 89, 158, 0.55)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(11.6px)",
        WebkitBackdropFilter: "blur(11.6px)", // Note: camelCase for `-webkit-` prefix
        border: "1px solid rgba(1, 89, 158, 0.09)",
      }}
      ref={navContainerRef}
      className=" fixed    inset-x-2 top-4 z-50  transition-all duration-700 sm:inset-x-6  rounded-lg"
    >
      <div className="w-full h-16   px-6 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className="text-2xl flex items-center gap-1 tracking-widest capitalize lete font-lilita-one text-white -ml-3 sm:-ml-0"
          >
            <Image src="/dory-logo.png" width={40} height={40} alt="logo" />
            Dorymart
          </Link>
        </div>
        <Searchbar />
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-4 text-white">
            {/* <button className="flex items-center gap-2">
              <MdLanguage />
              <span>عربى</span>
            </button> */}
            <FaHeart className=" text-xl" />
            <Cart />
          </div>
          <button
            className=" flex items-center space-x-0.5 text-white"
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
            {/* {["", "", "", ""].map((line, i) => {
              return (
                <div
                  key={i}
                  className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                  style={{
                    animationDelay: `${(i + 1) * 0.1}s`,
                  }}
                />
              );
            })} */}
            {isAudioPlaying ? <Volume2 /> : <Volume />}
          </button>
          <NavSideMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
