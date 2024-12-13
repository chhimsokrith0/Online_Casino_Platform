"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const t = useTranslations("settings");

  const menuItems = [
    { label: t("menu.general"), link: "/general-setting/general" },
    { label: t("menu.verification"), link: "/general-setting/verification" },
    { label: t("menu.changePassword"), link: "/general-setting/change-password" },
    { label: t("menu.activityLog"), link: "/general-setting/active-log" },
  ];

  useEffect(() => {
    // Load the active menu item from localStorage when the component mounts
    const storedActiveItem = localStorage.getItem("activeMenuItem");
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    } else {
      // Set default active item to "General"
      setActiveItem("General");
    }
  }, []);

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    // Save the active menu item to localStorage
    localStorage.setItem("activeMenuItem", label);
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
                activeItem === item.label
                  ? "bg-yellow-500 text-black font-bold"
                  : "text-gray-300 hover:bg-gray-700"
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
