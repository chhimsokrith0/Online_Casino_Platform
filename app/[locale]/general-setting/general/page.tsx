"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import LanguageModal from "./LanguageModal";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Language data is shared between components
const languages = [
  { code: "en", name: "English", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/en_kthtlc.png" },
  { code: "zh", name: "Chinese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/chinese_dxrdpn.png" },
  { code: "kh", name: "Khmer", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/kh_ed3tmn.jpg" },
  { code: "th", name: "Thai", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/th_byfrmv.png" },
  { code: "id", name: "Indonesian", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/indo_nh6l9k.png" },
  { code: "ms", name: "Malay", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/malay_ov7mho.svg" },
  { code: "sg", name: "Singapore", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/singapore_hk6sy3.png" },
  { code: "vi", name: "Vietnamese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/vietnamese_j0rykn.jpg" },
  { code: "ph", name: "Filipino", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/philippines_uifhos.png" },
  { code: "mm", name: "Myanmar", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/myammar_tf4xwq.webp" },
  { code: "lo", name: "Lao", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/lao_r5l6yz.png" },
  { code: "hi", name: "Hindi", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hindi_fw5lqd.webp" },
  { code: "ur", name: "Urdu", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/urdu_l7ptk8.jpg" },
  { code: "bn", name: "Bengali", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/bengali_bzgmaw.png" },
  { code: "tw", name: "Taiwanese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/Taiwan_iv5pjf.webp" },
  { code: "hk", name: "Hong Kong", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hongkong_kycia1.png" },
  { code: "ko", name: "Korean", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/korea_s08db8.webp" },
  { code: "pt", name: "Portuguese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/portugal_lep9my.png" },
  { code: "au", name: "Australia", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/australia_qh975e.webp" },
  { code: "ca", name: "Canada", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/canada_rrkhgu.webp" },
];

const SettingsGeneral = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
  const pathname = usePathname(); // Get the current pathname
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to English
  const t = useTranslations("settings");

  useEffect(() => {
    if (pathname) {
      // Extract the current locale from the URL
      const currentLocale = pathname.split("/")[1];
      const currentLanguage = languages.find((lang) => lang.code === currentLocale);
      if (currentLanguage) {
        setSelectedLanguage(currentLanguage);
      }
    }
  }, [pathname]); // Run whenever the URL changes

  useEffect(() => {
    if (containerRef.current) {
      // GSAP animation for container entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleLanguageSelect = (code: string) => {
    const selected = languages.find((lang) => lang.code === code);
    if (selected) {
      setSelectedLanguage(selected);
    }
    setModalOpen(false); // Close the modal after selection
  };

  return (
    <>
      <div
        ref={containerRef}
        className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
      >
        {/* General Section Header */}
        <div>
          <h2 className="text-lg font-bold mb-4">{t("title")}</h2>
          <hr className="border-gray-700" />
        </div>

        {/* Language Setting */}
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-2">{t("general.language")}</p>
          <button
            className="flex items-center max-w-md justify-between w-full bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
            onClick={toggleModal}
          >
            <div className="flex items-center gap-3">
              <Image
                src={selectedLanguage.flag}
                alt={selectedLanguage.name}
                width={24}
                height={24}
                className="rounded-sm"
              />
              <span className="text-white text-sm">{selectedLanguage.name}</span>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <LanguageModal
        isOpen={isModalOpen}
        selectedLanguage={selectedLanguage.code}
        onClose={toggleModal}
        onSelectLanguage={handleLanguageSelect}
        languages={languages}
      />
    </>
  );
};

export default SettingsGeneral;
