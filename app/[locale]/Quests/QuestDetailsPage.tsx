"use client";

import React from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import GameSlotGrid from "./GameSlotGrid";
import { useTranslations } from "next-intl";
import "./style.css"

interface QuestDetailsPageProps {
  onBack: () => void;
}

const QuestDetailsPage: React.FC<QuestDetailsPageProps> = ({ onBack }) => {
  const t = useTranslations("questsHub.questDetailsPage");

  return (
    <div
      className="
        overflow-y-auto scrollbar-hide 
        min-h-screen 
        bg-cover bg-center bg-no-repeat 
        rounded-md
      "
      style={{
        backgroundImage:
          "url('https://cdn.i-gamingplatform.com/member_assets/ContainerQuestBg.png')",
      }}
    >
      <motion.div
        className="rounded-xl p-4 bg-gray-900 text-white w-full max-w-4xl mx-auto shadow-lg overflow-y-auto scrollbar-hide "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <button
            className="flex items-center text-yellow-400 text-lg font-bold hover:underline"
            onClick={onBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <CountdownTimer targetDate="2025-12-31T23:59:59" />
        </div>

        {/* Progress Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="lg:w-[60%] w-full">
              <div className="hidden lg:block">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-300">
                    {t("progressSection.title")}
                  </span>
                  <div className="text-sm font-medium text-gray-500 flex items-center">
                    <span className="text-yellow-400 font-bold">0</span>
                    <span className="ml-1">/ 100%</span>
                  </div>
                </div>
                <div className="relative h-4 w-full bg-gray-900 rounded-full overflow-hidden shadow-md">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: "0%" }}
                  />
                </div>
                <div className="text-right text-xs text-gray-400 mt-1 font-medium">
                  Progress: 0%
                </div>
              </div>
            </div>

            <div className="w-[40%] text-right hidden lg:block">
              <button
                disabled
                className="opacity-70 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 h-[40px] px-6 py-2 rounded-full text-sm font-semibold text-black shadow-md transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 11l3 3L22 4M2 20h.01M12 20h.01M4 20h.01M9 20h.01M16 20h.01M22 20h.01"
                    />
                  </svg>
                  {t("progressSection.claimButton.text")}
                </span>
              </button>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center">
            <div className="min-w-[150px] w-[150px] h-[150px] relative flex justify-center items-center">
              <div
                className="size-full w-full flex justify-evenly"
                style={{
                  background:
                    "url('https://storage.googleapis.com/playgame168/quest_images/1119e2c4-1e64-4150-91c2-ce07341187e8.webp') center center / 100% no-repeat",
                }}
              >
                <img
                  className="h-full object-contain"
                  width="60%"
                  src="https://storage.googleapis.com/playgame168/quest_images/e384c1f1-a6e7-4edf-a364-e829f2b63fa1.webp"
                  alt="Reward"
                />
              </div>
            </div>

            {/* Conditions */}
            <div className="text-sm font-semibold w-full flex flex-col gap-2">
              <div className="flex justify-between w-full">
                <span>{t("conditionsSection.Turnover")}</span>
                <span className="text-yellow-400">0.00฿ / 30.00K฿</span>
              </div>
              <div className="flex justify-between w-full">
                <span>{t("conditionsSection.CompletedBet")}</span>
                <span className="text-yellow-400">0 / 100</span>
              </div>
              <hr className="border-gray-600 w-full my-2" />
              <div>
                <span>{t("conditionsSection.title")}</span>
                <ul className="list-disc ml-4 text-gray-400">
                  <li>{t("conditionsSection.conditionsList.1")}</li>
                  <li>{t("conditionsSection.conditionsList.2")}</li>
                  <li>{t("conditionsSection.conditionsList.3")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-5 text-sm font-medium text-gray-400">
            <p>💎 {t("activityDescription.title")} 💎</p>
            <p>{t("activityDescription.subtitle")}</p>
            <p>
              {t("activityDescription.steps.1")}
              <br />
              {t("activityDescription.steps.2")}
            </p>
            <p>{t("activityDescription.steps.3")}</p>
          </div>
        </div>

        {/* Game Slot Grid */}
        <GameSlotGrid />
      </motion.div>
    </div>
  );
};

export default QuestDetailsPage;
