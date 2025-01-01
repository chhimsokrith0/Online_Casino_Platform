"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("settings");
  const pathname = usePathname(); // Dynamically get the current route
  const [activeItem, setActiveItem] = useState<string>("");

  const menuItems = [
    { label: t("menu.general"), link: "/general-setting/general" },
    { label: t("menu.verification"), link: "/general-setting/verification" },
    { label: t("menu.changePassword"), link: "/general-setting/change-password" },
    { label: t("menu.activityLog"), link: "/general-setting/active-log" },
  ];

  useEffect(() => {
    if (!pathname) return;

    // Automatically set activeItem based on the current pathname
    const matchedItem = menuItems.find((item) => {
      const normalizedPathname = pathname.replace(/\/$/, ""); // Remove trailing slash
      const normalizedItemLink = item.link.replace(/\/$/, ""); // Remove trailing slash
      return normalizedPathname === normalizedItemLink || normalizedPathname.startsWith(normalizedItemLink);
    });

    if (matchedItem) {
      setActiveItem(matchedItem.label);
      localStorage.setItem("activeMenuItem", matchedItem.label); // Save active item to localStorage
    }
  }, [pathname, menuItems]);

  useEffect(() => {
    // Load active item from localStorage on mount
    const savedActiveItem = localStorage.getItem("activeMenuItem");
    if (savedActiveItem) {
      setActiveItem(savedActiveItem);
    }
  }, []);

  const handleItemClick = (label: string) => {
    setActiveItem(label); // Manually set active item when clicked
    localStorage.setItem("activeMenuItem", label); // Save active item to localStorage
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
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold shadow-md"
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
