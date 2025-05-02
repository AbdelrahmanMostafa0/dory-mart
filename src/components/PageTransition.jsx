"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const NUM_BUBBLES = 500;

export default function PageTransition({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = containerRef.current?.children;
    const timeline = gsap.timeline({
      onComplete: () => {
        onComplete();
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      },
    });

    Array.from(bubbles).forEach((bubble) => {
      const delay = Math.random() * 0.4;
      const x = Math.random() * window.innerWidth;
      const size = 20 + Math.random() * 40;

      gsap.set(bubble, {
        x,
        bottom: -50,
        width: size,
        height: size,
        opacity: 0,
      });

      timeline.to(
        bubble,
        {
          y: -window.innerHeight - size,
          opacity: 1,
          duration: 1.5 + Math.random(),
          ease: "power2.out",
        },
        delay
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
    >
      {Array.from({ length: NUM_BUBBLES }).map((_, i) => (
        <img
          key={i}
          src="/bubble.png"
          alt="bubble"
          className="absolute"
          style={{ bottom: 0 }}
        />
      ))}
    </div>
  );
}
