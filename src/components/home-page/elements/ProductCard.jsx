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
          start: "top 85%",
          end: "top 70%",
          scrub: false,
          toggleActions: "play none none play",
        },
      }
    );
  }, []);

  return (
    <Card ref={cardRef} className="prod-card h-fit">
      <CardHeader>
        <Image
          width={1000}
          height={1000}
          alt={product.title}
          src={product.thumbnail}
          className="w-full h-[300px] mb-2 rounded-lg object-cover sm:object-fill"
        />
        <CardTitle className="mt-2 line-clamp-1">{product.title}</CardTitle>
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
