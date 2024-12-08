"use client";

import React from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

const PromotionsSection: React.FC = () => {

    const t = useTranslations("promotions");
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg md:text-xl lg:text-2xl text-purple-500">🎁</span>
          <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{t("title")}</h2>
        </div>
        <Link href="/promo" className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
          <span>{t("seeAll")}</span>
          <span className="font-bold">➤</span>
        </Link>
      </div>
    </div>
  );
};

export default PromotionsSection;
