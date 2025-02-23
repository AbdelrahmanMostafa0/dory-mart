"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const Gsap = () => {
  const [endX, setEndX] = useState(0);
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(".box", {
        x: endX,
        duration: 1,
      });
    },
    { dependencies: [endX], scope: container }
  );
  // console.log(Math.round(Math.random() * 100));
  const randomX =
    Math.round(Math.random() * 500) *
    (Math.round(Math.random() * 10) > 5 ? -1 : 1);
  return (
    <div ref={container}>
      <button onClick={() => setEndX(randomX)}>Move</button>
      <div className="box">Hello</div>
    </div>
  );
};
export default Gsap;
