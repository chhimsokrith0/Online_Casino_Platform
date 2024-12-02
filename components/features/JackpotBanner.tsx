"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const JackpotBanner: React.FC = () => {
  const [jackpotAmount, setJackpotAmount] = useState(0);
  const jackpotRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  // Function to generate a random Jackpot amount
  const generateRandomJackpot = () => {
    const min = 10;
    const max = 50;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    // Initialize Jackpot Amount
    setJackpotAmount(generateRandomJackpot());

    // Update Jackpot Amount Every 50 Seconds
    const interval = setInterval(() => {
      setJackpotAmount(generateRandomJackpot());
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // GSAP Animations for the Jackpot amount
    if (jackpotRef.current) {
      gsap.fromTo(
        jackpotRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      );
    }

    // GSAP Animations for the background
    if (backgroundRef.current) {
      gsap.fromTo(
        backgroundRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [jackpotAmount]);

  return (
    <section className="max-w-[1200px] mx-auto">
      <div
        className="flex flex-col w-full items-center justify-center text-white relative cursor-pointer"
        ref={backgroundRef} // Background animation
      >
        {/* Mobile Background Image */}
        <img
          className="block md:hidden w-full h-full object-cover"
          src="https://storage.googleapis.com/cdn.i-gamingplatform.com/global_config/home_jackpot_background_mobile.png"
          alt="Jackpot Mobile Background"
        />

        {/* Desktop Background Image */}
        <img
          className="hidden md:block w-full h-full object-cover"
          src="https://storage.googleapis.com/cdn.i-gamingplatform.com/global_config/home_jackpot_background_desktop.png"
          alt="Jackpot Desktop Background"
        />

        {/* Jackpot Amount */}
        <div
          ref={jackpotRef} // Jackpot animation
          className="text-[8vw] md:text-[3vw] font-bold absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[67.5%] md:top-[65%]"
          style={{ textShadow: "2px 1px 7px white" }}
        >
          {jackpotAmount} M
        </div>
      </div>
    </section>
  );
};

export default JackpotBanner;
