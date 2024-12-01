"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faBell } from "@fortawesome/free-solid-svg-icons";
import WalletModal from "./WalletModal";
import ProfileModal from "./ProfileModal"; // Import the Profile modal
import { useTranslations } from "next-intl";

const NavbarWallet: React.FC = () => {
  const t = useTranslations("NavbarWallet");
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        {/* Wallet Balance */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-white">
          <Image
            src={t("currencyicon")} // Replace with your currency icon
            alt="THB"
            width={20}
            height={20}
          />
          <span className="text-sm">{t("currency")}</span>
          <span className="font-semibold">0.00</span>
        </div>

        {/* Wallet Button */}
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold px-4 py-2 rounded-full hover:opacity-90 transition"
          onClick={toggleWalletModal}
        >
          <FontAwesomeIcon icon={faWallet} />
          <span>Wallet</span>
        </button>

        {/* Points */}
        <div
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-white hover:bg-gray-700 transition"
          onClick={toggleProfileModal}
        >
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733034979/eec3c896-fc98-4ed7-a4b1-c0c4d6e63e42_y0p6uo.webp"
            alt="Points"
            width={20}
            height={20}
          />
          <span className="text-sm">Points</span>
          <span className="font-semibold">400.00</span>
        </div>

        {/* User Level */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleProfileModal}
        >
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
            alt="Bronze Level"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-white">0964143284</span>
            <span className="text-yellow-500 text-sm">Bronze</span>
          </div>
        </div>

        {/* Notification Icon */}
        <button className="text-white text-xl hover:text-yellow-500 transition">
          <FontAwesomeIcon icon={faBell} />
        </button>
      </div>

      {/* Wallet Modal */}
      <WalletModal isOpen={isWalletModalOpen} onClose={toggleWalletModal} />

      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={toggleProfileModal} />
    </>
  );
};

export default NavbarWallet;
