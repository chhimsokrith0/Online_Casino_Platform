"use client";

import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import ExclusiveBenefits from "./ExclusiveBenefits";
import { useTranslations } from "next-intl";

const Member_Level: React.FC = () => {
  const t = useTranslations("MemberLevel");

  return (
    <div className="px-6 py-4 z-50">
      {/* Main Section */}
      <div className="max-w-[1200px] mx-auto bg-blue-600 text-white rounded-lg overflow-hidden relative mb-10">
        {/* Background Image */}
        <div className="relative w-full z-50 h-[100px] block md:hidden">
          <Image
            src="/img-member-level/banner.webp" // Replace with the actual path of the uploaded image
            alt="Member Level Background"
            fill
            className="object-cover" // Ensures the image fully covers the area
          />
        </div>
        <div className="relative w-full h-[300px] hidden md:block">
          <Image
            src="/img-member-level/banner.webp" // Replace with the actual path of the uploaded image
            alt="Member Level Background"
            fill
            className="object-cover" // Ensures the image fully covers the area
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mb-8">
        <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
          {t("mainTitle")}
        </button>
      </div>

      {/* Carousel Section */}
      <Carousel t={t} />

      {/* Exclusive Benefits Section */}
      <ExclusiveBenefits t={t} />
    </div>
  );
};

export default Member_Level;
