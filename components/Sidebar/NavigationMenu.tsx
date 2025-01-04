"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Home, Casino, SportsEsports } from "@mui/icons-material";

const NavigationMenu = ({
  locale,
  activeItem,
  setActiveItem,
  isCollapsed,
}: {
  locale: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
  isCollapsed: boolean;
}) => {
  const t = useTranslations("slidebar");
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    // Dynamically update activeItem based on the current route
    if (pathname === `/${locale}` || pathname === `/${locale}/`) {
      setActiveItem("home");
    } else if (pathname.includes("/Games/slots")) {
      setActiveItem("slots");
    } else if (pathname.includes("/Games/LiveCasino")) {
      setActiveItem("liveCasino");
    } else if (pathname.includes("/Privileges")) {
      setActiveItem("privileges");
    } else {
      setActiveItem(""); // Default to no active item if path doesn't match
    }
  }, [pathname, locale, setActiveItem]);

  return (
    <ul>
      {/* Home */}
      <Link href={`/${locale}/`}>
        <li
          onClick={() => setActiveItem("home")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "home"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
              : "hover:bg-gray-800"
          }`}
        >
          <Home className="text-2xl" />
          {!isCollapsed && <span className="font-medium">{t("home")}</span>}
        </li>
      </Link>

      {/* Slots */}
      <Link href={`/${locale}/Games/slots`}>
        <li
          onClick={() => setActiveItem("slots")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "slots"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
              : "hover:bg-gray-800"
          }`}
        >
          <SportsEsports className="text-2xl" />
          {!isCollapsed && <span className="font-medium">{t("slots")}</span>}
        </li>
      </Link>

      {/* Live Casino */}
      <Link href={`/${locale}/Games/LiveCasino`}>
        <li
          onClick={() => setActiveItem("liveCasino")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "liveCasino"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
              : "hover:bg-gray-800"
          }`}
        >
          <Casino className="text-2xl" />
          {!isCollapsed && (
            <span className="font-medium">{t("liveCasino")}</span>
          )}
        </li>
      </Link>
    </ul>
  );
};

export default NavigationMenu;

