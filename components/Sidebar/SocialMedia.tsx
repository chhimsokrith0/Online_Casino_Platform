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
      <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full text-white">
        <FontAwesomeIcon icon={faLine} className="text-green-500 text-lg" />
        <span>Line</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Contact & Social Media */}
      <h3 className="text-gray-400 uppercase text-sm font-bold">
        {t("contactSocialMedia")}
      </h3>
      <div className="flex space-x-3 mt-4">
        {/* Line Icon */}
        <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:opacity-90 transition">
          <FontAwesomeIcon icon={faLine} className="text-white text-lg" />
        </button>
        {/* Telegram Icon */}
        <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-90 transition">
          <FontAwesomeIcon icon={faTelegram} className="text-white text-lg" />
        </button>
        {/* Chat Icon */}
        <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:opacity-90 transition">
          <FontAwesomeIcon icon={faWeixin} className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
