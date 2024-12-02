"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaTelegramPlane, FaLine, FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine, faTelegram, faWeixin } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations();

  const [isGameCategoryOpen, setIsGameCategoryOpen] = useState(false);
  const [isLiveCasinoOpen, setIsLiveCasinoOpen] = useState(false);
  const [isSpecialsOpen, setIsSpecialsOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);

  const gameCategoryRef = useRef<HTMLUListElement | null>(null);
  const liveCasinoRef = useRef<HTMLUListElement | null>(null);
  const specialsRef = useRef<HTMLUListElement | null>(null);
  const informationRef = useRef<HTMLUListElement | null>(null);

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

  return (
    <footer className="text-gray-300 px-4 sm:px-8 py-6 sm:py-10">
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
            <li>{t("footer.categories.demo")}</li>
            <li>{t("footer.categories.newGames")}</li>
            <li>{t("footer.categories.popular")}</li>
            <li>{t("footer.categories.cashDrops")}</li>
            <li>{t("footer.categories.jackpots")}</li>
            <li>{t("footer.categories.megaways")}</li>
            <li>{t("footer.categories.tableGames")}</li>
            <li>{t("footer.categories.allGames")}</li>
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
            <li>{t("footer.information.termsAndConditions")}</li>
            <li>{t("footer.information.privacyPolicy")}</li>
            <li>{t("footer.information.cookiesPolicy")}</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.followUs")}</h3>
          <div className="flex space-x-3 mt-4">
            {/* Line Icon */}
            <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:opacity-90 transition">
              <FontAwesomeIcon icon={faLine} className="text-white text-lg" />
            </button>
            {/* Telegram Icon */}
            <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-90 transition">
              <FontAwesomeIcon icon={faTelegram} className="text-white text-lg" />
            </button>
            {/* Chat Icon */}
            <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:opacity-90 transition">
              <FontAwesomeIcon icon={faWeixin} className="text-white text-lg" />
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
              <li>{t("footer.categories.demo")}</li>
              <li>{t("footer.categories.newGames")}</li>
              <li>{t("footer.categories.popular")}</li>
              <li>{t("footer.categories.cashDrops")}</li>
              <li>{t("footer.categories.jackpots")}</li>
              <li>{t("footer.categories.megaways")}</li>
              <li>{t("footer.categories.tableGames")}</li>
              <li>{t("footer.categories.allGames")}</li>
            </ul>
          </div>

          {/* Live Casino */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.liveCasino")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.allLiveCasino")}</li>
            </ul>
          </div>

          {/* Specials */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.specials.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.specials.quests")}</li>
              <li>{t("footer.specials.reward")}</li>
              <li>{t("footer.specials.referral")}</li>
              <li>{t("footer.specials.level")}</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.information.title")}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.information.termsAndConditions")}</li>
              <li>{t("footer.information.privacyPolicy")}</li>
              <li>{t("footer.information.cookiesPolicy")}</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.followUs")}</h3>
            <div className="flex space-x-3 mt-4">
              {/* Line Icon */}
              <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:opacity-90 transition">
                <FontAwesomeIcon icon={faLine} className="text-white text-lg" />
              </button>
              {/* Telegram Icon */}
              <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-90 transition">
                <FontAwesomeIcon icon={faTelegram} className="text-white text-lg" />
              </button>
              {/* Chat Icon */}
              <button className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center hover:opacity-90 transition">
                <FontAwesomeIcon icon={faWeixin} className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          {t("footer.poweredBy")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
