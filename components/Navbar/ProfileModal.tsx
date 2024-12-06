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
        { opacity: 1, y: 0, duration: 0, stagger: 0.1, ease: "power4.out", delay: 0.2 }
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
    <div
      ref={modalRef}
      className="absolute top-20 w-[500px] right-20 bg-gray-900 rounded-lg p-2 text-white shadow-lg z-50 overflow-y-auto animate-fade-in"
    >
      <div className="p-6 text-white rounded-lg w-full">
        <div className="bg-gray-800 p-4 rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            {/* User Information */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                alt="User Level"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold text-white">rith sok</h2>
                <p className="text-yellow-400 text-sm">400.00 Points</p>
              </div>
            </div>
            {/* Settings Button */}
            <button
              className="text-gray-400 hover:text-yellow-500 transition flex items-center gap-2"
              onClick={onClose}
            >
              <span>General Setting</span>
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>

          {/* Progress Section */}
          <div className="mb-6">
            <p className="text-sm text-gray-400">Progress</p>
            <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
              <div
                className="bg-yellow-500 h-full"
                style={{ width: "0%" }} // Dynamically update progress width
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Bronze</span>
              <span>Silver</span>
            </div>
          </div>
        </div>

        <br />
        <div className="bg-gray-800 p-4 rounded-lg">
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: faUser, label: "My Profile", link: `/${locale}/account-information` },
              { icon: faCrown, label: "Levels", link: `/${locale}/levels` },
              { icon: faGift, label: "Reward", link: `/${locale}/reward` },
              { icon: faHistory, label: "History", link: `/${locale}/history` },
              { icon: faArrowCircleUp, label: "Rebate", link: `/${locale}/rebate` },
              { icon: faDollarSign, label: "Cashback", link: `/${locale}/cashback` },
              { icon: faBoxOpen, label: "Referral", link: `/${locale}/referral` },
              { icon: faChartBar, label: "Total Bet", link: `/${locale}/total-bet` },
              { icon: faStar, label: "Point History", link: `/${locale}/point-history` },
              { icon: faBolt, label: "Quests", link: `/${locale}/quests` },
            ].map((action, index) => (
              <Link href={action.link} key={index}>
                <button
                  ref={(el) => {
                    if (el) actionRefs.current.push(el);
                  }}
                  className="flex flex-col items-center gap-2 bg-gray-700 p-1 rounded-lg hover:bg-gray-600 transition w-full"
                >
                  <FontAwesomeIcon icon={action.icon} className="text-xl text-white" />
                  <span className="text-sm text-gray-300">{action.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button
          ref={logoutRef}
          onClick={handleLogout} // Call the logout handler
          className="flex items-center justify-center gap-2 mt-6 bg-red-500 p-4 rounded-lg w-full hover:bg-red-600 transition"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="text-xl text-white" />
          <span className="text-sm text-white">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
