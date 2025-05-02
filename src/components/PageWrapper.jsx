"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const NUM_BUBBLES = 200;
const playSound = () => {
  const audio = new Audio("/audio/bubble-sound.mp3");
  audio.play();
};
export default function PageWrapper({ children }) {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => setIsAnimating(false),
        });
      },
    });

    // Initial fade in
    gsap.set(containerRef.current, { opacity: 0 });
    timeline.to(containerRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // Animate bubbles
    bubblesRef.current.forEach((bubble) => {
      const delay = Math.random() * 1.5;
      const x = Math.random() * window.innerWidth;
      const size = 20 + Math.random() * 200;

      gsap.set(bubble, {
        display: "block",
        x,
        bottom: -50,
        width: size,
        height: size,
        opacity: 0,
      });

      gsap.to(bubble, {
        y: -window.innerHeight - size,
        opacity: 1,
        duration: 2 + Math.random() * 1.5,
        ease: "power2.out",
        delay,
      });
    });
    playSound();
  }, []);

  return (
    <>
      {isAnimating && (
        <div
          ref={containerRef}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #007BFF, #00BFFF, #87CEFA)",
            backgroundSize: "400% 400%",
            animation: "waterFlow 8s ease infinite",
          }}
        >
          <div className="w-full h-full relative">
            {Array.from({ length: NUM_BUBBLES }).map((_, i) => (
              <Image
                width={100}
                height={100}
                key={i}
                src="/bubble.png"
                alt="bubble"
                className="absolute hidden"
                style={{ bottom: 0 }}
                ref={(el) => (bubblesRef.current[i] = el)}
              />
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          opacity: isAnimating ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
