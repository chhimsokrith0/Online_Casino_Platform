"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import privilegeTexture from "@/assets/icon_Sidebar/privilege-texture.webp";
import questIcon from "@/assets/icon_Sidebar/quests.svg";
import rewardIcon from "@/assets/icon_Sidebar/reward.svg";
import promoIcon from "@/assets/icon_Sidebar/promo.svg";
import levelsIcon from "@/assets/icon_Sidebar/levels.svg";
import referralIcon from "@/assets/icon_Sidebar/referral.svg";

const PrivilegesSection = ({ locale }: { locale: string }) => {
  const t = useTranslations("slidebar");


  return (
    <div className="mt-6">
      <h3 className="text-gray-400 uppercase text-sm font-bold">{t("privileges")}</h3>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div
          className="relative p-4 rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${privilegeTexture.src})`,
            backgroundColor: "rgb(60, 33, 108)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src={questIcon.src} alt="Quests" className="h-8 w-8 mx-auto mb-2" />
          <span className="text-center block text-xs font-semibold text-white">{t("quests")}</span>
        </div>
        <Link href={`/${locale}/Reward`}>
          <div
            className="relative p-4 rounded-lg cursor-pointer"
            style={{
              backgroundImage: `url(${privilegeTexture.src})`,
              backgroundColor: "rgb(36, 68, 38)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img src={rewardIcon.src} alt="Reward" className="h-8 w-8 mx-auto mb-2" />
            <span className="text-center block text-xs font-semibold text-white">{t("reward")}</span>
          </div>
        </Link>
        <Link href={`/${locale}/promo`}>
          <div
            className="relative p-4 rounded-lg cursor-pointer"
            style={{
              backgroundImage: `url(${privilegeTexture.src})`,
              backgroundColor: "rgb(108, 33, 88)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img src={promoIcon.src} alt="Promo" className="h-8 w-8 mx-auto mb-2" />
            <span className="text-center block text-xs font-semibold text-white">{t("promo")}</span>
          </div>
        </Link>

        <Link href={`/${locale}/member-level`}>
          <div
            className="relative p-4 rounded-lg cursor-pointer"
            style={{
              backgroundImage: `url(${privilegeTexture.src})`,
              backgroundColor: "rgb(108, 33, 33)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img src={levelsIcon.src} alt="Levels" className="h-8 w-8 mx-auto mb-2" />
            <span className="text-center block text-xs font-semibold text-white">{t("levels")}</span>
          </div>
        </Link>

        <div
          className="relative p-4 rounded-lg cursor-pointer col-span-2"
          style={{
            backgroundImage: `url(${privilegeTexture.src})`,
            backgroundColor: "rgb(108, 88, 33)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src={referralIcon.src} alt="Referral" className="h-8 w-8 mx-auto mb-2" />
          <span className="text-center block text-xs font-semibold text-white">{t("referral")}</span>
        </div>
      </div>
    </div>
  );
};

export default PrivilegesSection;
