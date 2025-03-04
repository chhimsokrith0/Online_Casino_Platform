


"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import privilegeTexture from "@/assets/icon_Sidebar/privilege-texture.webp";
import questIcon from "@/assets/icon_Sidebar/quests.svg";
import rewardIcon from "@/assets/icon_Sidebar/reward.svg";
import promoIcon from "@/assets/icon_Sidebar/promo.svg";
import levelsIcon from "@/assets/icon_Sidebar/levels.svg";
import referralIcon from "@/assets/icon_Sidebar/referral.svg";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";
import SignupModal from "@/components/Navbar/SignUpModal";
import { useSession } from "next-auth/react";

const PrivilegesSection = ({
  locale,
  isCollapsed,
}: {
  locale: string;
  isCollapsed: boolean;
}) => {
  const t = useTranslations("slidebar");
  const { data: session } = useSession();

  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpenModal = () => {
    if (session) {
      setIsQuestsModalOpen(true); // Open quests modal
    } else {
      setIsSignupModalOpen(true); // Open signup modal
    }
  };

  const handleCloseQuestsModal = () => setIsQuestsModalOpen(false);
  const handleCloseSignupModal = () => setIsSignupModalOpen(false);

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
      link: session
        ? `/${locale}/Reward/random-card`
        : `/${locale}/Reward`,
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
      colSpan: 2,
      icon: referralIcon,
      link: session
        ? `/${locale}/account-information/affiliate`
        : `/${locale}/Referral`,
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: index * 0.1 }
        );
      }
    });
  }, []);

  return (
    <div className="mt-6">
      {/* Title - Hidden in Collapsed Mode */}
      {!isCollapsed && (
        <h3 className="text-gray-400 uppercase text-sm font-bold mb-4">
          {t("privileges")}
        </h3>
      )}
      {/* Grid Content */}
      <div
        className={`grid ${
          isCollapsed
            ? "grid-cols-1 gap-3 place-items-center"
            : "grid-cols-2 gap-2"
        }`}
      >
        {privileges.map((privilege, index) => (
          <React.Fragment key={privilege.key}>
            {/* Link or Clickable Div */}
            {privilege.link ? (
              <Link href={privilege.link}>
                <div
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  className={`relative p-2 rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                    privilege.colSpan && !isCollapsed
                      ? "col-span-2"
                      : "col-span-1"
                  }`}
                  style={{
                    backgroundImage: `url(${privilegeTexture.src})`,
                    backgroundColor: privilege.bgColor,
                    backgroundSize: "cover",
                  }}
                >
                  {/* Icon */}
                  <img
                    src={privilege.icon.src}
                    alt={privilege.label}
                    className="h-8 w-8 mx-auto"
                  />
                  {/* Label - Hidden in Collapsed Mode */}
                  {!isCollapsed && (
                    <span className="text-center block text-xs font-semibold text-white mt-2">
                      {privilege.label}
                    </span>
                  )}
                </div>
              </Link>
            ) : (
              <div
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                onClick={privilege.onClick}
                className={`relative p-2 rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                  privilege.colSpan && !isCollapsed
                    ? "col-span-2"
                    : "col-span-1"
                }`}
                style={{
                  backgroundImage: `url(${privilegeTexture.src})`,
                  backgroundColor: privilege.bgColor,
                  backgroundSize: "cover",
                }}
              >
                {/* Icon */}
                <img
                  src={privilege.icon.src}
                  alt={privilege.label}
                  className="h-8 w-8 mx-auto"
                />
                {/* Label - Hidden in Collapsed Mode */}
                {!isCollapsed && (
                  <span className="text-center block text-xs font-semibold text-white mt-2">
                    {privilege.label}
                  </span>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Modals */}
      {isQuestsModalOpen && (
        <QuestsModal isOpen={isQuestsModalOpen} onClose={handleCloseQuestsModal} />
      )}
      {isSignupModalOpen && (
        <SignupModal activeTab="signUp" onClose={handleCloseSignupModal} zIndex={10000} />
      )}
    </div>
  );
};

export default PrivilegesSection;
