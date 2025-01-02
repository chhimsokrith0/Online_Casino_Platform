"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const t = useTranslations("SecurityAndPolicy.sidebar");
  const pathname = usePathname(); // Dynamically get the current route
  const [activeItem, setActiveItem] = useState<string>("");

  // Dynamically set 'activeItem' based on the current pathname
  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes("/Security-and-Policy/terms-and-conditions")) {
      setActiveItem("termsAndConditions");
    } else if (pathname.includes("/Security-and-Policy/privacy-policy")) {
      setActiveItem("privacyPolicy");
    } else if (pathname.includes("/Security-and-Policy/cookies-policy")) {
      setActiveItem("cookiesPolicy");
    } else {
      setActiveItem(""); // Default or fallback if route doesn't match
    }
  }, [pathname]);

  // Match each link to a "key" so we can compare to activeItem
  const menuItems = [
    {
      key: "termsAndConditions",
      label: t("TermsandConditions"),
      link: "/Security-and-Policy/terms-and-conditions",
    },
    {
      key: "privacyPolicy",
      label: t("PrivacyPolicy"),
      link: "/Security-and-Policy/privacy-policy",
    },
    {
      key: "cookiesPolicy",
      label: t("CookiesPolicy"),
      link: "/Security-and-Policy/cookies-policy",
    },
  ];

  return (
    <aside className="bg-gray-800 py-6 px-4 flex flex-col rounded-lg">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.key} className="flex">
            <Link
              href={item.link}
              className={`flex items-center px-4 py-3 w-full rounded-full transition ${
                activeItem === item.key
                  ? "bg-gray-700 text-white font-semibold shadow-md"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile-specific styling or additional text */}
      <div className="block md:hidden mt-4 text-gray-300 text-center">
        {t("activeItemMessage")}
      </div>
    </aside>
  );
};

export default Sidebar;
