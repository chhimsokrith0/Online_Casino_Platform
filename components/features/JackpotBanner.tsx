"use client";

import React, { useEffect, useState } from "react";

const JackpotBanner: React.FC = () => {

  const [jackpotAmount, setJackpotAmount] = useState(0);


  // Function to generater a ramdom Jackpot amount
  const generateRamdomJackpot = () => {
    const min = 10;
    const mix = 50;
    return Math.floor(Math.random() * (mix - min + 1) + min);
  }

  useEffect(() => {
    setJackpotAmount(generateRamdomJackpot());

    const interval = setInterval(() => {
      setJackpotAmount(generateRamdomJackpot());
    }, 50000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="flex flex-col w-full items-center justify-center text-white relative cursor-pointer">
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
