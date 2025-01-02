"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useSidebar } from "@/components/Sidebar/SidebarContext";

gsap.registerPlugin(ScrollTrigger);

const promotions = [
  {
    title: "REBATE",
    description:
      "Get back a percentage of your bets on casino games (0.3-0.8%) and enjoy Member Level bonuses.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/hRMs6OA_1_flukkh.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "CASHBACK",
    description:
      "💸 Daily cashback bonus up to 7%! 💸 Maximize rewards with Member Level bonuses.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/EYPZsVb_xgxrfm.png",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "REFERRAL",
    description:
      "👥 Earn 3% commission daily! 💰 Withdrawable to your main wallet with rollover requirements.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/hRMs6OA_u8375i.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "REFERRAL",
    description:
      "👥 Earn 3% commission daily! 💰 Withdrawable to your main wallet with rollover requirements.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/yb2oH9M_azudtm.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "REFERRAL",
    description:
      "👥 Earn 3% commission daily! 💰 Withdrawable to your main wallet with rollover requirements.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/mYxNN7q_kcirme.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
];

const PromotionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { isCollapsed } = useSidebar();

  useEffect(() => {
    // Section animation
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cards animation
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-cover bg-center bg-no-repeat py-12 px-4 transition-all ${
        isCollapsed ? "ml-[-17rem]" : ""
      }`}
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645518/bg_yauwy2.png')",
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">PROMOTIONS</h1>
        <div className="flex justify-center mb-8">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition">All Promos</button>
        </div>
        <p className="text-gray-400 text-lg mb-8">
          Discover exciting rewards and bonuses at PlayGame168. Elevate your experience with exclusive promotions designed to maximize your enjoyment and earnings.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden w-[320px] md:w-[360px] transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative"
            >
              <div className="relative w-full h-[200px]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <img
                src={promo.icon}
                alt="icon"
                className="absolute top-4 right-4 w-6 h-6 opacity-50 hover:opacity-100 transition-opacity"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-yellow-400">
                  {promo.title}
                </h2>
                <p className="text-gray-200 mt-2 text-sm">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsSection;
