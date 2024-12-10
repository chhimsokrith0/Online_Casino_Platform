"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faBell } from "@fortawesome/free-solid-svg-icons";
import WalletModal from "./WalletModal/WalletModal";
import ProfileModal from "./ProfileModal";
import { useTranslations } from "next-intl";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";

const NavbarWallet = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarWallet");
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
  };

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Detect screen size for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex items-center gap-4">
        {/* Wallet Balance */}
        <div
          className={`flex items-center gap-2 ${isMobile ? "px-2 py-1 text-sm" : "px-4 py-2 text-base"
            } bg-gray-800 rounded-full text-white`}
        >
          <Image
            src={t("currencyicon")}
            alt="THB"
            width={isMobile ? 16 : 20} // Adjusted size for mobile
            height={isMobile ? 16 : 20} // Adjusted size for mobile
          />
          <span className={`${isMobile ? "text-xs whitespace-nowrap" : "text-sm whitespace-nowrap"}`}>{t("currency")}</span>
          <span className={`font-semibold ${isMobile ? "text-xs whitespace-nowrap" : "text-base whitespace-nowrap"}`}>
            {t("balance")}
          </span>
        </div>

        {/* Wallet Button */}
        <button
          className={`flex items-center gap-2 ${isMobile
            ? "px-3 py-1 text-sm whitespace-nowrap"
            : "px-4 py-2 text-base"
            } bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:opacity-90 transition`}
          onClick={toggleWalletModal}
        >
          <FontAwesomeIcon icon={faWallet} size={isMobile ? "sm" : "lg"} />
          <span className={isMobile ? "text-xs" : "text-sm"}>{t("wallet")}</span>
        </button>


        {/* Points (Hidden on Mobile) */}
        {!isMobile && (
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-white hover:bg-gray-700 transition">
            <Image
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733034979/eec3c896-fc98-4ed7-a4b1-c0c4d6e63e42_y0p6uo.webp"
              alt="Points"
              width={20}
              height={20}
            />
            <span className="text-sm">{t("points")}</span>
            <span className="font-semibold">400.00</span>
          </div>
        )}

        {/* User Level */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleProfileModal}
        >
           <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                alt="Bronze Level"
                width={20}
                height={20}
              />

          {!isMobile && (
            <>
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                alt="Bronze Level"
                width={40}
                height={40}
              />
              <div className="flex flex-col">

                <span className="font-semibold text-white">0964143284</span>
                <span className="text-yellow-500 text-sm">{t("bronze")}</span>
              </div>
            </>

          )}
        </div>

        {/* Notification Icon */}
        {!isMobile && (
          <button
            onClick={openModal}
            className="text-white text-xl hover:text-yellow-500 transition"
          >
            <FontAwesomeIcon icon={faBell} />
          </button>
        )}
      </div>

      {/* Wallet Modal */}
      <WalletModal isOpen={isWalletModalOpen} onClose={toggleWalletModal} />

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={toggleProfileModal}
        locale={locale}
      />

      {/* QuestsModal */}
      <QuestsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default NavbarWallet;
