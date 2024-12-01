"use client";

import React, { useState } from "react";
import { FaTelegramPlane, FaLine, FaCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = ({locale}: {locale: string}) => {
  const t = useTranslations();
  // State for collapsible sections (for mobile)
  const [isGameCategoryOpen, setIsGameCategoryOpen] = useState(false);
  const [isLiveCasinoOpen, setIsLiveCasinoOpen] = useState(false);
  const [isSpecialsOpen, setIsSpecialsOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);

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
            { t("footer.gameCategory") }
            <span>
              {isGameCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {isGameCategoryOpen && (
            <ul className="space-y-2 text-sm">
              <li>Demo</li>
              <li>New Games</li>
              <li>Popular</li>
              <li>Cash Drops</li>
              <li>Jackpots</li>
              <li>Megaways</li>
              <li>Table Games</li>
              <li>All Games</li>
            </ul>
          )}
        </div>

        {/* Live Casino */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsLiveCasinoOpen(!isLiveCasinoOpen)}
          >
            Live Casino
            <span>
              {isLiveCasinoOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {isLiveCasinoOpen && (
            <ul className="space-y-2 text-sm">
              <li>All Live Casino</li>
            </ul>
          )}
        </div>

        {/* Specials */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsSpecialsOpen(!isSpecialsOpen)}
          >
            Specials
            <span>
              {isSpecialsOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {isSpecialsOpen && (
            <ul className="space-y-2 text-sm">
              <li>Quests</li>
              <li>Reward</li>
              <li>Referral</li>
              <li>Level</li>
            </ul>
          )}
        </div>

        {/* Information */}
        <div>
          <div
            className="flex justify-between items-center text-yellow-400 text-lg font-bold mb-2 cursor-pointer"
            onClick={() => setIsInformationOpen(!isInformationOpen)}
          >
            Information
            <span>
              {isInformationOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {isInformationOpen && (
            <ul className="space-y-2 text-sm">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
            </ul>
          )}
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400">
              <FaLine size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaTelegramPlane size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaCircle size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          Powered By <span className="text-yellow-400 font-bold">Rith CT</span>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-5 gap-8 mb-6">
          {/* Game Category */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{ t("footer.gameCategory") }</h3>
            <ul className="space-y-2 text-sm">
              <li>{ t("footer.categories.demo") }</li>
              <li>{ t("footer.categories.newGames") }</li>
              <li>{ t("footer.categories.popular") }</li>
              <li>{ t("footer.categories.cashDrops") }</li>
              <li>{ t("footer.categories.jackpots") }</li>
              <li>{ t("footer.categories.megaways") }</li>
              <li>{ t("footer.categories.tableGames") }</li>
              <li>{ t("footer.categories.allGames") }</li>
            </ul>
          </div>

          {/* Live Casino */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4"> {t("footer.liveCasino")} </h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.allLiveCasino")}</li>
            </ul>
          </div>

          {/* Specials */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">Specials</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.specials.quests")}</li>
              <li>{t("footer.specials.reward")}</li>
              <li>{t("footer.specials.referral")}</li>
              <li>{t("footer.specials.level")}</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>{t("footer.information.termsAndConditions")}</li>
              <li>{t("footer.information.privacyPolicy")}</li>
              <li>{t("footer.information.cookiesPolicy")}</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-yellow-400 text-lg font-bold mb-4">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <FaLine size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaTelegramPlane size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <FaCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          {/* Powered By <span className="text-yellow-400 font-bold">Rith CT</span> */}
          {t("footer.poweredBy")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
