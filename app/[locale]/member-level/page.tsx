"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import ExclusiveBenefits from "./ExclusiveBenefits";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { useSidebar } from "@/components/Sidebar/SidebarContext"; 

const Member_Level: React.FC = () => {
  const t = useTranslations("MemberLevel");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isCollapsed } = useSidebar(); // Access isCollapsed state

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  

  return (
    <div className={`px-6 py-4 z-50 ${isCollapsed ? "ml-[-12rem]" : ""}`} ref={containerRef}>
      {/* Main Section */}
      <div className="max-w-[1200px] mx-auto bg-blue-600 text-white rounded-lg overflow-hidden relative mb-10">
        {/* Background Image */}
        <div className="relative w-full z-50 h-[100px] block md:hidden">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645318/banner_eicvjm.webp"
            alt="Member Level Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[300px] hidden md:block">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645318/banner_eicvjm.webp"
            alt="Member Level Background"
            fill
            className="object-cover"
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
