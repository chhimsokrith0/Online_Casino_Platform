"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine, faTelegram, faWeixin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";
import SignupModal from "@/components/Navbar/SignUpModal";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations();
  const { data: session } = useSession();

  const [isGameCategoryOpen, setIsGameCategoryOpen] = useState(false);
  const [isLiveCasinoOpen, setIsLiveCasinoOpen] = useState(false);
  const [isSpecialsOpen, setIsSpecialsOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);

  const gameCategoryRef = useRef<HTMLUListElement | null>(null);
  const liveCasinoRef = useRef<HTMLUListElement | null>(null);
  const specialsRef = useRef<HTMLUListElement | null>(null);
  const informationRef = useRef<HTMLUListElement | null>(null);
  const { isCollapsed } = useSidebar();

  useEffect(() => {
    const animateSection = (isOpen: boolean, ref: React.RefObject<HTMLUListElement>) => {
      if (ref.current) {
        if (isOpen) {
          gsap.to(ref.current, { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
          gsap.to(ref.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.out" });
        }
      }
    };

    animateSection(isGameCategoryOpen, gameCategoryRef);
    animateSection(isLiveCasinoOpen, liveCasinoRef);
    animateSection(isSpecialsOpen, specialsRef);
    animateSection(isInformationOpen, informationRef);
  }, [isGameCategoryOpen, isLiveCasinoOpen, isSpecialsOpen, isInformationOpen]);


  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
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

  return (
    <footer className={`text-gray-300 px-4 sm:px-8 py-6 sm:py-10 ${isCollapsed ? "ml-[-10rem]" : ""}`}>
      {/* Mobile View */}
      <div className="sm:hidden">
        {/* Game Category */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsGameCategoryOpen(!isGameCategoryOpen)}
          >
            {t("footer.gameCategory")}
            <span>{isGameCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          <ul
            ref={gameCategoryRef}
            className={`space-y-2 text-sm overflow-hidden ${isGameCategoryOpen ? "block" : "hidden"}`}
          >
            <li><Link href={`/${locale}/Games/all?category=demo`}>{t("footer.categories.demo")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=newGames`}>{t("footer.categories.newGames")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=popularGames`}>{t("footer.categories.popular")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=cashDrop`}>{t("footer.categories.cashDrops")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=jackpots`}>{t("footer.categories.jackpots")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=megaways`}>{t("footer.categories.megaways")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=tableGames`}>{t("footer.categories.tableGames")}</Link></li>
            <li><Link href={`/${locale}/Games/all?category=allGames`}>{t("footer.categories.allGames")}</Link></li>
          </ul>
        </div>

        {/* Live Casino */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsLiveCasinoOpen(!isLiveCasinoOpen)}
          >
            {t("footer.liveCasino")}
            <span>{isLiveCasinoOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          <ul
            ref={liveCasinoRef}
            className={`space-y-2 text-sm overflow-hidden ${isLiveCasinoOpen ? "block" : "hidden"}`}
          >
            <li>{t("footer.allLiveCasino")}</li>
          </ul>
        </div>

        {/* Specials */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsSpecialsOpen(!isSpecialsOpen)}
          >
            {t("footer.specials.title")}
            <span>{isSpecialsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          <ul
            ref={specialsRef}
            className={`space-y-2 text-sm overflow-hidden ${isSpecialsOpen ? "block" : "hidden"}`}
          >
            <li>{t("footer.specials.quests")}</li>
            <li>{t("footer.specials.reward")}</li>
            <li>{t("footer.specials.referral")}</li>
            <li>{t("footer.specials.level")}</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsInformationOpen(!isInformationOpen)}
          >
            {t("footer.information.title")}
            <span>{isInformationOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          <ul
            ref={informationRef}
            className={`space-y-2 text-sm overflow-hidden ${isInformationOpen ? "block" : "hidden"}`}
          >
            <li><Link href={`/${locale}/Security-and-Policy/terms-and-conditions`}>{t("footer.information.termsAndConditions")}</Link></li>
            <li><Link href={`/${locale}/Security-and-Policy/privacy-policy`}>{t("footer.information.privacyPolicy")}</Link></li>
            <li><Link href={`/${locale}/Security-and-Policy/cookies-policy`}>{t("footer.information.cookiesPolicy")}</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="rounded-lg shadow-md">
          <h3 className="text-yellow-400 text-xl font-bold tracking-wide mb-6 text-center">
            {t("footer.followUs")}
          </h3>
          <div className="flex justify-center space-x-5 mt-4">
            {/* Line Icon */}
            <button
              className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
              aria-label="Line"
            >
              <FontAwesomeIcon icon={faLine} className="text-white text-2xl" />
            </button>
            {/* Telegram Icon */}
            <button
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl" />
            </button>
            {/* Chat Icon */}
            <button
              className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
              aria-label="Chat"
            >
              <FontAwesomeIcon icon={faWeixin} className="text-white text-2xl" />
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          {t("footer.poweredBy")}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-5 gap-8 mb-6">
          {/* Game Category */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.gameCategory")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Games/all?category=demo">{t("footer.categories.demo")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=newGames`}>{t("footer.categories.newGames")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=popularGames`}>{t("footer.categories.popular")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=cashDrop`}>{t("footer.categories.cashDrops")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=jackpots`}>{t("footer.categories.jackpots")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=megaways`}>{t("footer.categories.megaways")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=tableGames`}>{t("footer.categories.tableGames")}</Link></li>
              <li><Link href={`/${locale}/Games/all?category=allGames`}>{t("footer.categories.allGames")}</Link></li>
            </ul>
          </div>


          {/* Live Casino */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.liveCasino")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/Games/LiveCasino?category=allGames`}>{t("footer.allLiveCasino")}</Link></li>
            </ul>
          </div>

          {/* Specials */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.specials.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer" onClick={handleOpenModal}>{t("footer.specials.quests")}</li>
              <li><Link href={session ? `/${locale}/Reward/random-card` : `/${locale}/Reward`}>{t("footer.specials.reward")}</Link></li>
              <li><Link href={`/${locale}/account-information/affiliate`}>{t("footer.specials.referral")}</Link></li>
              <li><Link href={`/${locale}/member-level`}>{t("footer.specials.level")}</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.information.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}/Security-and-Policy/terms-and-conditions`}>{t("footer.information.termsAndConditions")}</Link></li>
              <li><Link href={`/${locale}/Security-and-Policy/privacy-policy`}>{t("footer.information.privacyPolicy")}</Link></li>
              <li><Link href={`/${locale}/Security-and-Policy/cookies-policy`}>{t("footer.information.cookiesPolicy")}</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="rounded-lg shadow-md">
            <h3 className="text-yellow-400 text-xl font-bold tracking-wide mb-6 text-center">
              {t("footer.followUs")}
            </h3>
            <div className="flex justify-center space-x-5 mt-4">
              {/* Line Icon */}
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                aria-label="Line"
              >
                <FontAwesomeIcon icon={faLine} className="text-white text-2xl" />
              </button>
              {/* Telegram Icon */}
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                aria-label="Telegram"
              >
                <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl" />
              </button>
              {/* Chat Icon */}
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                aria-label="Chat"
              >
                <FontAwesomeIcon icon={faWeixin} className="text-white text-2xl" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          {t("footer.poweredBy")}
        </div>
      </div>
      {/* Quests Modal */}
      {isQuestsModalOpen && <QuestsModal isOpen={isQuestsModalOpen} onClose={handleCloseQuestsModal} />}

      {/* Signup Modal */}
      {isSignupModalOpen && <SignupModal activeTab="signUp" onClose={handleCloseSignupModal} zIndex={10000} />}
    </footer>
  );
};

export default Footer;
