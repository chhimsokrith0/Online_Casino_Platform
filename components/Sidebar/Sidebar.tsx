"use client";

import React, { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import NavigationMenu from "./NavigationMenu";
import PrivilegesSection from "./PrivilegesSection";
import OtherSections from "./OtherSections";
import SocialMedia from "./SocialMedia";

const Sidebar = ({ locale }: { locale: string }) => {

  const [activeItem, setActiveItem] = useState<string>("home");

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };
  return (
    <aside className="bg-gray-900 text-white w-64 h-[calc(100vh-64px)] px-4 py-6 fixed top-17 overflow-y-scroll scrollbar-hide z-100 shadow-md">
      <ul className="space-y-4">
        {/* Navigation Menu */}
        <NavigationMenu
          locale={locale}
          activeItem={activeItem}
          setActiveItem={handleSetActiveItem}
        />

        {/* Privileges Section */}
        <PrivilegesSection locale={locale} />

        {/* Other Sections */}
        <OtherSections
          locale={locale}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isLoggedIn={true} // Replace with actual login state
        />

        {/* Language and Social Media */}
        <LanguageSelector locale={locale} />
        <SocialMedia />
      </ul>
    </aside>
  );
};

export default Sidebar;
