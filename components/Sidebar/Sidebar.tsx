"use client";

import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import NavigationMenu from "./NavigationMenu";
import PrivilegesSection from "./PrivilegesSection";
import OtherSections from "./OtherSections";
import SocialMedia from "./SocialMedia";
import Logo_ICG from "@/assets/Logo/logo-icg.png";

const Sidebar = ({ locale }: { locale: string }) => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Ensure sidebar is open for non-mobile views
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle sidebar visibility for mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen && (
        <aside
          style={{
            background: "linear-gradient(90deg, #1E1E2C, #232334)",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          }}
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
                <img src={Logo_ICG.src} alt="Logo" className="w-40 h-auto" />
                <button
                  onClick={toggleSidebar}
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
              // isLoggedIn={true} // Replace with actual login state
            />

            {/* Language Selector */}
            <LanguageSelector locale={locale} />

            {/* Social Media */}
            <SocialMedia />
          </ul>
        </aside>
      )}

      {isMobile && !isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-yellow-500 text-black px-3 py-2 rounded-full shadow-md focus:outline-none z-50"
        >
          ☰
        </button>
      )}
    </>
  );
};

export default Sidebar;
