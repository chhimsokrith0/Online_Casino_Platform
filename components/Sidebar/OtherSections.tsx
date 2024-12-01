"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faFutbol,
  faFish,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const OtherSections = ({ locale }: { locale: string }) => {
  const t = useTranslations("slidebar");

  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      
      <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
        <FontAwesomeIcon icon={faBuilding} />
        <span>{t("providers")}</span>
      </li>
      <Link href={`/${locale}/Games`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
          <FontAwesomeIcon icon={faChartLine} />
          <span>{t("rtpSlots")}</span>
        </li>
      </Link>
      <Link href={`/${locale}/Games`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
          <FontAwesomeIcon icon={faFutbol} />
          <span>{t("sports")}</span>
        </li>
      </Link>
      <Link href={`/${locale}/Games`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
          <FontAwesomeIcon icon={faFish} />
          <span>{t("fishing")}</span>
        </li>
      </Link>
      <Link href={`/${locale}/Games`}>
        <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800">
          <FontAwesomeIcon icon={faGamepad} />
          <span>{t("virtual")}</span>
        </li>
      </Link>

    </div>
  );
};

export default OtherSections;
