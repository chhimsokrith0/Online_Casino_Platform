"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGift, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const NavigationMenu = ({ locale }: { locale: string }) => {
  const t = useTranslations("slidebar");

  return (
    <>
      {/* Home */}
      <Link href={`/${locale}/`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
          <FontAwesomeIcon icon={faHome} />
          <span>{t("home")}</span>
        </li>
      </Link>

      {/* Slots */}
      <Link href={`/${locale}/Games`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
          <FontAwesomeIcon icon={faGift} />
          <span>{t("slots")}</span>
        </li>
      </Link>

      {/* Live Casino */}
      <Link href={`/${locale}/Games`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
          <FontAwesomeIcon icon={faChartLine} />
          <span>{t("liveCasino")}</span>
        </li>
      </Link>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>
    </>
  );
};

export default NavigationMenu;
