"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface GameCardProps {
  title: string;
  provider: string;
  image: { src: string };
}

const GameCard: React.FC<GameCardProps> = ({ title, provider, image }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      // Initial animation for when the component is mounted
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, []);

  const handleHover = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={cardRef}
      className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        src={image.src}
        alt={title}
        className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="px-2 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full hover:bg-yellow-500 transition">
          Play Now
        </button>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium text-white truncate">{title}</h3>
        <p className="text-xs text-gray-400 truncate">{provider}</p>
      </div>
    </div>
  );
};

export default GameCard;
