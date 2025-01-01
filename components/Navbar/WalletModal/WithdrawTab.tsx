"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const WithdrawTab: React.FC = () => {
  const [note, setNote] = useState(""); // State to track the note content
  const maxCharacters = 300; // Set max character limit
  const t = useTranslations("wallet.withdraw");
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxCharacters) {
      setNote(e.target.value); // Update note content if within the character limit
    }
  };

  const characterCount = note.length; // Current character count

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.6 } },
  };

  return (
    <motion.div
      className="overflow-y-scroll h-full scrollbar-hide"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        className="text-sm text-gray-400 mb-4"
        variants={itemVariants}
      >
        {t("withdrawAmount")}
      </motion.h3>
      <motion.div
        className="bg-gray-700 p-4 rounded-lg mb-4"
        variants={itemVariants}
      >
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">{t("conditions.depositTurnover")}:</p>
          <span className="text-yellow-400">0.00฿ / 0.00฿</span>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">{t("conditions.turnover")}:</p>
          <span className="text-yellow-400">0.00฿ / 0.00฿</span>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">{t("conditions.turnWinlose")}:</p>
          <span className="text-yellow-400">0.00฿ / 0.00฿</span>
        </div>
      </motion.div>

      <motion.h3
        className="text-sm text-gray-400 mb-4"
        variants={itemVariants}
      >
        {t("withdrawAmount")}
      </motion.h3>
      <motion.div
        className="bg-gray-700 p-4 rounded-lg mb-4"
        variants={itemVariants}
      >
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">{t("yourWallet")}:</p>
          <span className="text-gray-300">0.00฿</span>
        </div>
        <input
          type="text"
          value="0"
          className="bg-gray-800 w-full p-2 rounded-md text-white focus:ring-2 focus:ring-yellow-500"
          readOnly
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>{t("minMax")}</span>
          <span>{t("balance")}: 0.00฿</span>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-2 mb-4"
        variants={itemVariants}
      >
        {["Min", "25%", "50%", "Max"].map((label) => (
          <button
            key={label}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            {label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="mt-6"
        variants={itemVariants}
      >
        <h3 className="text-sm text-gray-400 mb-2">{t("note")}</h3>
        <div className="relative bg-gray-700 p-4 rounded-lg">
          <textarea
            className="bg-gray-800 w-full h-24 p-3 text-sm text-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder={t("notePlaceholder")}
            value={note}
            onChange={handleNoteChange}
          ></textarea>
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
            <span>{characterCount}</span> / {maxCharacters}
          </div>
        </div>
      </motion.div>
      <br />
      <motion.button
        className="w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-sm"
        variants={buttonVariants}
      >
        {t("withdrawButton")}
      </motion.button>
    </motion.div>
  );
};

export default WithdrawTab;
