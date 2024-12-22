"use client";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCrown,
  faGift,
  faHistory,
  faChartBar,
  faDollarSign,
  faArrowCircleUp,
  faBoxOpen,
  faSignOutAlt,
  faCog,
  faStar,
  faBolt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import gsap from "gsap";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, locale }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const actionRefs = useRef<HTMLButtonElement[]>([]);
  const logoutRef = useRef<HTMLButtonElement | null>(null);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const t = useTranslations("ProfileModal");
  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false)





  const handleButtonClickModal = (label: string) => {
    if (label === t("menu.quests")) {
      setIsQuestsModalOpen(true); // Open the modal when "Quests" is clicked
    }
  };

  const handleCloseQuestsModal = () => {
    setIsQuestsModalOpen(false); // Close the modal
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling

      // GSAP animations
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" }
      );

      gsap.fromTo(
        actionRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );

      gsap.fromTo(
        logoutRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.8, ease: "power4.out" }
      );
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); // Close the modal if clicked outside
      }
    };

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleButtonClick = () => {
    onClose(); // Hide modal when a button is clicked
  };

  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/", // Redirect to the home page or login page
    });
    onClose();
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false); // Close the logout confirmation modal
  };

  return (
    <>
      <div
        ref={modalRef}
        className="hidden sm:block absolute top-20 w-90 sm:w-[500px] right-36 bg-gray-900 rounded-lg p-1 text-white shadow-lg z-50 overflow-y-auto animate-fade-in"
      >
        <div className="p-2 text-white rounded-lg w-full">
          {/* Header */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              {/* User Information */}
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                  alt="User Level"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold"> {t("header.username")} </h2>
                  <p className="text-yellow-400 text-sm">{t("header.points")}</p>
                </div>
              </div>
              {/* Settings Button */}
              <Link
                href={`/${locale}/general-setting`}
                className="text-gray-400 hover:text-yellow-500 flex items-center gap-2"
                onClick={handleButtonClick}
              >
                <span>{t("header.generalSetting")}</span>
                <FontAwesomeIcon icon={faCog} />
              </Link>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">{t("header.progress.label")}</p>
              <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
                <div className="bg-yellow-500 h-full" style={{ width: "0%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{t("header.progress.bronze")}</span>
                <span>{t("header.progress.silver")}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: faUser, label: t("menu.myProfile"), link: `/${locale}/account-information`, active: false },
                { icon: faCrown, label: t("menu.levels"), link: `/${locale}/member-level`, active: false },
                { icon: faGift, label: t("menu.reward"), link: `/${locale}/Reward/random-card`, active: false },
                { icon: faHistory, label: t("menu.history"), link: `/${locale}/account-information/transactions`, active: false },
                { icon: faArrowCircleUp, label: t("menu.rebate"), link: `/${locale}/account-information/rebate`, active: false },
                { icon: faDollarSign, label: t("menu.cashback"), link: `/${locale}/account-information/cashback`, active: false },
                { icon: faBoxOpen, label: t("menu.referral"), link: `/${locale}/account-information/affiliate`, active: false },
                { icon: faChartBar, label: t("menu.totalBet"), link: `/${locale}/account-information/total-bet`, active: false },
                { icon: faStar, label: t("menu.pointHistory"), link: `/${locale}/account-information/current-point`, active: false },
                { icon: faBolt, label: t("menu.quests"), link: "#", active: false }, // No link for Quests, handle with modal
              ].map((action, index) => (
                <Link
                  href={action.link}
                  key={index}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg transition w-full ${action.active ? "text-white" : "hover:bg-gradient-to-r from-yellow-500 to-yellow-600"
                    }`}
                  onClick={() => handleButtonClickModal(action.label)}
                >
                  <FontAwesomeIcon
                    icon={action.icon}
                    className={`text-lg ${action.active ? "text-white" : "text-gray-300"}`}
                  />
                  <span className="whitespace-nowrap">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <button
            ref={logoutRef}
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-start gap-2 mt-4 bg-gray-800 w-1/3 p-3 rounded-lg w-full hover:bg-red-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg text-gray-400" />
            <span className="text-sm text-gray-400">{t("logout")}</span>
          </button>
        </div>
      </div>

      {isQuestsModalOpen && (
        <QuestsModal isOpen={isQuestsModalOpen} onClose={handleCloseQuestsModal} />
      )}



      {/* Mobile Modal */}
      <div
        ref={modalRef}
        className="block sm:hidden h-screen fixed top-[130px] sm:top-20 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md bg-gray-900 rounded-lg p-1 text-white shadow-lg z-50 overflow-y-auto"
      >
        <div className="p-1 text-white rounded-lg w-full">
          {/* Header */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              {/* User Information */}
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                  alt="User Level"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold"> {t("header.username")} </h2>
                  <p className="text-yellow-400 text-sm">{t("header.points")}</p>
                </div>
              </div>
              {/* Settings Button */}
              <button
                className="text-gray-400 hover:text-yellow-500 flex items-center gap-2"
                onClick={onClose}
              >
                <span>Settings</span>
                <FontAwesomeIcon icon={faCog} />
              </button>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">{t("header.progress.label")}</p>
              <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
                <div className="bg-yellow-500 h-full" style={{ width: "0%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{t("header.progress.bronze")}</span>
                <span>{t("header.progress.silver")}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: faUser, label: t("menu.myProfile"), link: `/${locale}/account-information`, active: false },
                { icon: faCrown, label: t("menu.levels"), link: `/${locale}/member-level`, active: false },
                { icon: faGift, label: t("menu.reward"), link: `/${locale}/Reward/random-card`, active: false },
                { icon: faHistory, label: t("menu.history"), link: `/${locale}/account-information/transactions`, active: false },
                { icon: faArrowCircleUp, label: t("menu.rebate"), link: `/${locale}/account-information/rebate`, active: false },
                { icon: faDollarSign, label: t("menu.cashback"), link: `/${locale}/account-information/cashback`, active: false },
                { icon: faBoxOpen, label: t("menu.referral"), link: `/${locale}/account-information/affiliate`, active: false },
                { icon: faChartBar, label: t("menu.totalBet"), link: `/${locale}/account-information/total-bet`, active: false },
                { icon: faStar, label: t("menu.pointHistory"), link: `/${locale}/account-information/current-point`, active: false },
                { icon: faBolt, label: t("menu.quests"), link: "#", active: false },
              ].map((action, index) => (
                <Link
                  href={action.link}
                  key={index}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg transition w-full ${action.active ? "text-white" : "hover:bg-gradient-to-r from-yellow-500 to-yellow-600"
                    }`}
                  onClick={() => handleButtonClickModal(action.label)}
                >
                  <FontAwesomeIcon
                    icon={action.icon}
                    className={`text-lg ${action.active ? "text-white" : "text-gray-300"}`}
                  />
                  <span className="whitespace-nowrap">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>


          {/* Logout Button */}
          <button
            ref={logoutRef}
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-start gap-2 mt-4 bg-gray-800 w-1/3 p-3 rounded-lg w-full hover:bg-red-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg text-gray-400" />
            <span className="text-sm text-gray-400">{t("logout")}</span>
          </button>
        </div>
      </div>


      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500]">
          <div className="bg-gray-900 w-[94vw] md:w-[500px] h-auto rounded-2xl text-center text-white py-6 px-5 shadow-lg">
            <div className="flex flex-col justify-center items-center gap-7">
              {/* Warning Icon */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[80px] w-[80px]"
              >
                <g clipPath="url(#clip0_4407_449983)">
                  <path
                    d="M40 0C17.8902 0 0 17.8917 0 40C0 62.1098 17.8917 80 40 80C62.1098 80 80 62.1083 80 40C80 17.8902 62.1083 0 40 0ZM40 73.75C21.3448 73.75 6.25 58.6539 6.25 40C6.25 21.3448 21.3461 6.25 40 6.25C58.6552 6.25 73.75 21.3461 73.75 40C73.75 58.6552 58.6539 73.75 40 73.75Z"
                    fill="#FFC700"
                  ></path>
                  <path
                    d="M40 20.1406C38.2741 20.1406 36.875 21.5397 36.875 23.2656V43.3895C36.875 45.1155 38.2741 46.5145 40 46.5145C41.7259 46.5145 43.125 45.1155 43.125 43.3895V23.2656C43.125 21.5397 41.7259 20.1406 40 20.1406Z"
                    fill="#FFC700"
                  ></path>
                  <path
                    d="M40 58.7734C42.33 58.7734 44.2188 56.8846 44.2188 54.5547C44.2188 52.2247 42.33 50.3359 40 50.3359C37.67 50.3359 35.7812 52.2247 35.7812 54.5547C35.7812 56.8846 37.67 58.7734 40 58.7734Z"
                    fill="#FFC700"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_4407_449983">
                    <rect width="80" height="80" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>

              {/* Text Content */}
              <div className="flex flex-col gap-3 w-full px-4">
                <h2 className="font-bold text-lg md:text-xl">
                  You don&#39;t want to miss today&#39;s jackpot!
                </h2>
                <p className="font-normal text-sm md:text-base text-gray-300">
                  Are you sure you want to log out?
                </p>
              </div>


              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 w-full text-base md:text-base">
                <button
                  onClick={handleCancelLogout}
                  className="w-full max-w-[40%] h-11 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition"
                >
                  NO
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full max-w-[40%] h-11 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-yellow-700 transition"
                >
                  YES
                </button>
              </div>
            </div>
          </div>
        </div>


      )}
    </>
  );
};

export default ProfileModal;
