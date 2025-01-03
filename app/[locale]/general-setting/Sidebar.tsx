"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("settings");
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    if (!pathname) return;
    if (pathname.includes("/general-setting/general")) {
      setActiveItem("general");
    } else if (pathname.includes("/general-setting/verification")) {
      setActiveItem("verification");
    } else if (pathname.includes("/general-setting/change-password")) {
      setActiveItem("changePassword");
    } else if (pathname.includes("/general-setting/active-log")) {
      setActiveItem("activityLog");
    } else {
      setActiveItem("");
    }
  }, [pathname]);

 
  const menuItems = [
    { key: "general", label: t("menu.general"), link: "/general-setting/general" },
    { key: "verification", label: t("menu.verification"), link: "/general-setting/verification" },
    { key: "changePassword", label: t("menu.changePassword"), link: "/general-setting/change-password" },
    { key: "activityLog", label: t("menu.activityLog"), link: "/general-setting/active-log" },
  ];

  return (
    <aside className="bg-gray-800 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.key} className="flex">
            <Link
              href={item.link}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${activeItem === item.key
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
