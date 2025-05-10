"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { FaHeart } from "react-icons/fa6";
import { Volume, Volume2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/features/categoriesListSlice";
import {
  updateCart,
  updatePrice,
  updateQuantity,
} from "@/store/features/cartSlice";
import { updateSaved } from "@/store/features/savedItemsSlice";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import NavSideMenu from "./nav-side-menu/NavSideMenu";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import { updateFavorite } from "@/store/favoritesSlice";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const router = useRouter();
  const isHome = router.pathname === "/";

  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.ProductsCategories.categories
  );
  const fav = useSelector((state) => state.favorites.favorites);

  // Fetch categories if not already loaded
  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [categories, dispatch]);

  // Load cart/saved state from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedItems = JSON.parse(localStorage.getItem("saved")) || [];
    const fav = JSON.parse(localStorage.getItem("favorites")) || [];

    dispatch(updateCart(storedCart));
    dispatch(updateFavorite(fav));
    dispatch(
      updateQuantity(storedCart.reduce((acc, item) => acc + item.quantity, 0))
    );
    dispatch(
      updatePrice(
        storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      )
    );
    dispatch(updateSaved(savedItems));
  }, [dispatch]);

  // Toggle audio play/pause
  const toggleAudio = () => setIsAudioPlaying((prev) => !prev);

  useEffect(() => {
    if (!audioElementRef.current) return;
    isAudioPlaying
      ? audioElementRef.current.play()
      : audioElementRef.current.pause();
  }, [isAudioPlaying]);

  // Show/hide navbar on scroll
  useEffect(() => {
    if (!isHome) return;

    const scrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (scrollingDown) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, isHome]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  return (
    <nav
      ref={navContainerRef}
      className="fixed inset-x-2 top-4 z-50 rounded-lg transition-all duration-700 sm:inset-x-6"
      style={{
        background: "rgba(1, 89, 158, 0.55)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(11.6px)",
        WebkitBackdropFilter: "blur(11.6px)",
        border: "1px solid rgba(1, 89, 158, 0.09)",
      }}
    >
      <div className="w-full h-16 px-6 mx-auto flex items-center justify-between">
        {/* Brand logo and name */}
        <Link
          href="/"
          className="text-2xl flex items-center gap-2 font-lilita-one text-white tracking-widest"
        >
          <Image
            src="/dory-logo.png"
            width={40}
            height={40}
            alt="Dorymart logo"
          />
          Dorymart
        </Link>

        {/* Searchbar */}
        <Searchbar />

        {/* Right side icons */}
        <div className="flex items-center gap-4 text-white">
          <div className="hidden sm:flex gap-4">
            <Link href={"/favorites"}>
              <FaHeart
                className="text-xl hover:scale-110 transition-transform"
                title="Saved Items"
              />
            </Link>
            <Cart />
          </div>

          {/* Audio toggle */}
          <button
            onClick={toggleAudio}
            className="flex items-center hover:scale-110 transition-transform"
            title="Just Keep Swimming 🎵"
          >
            <audio
              ref={audioElementRef}
              onEnded={() => setIsAudioPlaying(false)}
              className="hidden"
              src="/audio/justKeepSwimmingAr.mp3"
            />
            {isAudioPlaying ? <Volume2 /> : <Volume />}
          </button>

          {/* Mobile menu */}
          <NavSideMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
