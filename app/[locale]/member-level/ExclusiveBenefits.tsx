"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const ExclusiveBenefits = ({ t }: { t: any }) => {
  const benefitsRef = useRef<HTMLDivElement | null>(null);

  const benefits = [
    {
      title: t("exclusiveBenefits.benefits.levelsRewards.title"),
      description: t("exclusiveBenefits.benefits.levelsRewards.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645320/trophy-star_pm2btv.svg",
    },
    {
      title: t("exclusiveBenefits.benefits.exclusivePromotions.title"),
      description: t("exclusiveBenefits.benefits.exclusivePromotions.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645318/bonus_n0npy8.svg",
    },
    {
      title: t("exclusiveBenefits.benefits.higherCashback.title"),
      description: t("exclusiveBenefits.benefits.higherCashback.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645318/nofee_bq6pzw.svg",
    },
    {
      title: t("exclusiveBenefits.benefits.royaltyClub.title"),
      description: t("exclusiveBenefits.benefits.royaltyClub.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645321/vip_t97kk7.svg",
    },
  ];

  useEffect(() => {
    if (benefitsRef.current) {
      gsap.fromTo(
        benefitsRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="py-10" ref={benefitsRef}>
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">{t("exclusiveBenefits.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
            >
              <img src={benefit.icon} alt={benefit.title} className="w-25 h-25 mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;
