"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSession } from "next-auth/react";

interface GameCardProps {
  title: string;
  provider: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, provider, image }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (cardRef.current) {
      // Initial animation for the card when the component is mounted
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
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1.2, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        { scale: 0.9, duration: 0.1, yoyo: true, ease: "power2.out" }
      );
    }
    console.log("Play button clicked!");
  };

  return (
    <div
      ref={cardRef}
      className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* Game Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {session && (
          <div
            ref={buttonRef}
            className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition cursor-pointer"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-10 h-10 text-black"
            >
              <circle cx="32" cy="32" r="30" fill="#FFCC00" /> {/* Yellow background */}
              <path
                fill="#000"
                d="M26 20l20 12-20 12V20z"
              /> {/* Play icon */}
            </svg>
          </div>
        )}
      </div>

      {/* Game Details */}
      <div className="p-2">
        <h3 className="text-sm font-medium text-white truncate">{title}</h3>
        <p className="text-xs text-gray-400 truncate">{provider}</p>
      </div>
    </div>
  );
};

export default GameCard;
