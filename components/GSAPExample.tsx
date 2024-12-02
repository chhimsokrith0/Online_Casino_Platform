"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GSAPExample = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      // GSAP animation
      gsap.to(boxRef.current, {
        x: 200,
        duration: 1,
        rotation: 360,
        backgroundColor: "#ff0000",
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="w-24 h-24 bg-blue-500 flex items-center justify-center text-white"
    >
      Animate Me
    </div>
  );
};

export default GSAPExample;
