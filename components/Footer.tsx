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

    <footer className={`row-span-1 lg:ml-[12rem] col-span-full ${isCollapsed ? "ml-[-8rem]" : ""}`}>
      <div className=" mx-auto max-w-[1200px] px-4">
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
              <li><a href={`/${locale}/Games/all?category=demo`}>{t("footer.categories.demo")}</a></li>
              <li><a href={`/${locale}/Games/all?category=newGames`}>{t("footer.categories.newGames")}</a></li>
              <li><a href={`/${locale}/Games/all?category=popularGames`}>{t("footer.categories.popular")}</a></li>
              <li><a href={`/${locale}/Games/all?category=cashDrop`}>{t("footer.categories.cashDrops")}</a></li>
              <li><a href={`/${locale}/Games/all?category=jackpots`}>{t("footer.categories.jackpots")}</a></li>
              <li><a href={`/${locale}/Games/all?category=megaways`}>{t("footer.categories.megaways")}</a></li>
              <li><a href={`/${locale}/Games/all?category=tableGames`}>{t("footer.categories.tableGames")}</a></li>
              <li><a href={`/${locale}/Games/all?category=allGames`}>{t("footer.categories.allGames")}</a></li>
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
          <div className="rounded-lg shadow-md p-6">
            {/* Section Title */}
            <h3 className="text-yellow-400 text-xl font-bold tracking-wide mb-6 text-center">
              {t("footer.followUs")}
            </h3>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-4">
              {/* Line Icon */}
              <a
                href="https://line.me" // Replace with the actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                aria-label="Follow us on Line"
              >
                <FontAwesomeIcon icon={faLine} className="text-white text-2xl" />
              </a>

              {/* Telegram Icon */}
              <a
                href="https://telegram.org" // Replace with the actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                aria-label="Follow us on Telegram"
              >
                <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl" />
              </a>

              {/* WeChat Icon */}
              <a
                href="https://wechat.com" // Replace with the actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                aria-label="Follow us on WeChat"
              >
                <FontAwesomeIcon icon={faWeixin} className="text-white text-2xl" />
              </a>
            </div>
          </div>


          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            {t("footer.poweredBy")}
          </div>
        </div>


        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-5 ">
            {/* Game Category */}
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-6">{t("footer.gameCategory")}</h3>
              <ul className="space-y-3 text-md">
                <li><a href={`/${locale}/Games/all?category=demo`}>{t("footer.categories.demo")}</a></li>
                <li><a href={`/${locale}/Games/all?category=newGames`}>{t("footer.categories.newGames")}</a></li>
                <li><a href={`/${locale}/Games/all?category=popularGames`}>{t("footer.categories.popular")}</a></li>
                <li><a href={`/${locale}/Games/all?category=cashDrop`}>{t("footer.categories.cashDrops")}</a></li>
                <li><a href={`/${locale}/Games/all?category=jackpots`}>{t("footer.categories.jackpots")}</a></li>
                <li><a href={`/${locale}/Games/all?category=megaways`}>{t("footer.categories.megaways")}</a></li>
                <li><a href={`/${locale}/Games/all?category=tableGames`}>{t("footer.categories.tableGames")}</a></li>
                <li><a href={`/${locale}/Games/all?category=allGames`}>{t("footer.categories.allGames")}</a></li>
              </ul>
            </div>

            {/* Live Casino */}
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-6">{t("footer.liveCasino")}</h3>
              <ul className="space-y-3 text-md">
                <li><Link href={`/${locale}/Games/LiveCasino?category=allGames`}>{t("footer.allLiveCasino")}</Link></li>
              </ul>
            </div>

            {/* Specials */}
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-6">{t("footer.specials.title")}</h3>
              <ul className="space-y-3 text-md">
                <li className="cursor-pointer" onClick={handleOpenModal}>{t("footer.specials.quests")}</li>
                <li><Link href={session ? `/${locale}/Reward/random-card` : `/${locale}/Reward`}>{t("footer.specials.reward")}</Link></li>
                <li><Link href={`/${locale}/account-information/affiliate`}>{t("footer.specials.referral")}</Link></li>
                <li><Link href={`/${locale}/member-level`}>{t("footer.specials.level")}</Link></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="text-yellow-400 text-xl font-bold mb-6">{t("footer.information.title")}</h3>
              <ul className="space-y-3 text-md">
                <li><Link href={`/${locale}/Security-and-Policy/terms-and-conditions`}>{t("footer.information.termsAndConditions")}</Link></li>
                <li><Link href={`/${locale}/Security-and-Policy/privacy-policy`}>{t("footer.information.privacyPolicy")}</Link></li>
                <li><Link href={`/${locale}/Security-and-Policy/cookies-policy`}>{t("footer.information.cookiesPolicy")}</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="rounded-lg shadow-md">
              {/* Section Title */}
              <h3 className="text-yellow-400 text-xl font-bold tracking-wide mb-8 text-center">
                {t("footer.followUs")}
              </h3>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6">
                {/* Line Icon */}
                <a
                  href="https://line.me" // Replace with the actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                  aria-label="Follow us on Line"
                >
                  <FontAwesomeIcon icon={faLine} className="text-white text-3xl" />
                </a>

                {/* Telegram Icon */}
                <a
                  href="https://telegram.org" // Replace with the actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                  aria-label="Follow us on Telegram"
                >
                  <FontAwesomeIcon icon={faTelegram} className="text-white text-3xl" />
                </a>

                {/* WeChat Icon */}
                <a
                  href="https://wechat.com" // Replace with the actual URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform"
                  aria-label="Follow us on WeChat"
                >
                  <FontAwesomeIcon icon={faWeixin} className="text-white text-3xl" />
                </a>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-6 text-center text-md text-gray-500">
            {t("footer.poweredBy")}
          </div>

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