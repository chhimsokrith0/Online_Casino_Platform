"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGift, faDice, faGem } from "@fortawesome/free-solid-svg-icons";
import { FaUserPlus } from "react-icons/fa";
// import Sidebar from "./Sidebar/Sidebar"; // Import the Sidebar component
import { useTranslations } from "next-intl";
const MobileNavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const t = useTranslations("mobieleNavbar");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Content */}
          {/* <Sidebar /> */}
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={toggleSidebar} // Close the sidebar when clicking outside
          ></div>
        </div>
      )}

      {/* Mobile Navigation Bar */}
      <nav className="sticky bottom-0 left-0 w-full bg-[#020617] py-3 shadow-lg z-50 sm:hidden">
        <div className="flex justify-between items-center px-6">
          {/* Menu Icon */}
          <div
            className="flex flex-col items-center text-gray-400 hover:text-white cursor-pointer"
            onClick={toggleSidebar} // Toggle Sidebar visibility
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
            <span className="text-xs mt-1">{t("menu")}</span>
          </div>

          {/* Slots Icon */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGem} className="text-2xl" />
            <span className="text-xs mt-1">{t("slots")}</span>
          </div>

          {/* Sign Up Icon */}
          <div className="flex flex-col items-center text-yellow-500">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaUserPlus className="text-xl text-white" />
            </div>
            <span className="text-xs mt-1 text-white">{t("signUp")}</span>
          </div>

          {/* Live Casino Icon */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faDice} className="text-2xl" />
            <span className="text-xs mt-1">{t("liveCasino")}</span>
          </div>

          {/* Promo Icon */}
          <div className="flex flex-col items-center text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faGift} className="text-2xl" />
            <span className="text-xs mt-1">{t("promo")}</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavBar;
