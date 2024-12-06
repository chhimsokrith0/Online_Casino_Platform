"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGift, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const NavigationMenu = ({
  locale,
  activeItem,
  setActiveItem,
}: {
  locale: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const t = useTranslations("slidebar");

  return (
    <>
      <Link href={`/${locale}/`}>
        <li
          onClick={() => setActiveItem("home")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "home"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
              : "hover:bg-gray-800"
          }`}
        >
          <FontAwesomeIcon icon={faHome} />
          <span>{t("home")}</span>
        </li>
      </Link>

      <Link href={`/${locale}/Games/slots`}>
        <li
          onClick={() => setActiveItem("slots")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "slots"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
              : "hover:bg-gray-800"
          }`}
        >
          <FontAwesomeIcon icon={faGift} />
          <span>{t("slots")}</span>
        </li>
      </Link>

      <Link href={`/${locale}/Games/LiveCasino`}>
        <li
          onClick={() => setActiveItem("liveCasino")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "liveCasino"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
              : "hover:bg-gray-800"
          }`}
        >
          <FontAwesomeIcon icon={faChartLine} />
          <span>{t("liveCasino")}</span>
        </li>
      </Link>
    </>
  );
};

export default NavigationMenu;
