"use client";

import React, { useEffect, useRef } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import gsap from "gsap";
import { signOut } from "next-auth/react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, locale }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const actionRefs = useRef<HTMLButtonElement[]>([]);
  const logoutRef = useRef<HTMLButtonElement | null>(null);

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

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/", // Redirect to the home page or login page
    });
  };

  return (
    <>
      <div
        ref={modalRef}
        className="hidden sm:block absolute top-20 w-80 sm:w-96 right-4 bg-gray-900 rounded-lg p-4 text-white shadow-lg z-50 overflow-y-auto animate-fade-in"
      >
        <div className="p-4 text-white rounded-lg w-full">
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
                  <h2 className="text-lg font-bold">rith sok</h2>
                  <p className="text-yellow-400 text-sm">800.00 Points</p>
                </div>
              </div>
              {/* Settings Button */}
              <Link href={`/${locale}/general-setting`}
                className="text-gray-400 hover:text-yellow-500 flex items-center gap-2"
              >
                <span>Settings</span>
                <FontAwesomeIcon icon={faCog} />
              </Link>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">Progress</p>
              <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
                <div className="bg-yellow-500 h-full" style={{ width: "0%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Bronze</span>
                <span>Silver</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: faUser, label: "My Profile", link: `/${locale}/account-information`, active: true },
                { icon: faCrown, label: "Levels", link: `/${locale}/levels`, active: false },
                { icon: faGift, label: "Reward", link: `/${locale}/reward`, active: false },
                { icon: faHistory, label: "History", link: `/${locale}/history`, active: false },
                { icon: faArrowCircleUp, label: "Rebate", link: `/${locale}/rebate`, active: false },
                { icon: faDollarSign, label: "Cashback", link: `/${locale}/cashback`, active: false },
                { icon: faBoxOpen, label: "Referral", link: `/${locale}/referral`, active: false },
                { icon: faChartBar, label: "Total Bet", link: `/${locale}/total-bet`, active: false },
                { icon: faStar, label: "Point History", link: `/${locale}/point-history`, active: false },
                { icon: faBolt, label: "Quests", link: `/${locale}/quests`, active: false },
              ].map((action, index) => (
                <Link href={action.link} key={index}>
                  <button
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition w-full ${action.active
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                  >
                    <FontAwesomeIcon
                      icon={action.icon}
                      className={`text-lg ${action.active ? "text-white" : "text-gray-300"
                        }`}
                    />
                    <span>{action.label}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>



          {/* Logout Button */}
          <button
            ref={logoutRef}
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 mt-4 bg-red-500 p-3 rounded-lg w-full hover:bg-red-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      </div>


      {/* Mobile Modal */}
      <div
        ref={modalRef}
        className="block sm:hidden fixed top-20 sm:top-20 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md bg-gray-900 rounded-lg p-4 text-white shadow-lg z-50 overflow-y-auto"
      >
        <div className="p-4 text-white rounded-lg w-full">
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
                  <h2 className="text-lg font-bold">rith sok</h2>
                  <p className="text-yellow-400 text-sm">800.00 Points</p>
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
              <p className="text-sm text-gray-400">Progress</p>
              <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
                <div className="bg-yellow-500 h-full" style={{ width: "40%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Bronze</span>
                <span>Silver</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: faUser, label: "My Profile", link: `/${locale}/account-information`, active: true },
                { icon: faCrown, label: "Levels", link: `/${locale}/levels`, active: false },
                { icon: faGift, label: "Reward", link: `/${locale}/reward`, active: false },
                { icon: faHistory, label: "History", link: `/${locale}/history`, active: false },
                { icon: faArrowCircleUp, label: "Rebate", link: `/${locale}/rebate`, active: false },
                { icon: faDollarSign, label: "Cashback", link: `/${locale}/cashback`, active: false },
                { icon: faBoxOpen, label: "Referral", link: `/${locale}/referral`, active: false },
                { icon: faChartBar, label: "Total Bet", link: `/${locale}/total-bet`, active: false },
                { icon: faStar, label: "Point History", link: `/${locale}/point-history`, active: false },
                { icon: faBolt, label: "Quests", link: `/${locale}/quests`, active: false },
              ].map((action, index) => (
                <Link href={action.link} key={index}>
                  <button
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition w-full ${action.active
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                  >
                    <FontAwesomeIcon
                      icon={action.icon}
                      className={`text-lg ${action.active ? "text-white" : "text-gray-300"}`}
                    />
                    <span>{action.label}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>


          {/* Logout Button */}
          <button
            ref={logoutRef}
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 mt-4 bg-red-500 p-3 rounded-lg w-full hover:bg-red-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
            <span className="text-sm">Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
