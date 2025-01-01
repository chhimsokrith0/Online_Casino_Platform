"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface TabsProps {
  activeTab: "deposit" | "withdraw" | "transfer";
  setActiveTab: (tab: "deposit" | "withdraw" | "transfer") => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const t = useTranslations("wallet.tabs");

  // Index mapping for tab positions
  const tabPositions = {
    deposit: 0,
    withdraw: 1,
    transfer: 2,
  };

  return (
    <div className="relative flex items-center justify-between bg-gray-800 rounded-full p-1 shadow-md">
      {/* Active Tab Background */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-md"
        initial={{ x: `${tabPositions[activeTab] * 100}%` }}
        animate={{ x: `${tabPositions[activeTab] * 100}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Tab Buttons */}
      <div className="relative z-10 flex w-full text-center">
        <button
          className={`flex-1 py-2 px-4 text-sm font-bold transition-all duration-300 ${
            activeTab === "deposit" ? "text-black" : "text-white hover:text-gray-200"
          }`}
          onClick={() => setActiveTab("deposit")}
        >
          {t("deposit")}
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-bold transition-all duration-300 ${
            activeTab === "withdraw" ? "text-black" : "text-white hover:text-gray-200"
          }`}
          onClick={() => setActiveTab("withdraw")}
        >
          {t("withdraw")}
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-bold transition-all duration-300 ${
            activeTab === "transfer" ? "text-black" : "text-white hover:text-gray-200"
          }`}
          onClick={() => setActiveTab("transfer")}
        >
          {t("transfer")}
        </button>
      </div>
    </div>
  );
};

export default Tabs;
