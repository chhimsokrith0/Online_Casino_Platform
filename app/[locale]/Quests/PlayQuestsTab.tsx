"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PlayQuestsTab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Animate container appearance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    if (imageRef.current) {
      // Animate the image with a slight scale effect
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }

    if (buttonRef.current) {
      // Animate the button with a fade-in and slide-up effect
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.4 }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <img
        ref={imageRef}
        src="https://storage.googleapis.com/playgame168/promotion_images/25473cba-fbcf-43c2-a71b-22bff5b1ae6d.webp"
        alt="Play Quests Promotion"
        className="rounded-lg shadow-md mb-4 w-[90%]"
      />
      <button
        ref={buttonRef}
        className="w-40 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600"
      >
        Join In
      </button>
    </div>
  );
};

export default PlayQuestsTab;
