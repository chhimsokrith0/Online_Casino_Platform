"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import LanguageModal from "./LanguageModal"; // Import the modal component
import { useTranslations } from "next-intl";
import Image from "next/image";

// Language data is defined here to make it accessible to both components
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
];

const SettingsGeneral = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    name: "English",
    flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/en_kthtlc.png",
  });

  const t = useTranslations("settings");

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const selectLanguage = (code: string) => {
    const selected = languages.find((lang) => lang.code === code);
    if (selected) {
      setSelectedLanguage(selected);
    }
    setModalOpen(false); // Close the modal after selection
  };

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
              <img
                src={selectedLanguage.flag}
                alt={selectedLanguage.name}
                className="w-6 h-4 rounded-sm"
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
        onSelectLanguage={selectLanguage}
        languages={languages} // Pass the languages array as a prop
      />
    </>
  );
};

export default SettingsGeneral;
