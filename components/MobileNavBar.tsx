"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGift, faDice, faGem } from "@fortawesome/free-solid-svg-icons";
import { FaUserPlus, FaWallet } from "react-icons/fa";
import Sidebar from "./Sidebar/Sidebar";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SignupModal from "./Navbar/SignUpModal";
import WalletModal from "./Navbar/WalletModal/WalletModal";
import { useSession } from "next-auth/react";
import clsx from "clsx";

const MobileNavBar = ({ locale }: { locale: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const t = useTranslations("mobieleNavbar");
  const { data: sess } = useSession();

  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("menu"); // Default active button

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleSignupClick = () => setSignupModalOpen(true);
  const handleWalletClick = () => setWalletModalOpen(true);
  const closeSignupModal = () => setSignupModalOpen(false);
  const closeWalletModal = () => setWalletModalOpen(false);

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <Sidebar locale={locale} />
          <div className="flex-1 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
        </div>
      )}

      {/* Mobile Navigation Bar */}
      <nav className="fixed bottom-0 w-full bg-[#020617] flex justify-center items-center z-[99] shadow-md">
        <div className="w-full h-[75px] relative rounded-2xl bg-[#020617] flex justify-center items-center">
          <div className="bottom-menu-nav w-full px-3 flex justify-around items-center">
            {/* Menu */}
            <button
              className={clsx(
                "flex flex-col items-center transition-colors",
                activeButton === "menu" ? "text-yellow-500" : "text-gray-400 hover:text-white"
              )}
              onClick={() => {
                toggleSidebar();
                setActiveButton("menu");
              }}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
              <span className="text-[10px] font-semibold">{ t("menu") }</span>
            </button>

            {/* Slots */}
            <Link
              href={`/${locale}/Games/slots`}
              className={clsx(
                "flex flex-col items-center transition-colors",
                activeButton === "slots" ? "text-yellow-500" : "text-gray-400 hover:text-white"
              )}
              onClick={() => setActiveButton("slots")}
            >
              <FontAwesomeIcon icon={faGem} className="text-2xl" />
              <span className="text-[10px] font-semibold">{ t("slots") }</span>
            </Link>

            {/* Wallet / Sign Up */}
            <div className="relative flex flex-col items-center cursor-pointer">
              <div
                onClick={() => {
                  sess?.user ? handleWalletClick() : handleSignupClick();
                  setActiveButton("wallet");
                }}
                className="absolute top-0 -translate-y-[50%] bg-fourth rounded-full w-[77px] h-[77px] flex items-center justify-center"
              >
                <div
                  className="w-[55px] h-[55px] flex items-center justify-center bg-gradient-to-tl from-yellow-400 to-yellow-500 rounded-full shadow-md"
                >
                  {sess?.user ? (
                    <FaWallet className="text-white text-2xl" />
                  ) : (
                    <FaUserPlus className="text-white text-2xl" />
                  )}
                </div>
              </div>
              <span
                className={clsx(
                  "text-[10px] font-semibold mt-12",
                  activeButton === "wallet" ? "text-yellow-500" : "text-white"
                )}
              >
                {sess?.user ? t("Wallet") : t("signIn")}
              </span>
            </div>

            {/* Live Casino */}
            <Link
              href={`/${locale}/Games/LiveCasino`}
              className={clsx(
                "flex flex-col items-center transition-colors",
                activeButton === "liveCasino" ? "text-yellow-500" : "text-gray-400 hover:text-white"
              )}
              onClick={() => setActiveButton("liveCasino")}
            >
              <FontAwesomeIcon icon={faDice} className="text-2xl" />
              <span className="text-[10px] font-semibold"> { t("liveCasino") } </span>
            </Link>

            {/* Promo */}
            <Link
              href={`/${locale}/promo`}
              className={clsx(
                "flex flex-col items-center transition-colors",
                activeButton === "promo" ? "text-yellow-500" : "text-gray-400 hover:text-white"
              )}
              onClick={() => setActiveButton("promo")}
            >
              <FontAwesomeIcon icon={faGift} className="text-2xl" />
              <span className="text-[10px] font-semibold"> { t("promo") }</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {isSignupModalOpen && (
        <SignupModal activeTab="signIn" onClose={closeSignupModal} zIndex={10000} />
      )}
      {isWalletModalOpen && <WalletModal isOpen={isWalletModalOpen} onClose={closeWalletModal} />}
    </>
  );
};

export default MobileNavBar;
