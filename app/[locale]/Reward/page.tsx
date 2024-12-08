"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import StepsSection from "./Steps_Section";
import ENJOY_OUR_GAMES from "./ENJOY_OUR_GAMES";
import ENJOY_OUR_PROMOTIONS from "./ENJOY_OUR_PROMOTIONS";
import Benefits_Section from "./Benefits_Section";
import Introducing_Our_Exclusive from "./Introducing_Our_Exclusive";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";

const RewardSection: React.FC = () => {
  const t = useTranslations("RewardSection");

  // Refs for GSAP animations
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const stepsSectionRef = useRef<HTMLDivElement | null>(null);
  const gamesSectionRef = useRef<HTMLDivElement | null>(null);
  const promotionsSectionRef = useRef<HTMLDivElement | null>(null);
  const benefitsSectionRef = useRef<HTMLDivElement | null>(null);
  const exclusiveSectionRef = useRef<HTMLDivElement | null>(null);
  const deluxeExperienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Animate Main Section
    if (mainSectionRef.current) {
      gsap.fromTo(
        mainSectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    // Animate other sections with staggered effect
    gsap.fromTo(
      [
        stepsSectionRef.current,
        gamesSectionRef.current,
        promotionsSectionRef.current,
        benefitsSectionRef.current,
        exclusiveSectionRef.current,
        deluxeExperienceRef.current,
      ],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepsSectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="px-6 py-4">
      {/* Main Section */}
      <div
        className="max-w-[1200px] mx-auto bg-purple-600 text-white rounded-lg overflow-hidden relative mb-10"
        ref={mainSectionRef}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644739/bg-header-sm_z0p3ak.svg" // Replace with the correct path for your background image
            alt="Reward Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="p-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t("mainTitle")}
          </h1>
          <p className="text-lg mb-6">{t("mainSubtitle")}</p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition">
            {t("joinButton")}
          </button>
        </div>
      </div>

      {/* Steps Section */}
      <div ref={stepsSectionRef}>
        <StepsSection t={t} />
      </div>

      {/* ENJOY OUR GAMES */}
      <div ref={gamesSectionRef}>
        <ENJOY_OUR_GAMES t={t} />
      </div>

      {/* ENJOY_OUR_PROMOTIONS */}
      <div ref={promotionsSectionRef}>
        <ENJOY_OUR_PROMOTIONS t={t} />
      </div>

      {/* Benefits Section */}
      <div ref={benefitsSectionRef}>
        <Benefits_Section t={t} />
      </div>

      {/* Introducing Our Exclusive */}
      <div ref={exclusiveSectionRef}>
        <Introducing_Our_Exclusive t={t} />
      </div>

      {/* Deluxe Experience Section */}
      <div className="py-10" ref={deluxeExperienceRef}>
        <div className="max-w-[1200px] mx-auto bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-center text-white rounded-lg p-8 shadow-md">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t("deluxeExperience.title")}
          </h2>
          {/* Button */}
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition">
            {t("deluxeExperience.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardSection;
