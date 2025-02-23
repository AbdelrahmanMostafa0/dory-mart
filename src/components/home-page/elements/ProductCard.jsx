"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import useCart from "@/hooks/useCart";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ product }) => {
  const cardRef = useRef(null);
  const { addToCart } = useCart();
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

  return (
    <Card ref={cardRef} className="prod-card h-fit">
      <CardHeader>
        <Link href={`/product-details/${product.id}`}>
          <Image
            width={1000}
            height={1000}
            alt={product.title}
            src={product.thumbnail}
            className="w-full h-[300px] bg-gray-100 obje mb-2 rounded-lg object-cover"
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
            style={{
              background: "rgba(1, 89, 158, 0.55)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(11.6px)",
              WebkitBackdropFilter: "blur(11.6px)", // Note: camelCase for `-webkit-` prefix
              border: "1px solid rgba(1, 89, 158, 0.09)",
            }}
            onClick={() => addToCart(product)}
            className="relative flex items-center gap-2 text-sm border rounded-full px-4 text-white py-1 "
          >
            {/* <ShoppingCart width={20} /> */}
            <span>Add to cart</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
