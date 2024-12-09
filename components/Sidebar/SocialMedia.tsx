"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine, faTelegram, faWeixin } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  const t = useTranslations("slidebar");

  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Line Section */}
      <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 rounded-lg shadow-md hover:shadow-lg transition">
        <FontAwesomeIcon icon={faLine} className="text-white text-lg" />
        <span className="text-white font-semibold">Line</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Contact & Social Media Section */}
      <h3 className="text-gray-300 uppercase text-sm font-bold tracking-wide">
        {t("contactSocialMedia")}
      </h3>
      <div className="flex space-x-4 mt-4 justify-center">
        {/* Line Icon */}
        <button
          className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-400 shadow-md flex items-center justify-center transform hover:scale-110 transition"
          aria-label="Line"
        >
          <FontAwesomeIcon icon={faLine} className="text-white text-2xl" />
        </button>

        {/* Telegram Icon */}
        <button
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-md flex items-center justify-center transform hover:scale-110 transition"
          aria-label="Telegram"
        >
          <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl" />
        </button>

        {/* Chat Icon */}
        <button
          className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-400 shadow-md flex items-center justify-center transform hover:scale-110 transition"
          aria-label="Chat"
        >
          <FontAwesomeIcon icon={faWeixin} className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
