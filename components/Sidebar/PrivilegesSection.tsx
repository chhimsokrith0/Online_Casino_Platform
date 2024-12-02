"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import privilegeTexture from "@/assets/icon_Sidebar/privilege-texture.webp";
import questIcon from "@/assets/icon_Sidebar/quests.svg";
import rewardIcon from "@/assets/icon_Sidebar/reward.svg";
import promoIcon from "@/assets/icon_Sidebar/promo.svg";
import levelsIcon from "@/assets/icon_Sidebar/levels.svg";
import referralIcon from "@/assets/icon_Sidebar/referral.svg";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";

const PrivilegesSection = ({ locale }: { locale: string }) => {
  const t = useTranslations("slidebar");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const privileges = [
    {
      key: "quests",
      label: t("quests"),
      bgColor: "rgb(60, 33, 108)",
      icon: questIcon,
      onClick: handleOpenModal,
    },
    {
      key: "reward",
      label: t("reward"),
      bgColor: "rgb(36, 68, 38)",
      icon: rewardIcon,
      link: `/${locale}/Reward`,
    },
    {
      key: "promo",
      label: t("promo"),
      bgColor: "rgb(108, 33, 88)",
      icon: promoIcon,
      link: `/${locale}/promo`,
    },
    {
      key: "levels",
      label: t("levels"),
      bgColor: "rgb(108, 33, 33)",
      icon: levelsIcon,
      link: `/${locale}/member-level`,
    },
    {
      key: "referral",
      label: t("referral"),
      bgColor: "rgb(108, 88, 33)",
      icon: referralIcon,
      colSpan: 2,
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-gray-400 uppercase text-sm font-bold">{t("privileges")}</h3>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {privileges.map((privilege) => (
          <React.Fragment key={privilege.key}>
            {privilege.link ? (
              <Link href={privilege.link}>
                <div
                  className={`relative p-4 rounded-lg cursor-pointer ${
                    privilege.colSpan ? "col-span-2" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${privilegeTexture.src})`,
                    backgroundColor: privilege.bgColor,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={privilege.icon.src}
                    alt={privilege.label}
                    className="h-8 w-8 mx-auto mb-2"
                  />
                  <span className="text-center block text-xs font-semibold text-white">
                    {privilege.label}
                  </span>
                </div>
              </Link>
            ) : (
              <div
                onClick={privilege.onClick}
                className={`relative p-4 rounded-lg cursor-pointer ${
                  privilege.colSpan ? "col-span-2" : ""
                }`}
                style={{
                  backgroundImage: `url(${privilegeTexture.src})`,
                  backgroundColor: privilege.bgColor,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src={privilege.icon.src}
                  alt={privilege.label}
                  className="h-8 w-8 mx-auto mb-2"
                />
                <span className="text-center block text-xs font-semibold text-white">
                  {privilege.label}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Quests Modal */}
      <QuestsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default PrivilegesSection;
