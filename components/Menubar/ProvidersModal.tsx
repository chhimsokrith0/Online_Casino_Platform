"use client";

import React, { useEffect, useRef } from "react";
import ProvidersIcons from "./ProvidersIcons";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

const ProvidersModal = ({ setIsModalOpen }: { setIsModalOpen: Function }) => {
  const t = useTranslations("providersModal");
  const providers = ProvidersIcons; // Import the array from ProvidersIcons.ts
  const modalRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Disable scrolling on the rest of the page when modal is open
    document.body.style.overflow = "hidden";

    // Animate modal entrance
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }

    // Animate grid items appearance
    gsap.fromTo(
      gridItemsRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
    );

    return () => {
      // Enable scrolling again when modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    // Animate modal close
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setIsModalOpen(false),
      });
    } else {
      setIsModalOpen(false);
    }
  };

  const handleHover = (index: number) => {
    const item = gridItemsRef.current[index];
    if (item) {
      gsap.to(item, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLeave = (index: number) => {
    const item = gridItemsRef.current[index];
    if (item) {
      gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div
        ref={modalRef}
        className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[90%] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">{t("title")}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white"
            aria-label={t("closeButton")}
          >
            ✕
          </button>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {providers.map((provider, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) gridItemsRef.current[index] = el;
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
              className="flex items-center space-x-2 bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition"
            >
              <img
                src={provider.icon.src}
                alt={provider.name}
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-xs sm:text-sm md:text-base truncate">
                {t(`providers.${provider.name}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvidersModal;
