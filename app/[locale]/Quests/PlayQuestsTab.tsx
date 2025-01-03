"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import QuestDetailsPage from "./QuestDetailsPage";
import { useTranslations } from "next-intl";
import "./style.css"
const PlayQuestsTab: React.FC = () => {
  const [showDetailsPage, setShowDetailsPage] = useState(false);
  const t = useTranslations("questsHub.adventureSection");
  const carouselItems = [
    {
      title: t("promotion.title"),
      description: t("promotion.description"),
      image: "https://storage.googleapis.com/playgame168/quest_images/2c305a89-8637-4de5-9a96-6481c8b653db.webp",
      backgroundImage:
        "https://storage.googleapis.com/playgame168/quest_images/82eacc57-bc0a-4ce4-b7ef-0fdc035b1a91.webp",
    },
  ];
  if (showDetailsPage) {
    return <QuestDetailsPage onBack={() => setShowDetailsPage(false)} />;
  }
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 overflow-y-auto scrollbar-hide"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage:
          "url('https://cdn.i-gamingplatform.com/member_assets/ContainerQuestBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "700px",
        borderRadius: "10px",
      }}
    >
      {/* Header */}
      <section id="header" className="text-center mb-6">
        <span className="relative">
          <img
            className="w-[450px] inline-block"
            src="https://cdn.i-gamingplatform.com/member_assets/ribbon.png"
            alt="Ribbon"
          />
          <div className="absolute inset-0 flex justify-center items-center font-semibold text-lg sm:text-xl text-white">
            {t("title")} <span className="text-yellow-400 mx-2">{t("title1")}</span>
          </div>
        </span>
        <div className="text-sm text-gray-300 mt-2">
          {t("subtitle")}
        </div>
      </section>

      {/* Carousel Section */}
      <motion.div
        className="scrollable bg-secondary p-4 rounded-xl h-full min-h-[350px] max-h-[450px] w-full max-w-[600px] mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <section className="carousel h-full flex flex-col gap-4">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="carousel__slide flex flex-col justify-between bg-cover bg-center rounded-lg p-4 text-center w-full h-auto"
              style={{
                backgroundImage: `url('${item.backgroundImage}')`,
              }}
            >
              <div>
                <div className="text-sm font-bold text-white truncate">
                  {item.title}
                </div>
                <div className="text-sm text-gray-300 line-clamp-2 mt-2 h-9">
                  {item.description}
                </div>
              </div>
              <div className="p-6">
                <div className="max-w-[210px] max-h-[210px] w-full mx-auto">
                  <img
                    className="pulse infinite w-full h-full object-contain"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="inline-block">
                <motion.button
                  onClick={() => setShowDetailsPage(true)}
                  className="w-60 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                >
                  Join In
                </motion.button>
              </div>
            </div>
          ))}
        </section>
      </motion.div>
    </motion.div>
  );
};

export default PlayQuestsTab;
