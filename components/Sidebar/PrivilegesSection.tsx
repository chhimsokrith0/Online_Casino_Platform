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

const PrivilegesSection = ({ locale }: { locale: string }) => {
  const t = useTranslations("slidebar");
  const { data: session } = useSession();

  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpenModal = () => {
    if (session) {
      // Open quests modal if user is logged in
      setIsQuestsModalOpen(true);
    } else {
      // Open signup modal if user is not logged in
      setIsSignupModalOpen(true);
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
      colSpan: 2,
      icon: referralIcon,
      link: `/${locale}/Referral`,
    },
  ];

  useEffect(() => {
    // Animate privilege cards on load
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

  const handleCardHover = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    }
  };

  const handleCardLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, { scale: 1, duration: 0.3 });
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-gray-400 uppercase text-sm font-bold">{t("privileges")}</h3>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {privileges.map((privilege, index) => (
          <React.Fragment key={privilege.key}>
            {privilege.link ? (
              <Link href={privilege.link}>
                <div
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el; // Assign each card's ref
                  }} // Assign ref to each card
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => handleCardLeave(index)}
                  className={`relative p-4 rounded-lg cursor-pointer ${privilege.colSpan ? "col-span-2" : ""
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
                ref={(el) => {
                  if (el) cardRefs.current[index] = el; // Assign each card's ref
                }}  // Assign ref to each card
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
                onClick={privilege.onClick}
                className={`relative p-4 rounded-lg cursor-pointer ${privilege.colSpan ? "col-span-2" : ""
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
      {isQuestsModalOpen && <QuestsModal isOpen={isQuestsModalOpen} onClose={handleCloseQuestsModal} />}

      {/* Signup Modal */}
      {isSignupModalOpen && <SignupModal activeTab="signUp" onClose={handleCloseSignupModal} zIndex={10000} />}
    </div>
  );
};

export default PrivilegesSection;
