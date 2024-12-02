"use client";

import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import NavigationMenu from "./NavigationMenu";
import PrivilegesSection from "./PrivilegesSection";
import OtherSections from "./OtherSections";
import SocialMedia from "./SocialMedia";

const Sidebar = ({ locale }: { locale: string }) => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`bg-gray-900 text-white ${
        isMobile ? "w-64" : "w-64"
      } h-[calc(100vh-64px)] px-4 py-6 fixed ${
        isMobile ? "top-0" : "top-17"
      } overflow-y-scroll scrollbar-hide z-50 shadow-md`}
    >
      <ul className="space-y-4">
        {isMobile && (
          <div className="flex justify-between items-center mb-4">
            {/* Mobile Header with Logo and Close Button */}
            <img
              src="https://storage.googleapis.com/playgame168/global_config/ac235b67-7100-4241-a7cb-8de8cfb4bc2e.webp"
              alt="Logo"
              className="w-20 h-auto"
            />
            <button
              onClick={() => setActiveItem("")}
              className="text-white text-2xl focus:outline-none"
            >
              ✕
            </button>
          </div>
        )}

        {/* Navigation Menu */}
        <NavigationMenu
          locale={locale}
          activeItem={activeItem}
          setActiveItem={handleSetActiveItem}
        />

        {/* Privileges Section */}
        <PrivilegesSection locale={locale} />

        {/* Special Sections */}
        <OtherSections
          locale={locale}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isLoggedIn={true} // Replace with actual login state
        />

        {/* Language Selector */}
        <LanguageSelector locale={locale} />

        {/* Social Media */}
        <SocialMedia />
      </ul>
    </aside>
  );
};

export default Sidebar;
