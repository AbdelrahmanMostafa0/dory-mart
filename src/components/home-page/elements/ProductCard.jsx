"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
        <p>${product.price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
