"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import useCart from "@/hooks/useCart";
import useFav from "@/hooks/useFav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
// import { toast } from "sonner";
toast;
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ product }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFav();
  const isFavorited = isFavorite(product?.id);
  const cardRef = useRef(null);
  const { addToCart, loading } = useCart();

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 100%",
          end: "top 100%",
          scrub: false,
          toggleActions: "play none none play",
        },
      }
    );
  }, []);
  const handleFavoriteToggle = () => {
    if (isFavorited) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };
  return (
    <Card ref={cardRef} className="prod-card h-fit relative">
      <button
        onClick={handleFavoriteToggle}
        className="absolute md:top-5 md:right-5 top-8 right-8 z-10 text-3xl"
      >
        {isFavorited ? (
          <AiFillHeart className=" transition-all duration-200 text-red-500" />
        ) : (
          <AiOutlineHeart className=" transition-all text-gray-500 hover:text-red-500 duration-200" />
        )}
      </button>
      <CardHeader>
        <Link href={`/product-details/${product.id}`}>
          <Image
            width={1000}
            height={1000}
            alt={product.title}
            src={product.thumbnail}
            className="w-full h-[300px] md:bg-transparent bg-gray-100 mb-2 rounded-lg object-cover"
          />
        </Link>
        <CardTitle className="mt-2 line-clamp-1">
          <Link title={product?.title} href={`/product-details/${product.id}`}>
            {product.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          {" "}
          <p>${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="group relative flex items-center justify-center gap-2 px-5 py-2 min-w-32 rounded-full border text-[#2a9df4] border-[#2a9df4]  overflow-hidden  text-sm font-medium transition-all duration-300  active:scale-95"
          >
            {loading ? (
              <FaSpinner className="animate-spin group-hover:text-white z-10 h-5" />
            ) : (
              <div className="flex items-center gap-2 group-hover:text-white z-10 transition-all duration-300">
                <ShoppingCart
                  className="transition-transform duration-300 group-hover:scale-110"
                  size={18}
                />
                <span>Add</span>
              </div>
            )}
            <div className="w-44 h-44 bg-[#2a9df4] absolute inset-0 top-11 rounded-full group-hover:-top-10 -left-8 duration-300"></div>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
