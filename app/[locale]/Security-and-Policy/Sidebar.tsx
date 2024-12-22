"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const t = useTranslations("settings");

  // Memoize menuItems to prevent unnecessary re-creation
  const menuItems = useMemo(
    () => [
      { label: "Term and Conditions", link: "/Security-and-Policy/terms-and-conditions" },
      { label: "Privacy Policy", link: "/Security-and-Policy/privacy-policy" },
      { label: "Cookies Policy", link: "/Security-and-Policy/cookies-policy" },
    ],
    []
  );

  useEffect(() => {
    // Safely access localStorage for hydration
    if (typeof window !== "undefined") {
      const storedActiveItem = localStorage.getItem("activeMenuItem");
      if (storedActiveItem) {
        setActiveItem(storedActiveItem);
      } else {
        // Set default active item if none is stored
        setActiveItem(menuItems[0].label);
      }
    }
  }, [menuItems]); // Include menuItems in the dependency array

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    // Safely store the active menu item in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("activeMenuItem", label);
    }
  };

  return (
    <aside className="bg-gray-800 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index} className="flex">
            <Link
              href={item.link}
              onClick={() => handleItemClick(item.label)}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${
                activeItem === item.label ? "bg-gray-700 text-white" : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile-specific styling */}
      <div className="block md:hidden mt-4 text-gray-300 text-center">
        Use the tabs above for navigation
      </div>
    </aside>
  );
};

export default Sidebar;
