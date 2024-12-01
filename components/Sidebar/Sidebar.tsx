"use client";

import React from "react";
import LanguageSelector from "./LanguageSelector";
import NavigationMenu from "./NavigationMenu";
import PrivilegesSection from "./PrivilegesSection";
import OtherSections from "./OtherSections";
import SocialMedia from "./SocialMedia";

const Sidebar = ({ locale }: { locale: string }) => {
  return (
    <aside className="bg-gray-900 text-white w-64 h-[calc(100vh-64px)] px-4 py-6 fixed top-17 overflow-y-scroll scrollbar-hide z-100 shadow-md">
      <ul className="space-y-4">
        {/* Navigation Menu */}
        <NavigationMenu locale={locale} />

        {/* Privileges Section */}
        <PrivilegesSection locale={locale} />

        {/* Other Sections */}
        <OtherSections locale={locale} />

        {/* Language and Social Media */}
        <LanguageSelector locale={locale} />
        <SocialMedia />
      </ul>
    </aside>
  );
};

export default Sidebar;
