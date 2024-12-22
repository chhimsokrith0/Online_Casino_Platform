"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import Image from "next/image";

const promotions = [
  {
    title: "REBATE",
    description:
      "คืนยอดเดิมพัน เกมคาสิโน ( จ่าย 0.3-0.8% ) โบนัส Member Level (ลำดับขั้น)",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645516/1_eexhut.webp", // Replace with your actual image path
  },
  {
    title: "CASHBACK",
    description:
      "💸 โบนัสคืนยอดเสีย สูงสุด 7% ทุกวัน 💸 โบนัส Member Level (ลำดับขั้น) สูงสุด",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645516/2_jocwtl.webp", // Replace with your actual image path
  },
  {
    title: "REFERRAL",
    description:
      "👥 รับคอมมิชชั่น 3% ทุกวัน 💰 เงินค่าคอมสามารถถอนเข้ากระเป๋าหลัก ทำเทิร์นได้",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645517/3_l7zimp.webp", // Replace with your actual image path
  },
];

const PromotionsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { isCollapsed } = useSidebar();

  useEffect(() => {
    // Animate the section header
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector("h1"),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        sectionRef.current.querySelector("p"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
      );
    }

    // Animate each promotion card with staggered effect
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-cover bg-center bg-no-repeat py-12 px-4 ${isCollapsed ? "ml-[-17rem]" : ""}`}
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645518/bg_yauwy2.png')", // Replace with your actual background image path
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">PROMOTIONS</h1>
        <p className="text-gray-400 text-lg mb-8">
          Experience heightened excitement and rewards through our exclusive
          bonus at PlayGame168, ensuring that every moment is filled with
          additional enjoyment and rewards.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }} // Assign ref for animation
              className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-[320px] md:w-[360px]"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-[160px] object-cover"
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
