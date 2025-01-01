"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const TransferTab: React.FC = () => {
  const t = useTranslations("wallet.transfer");
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
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.4 } },
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
        {t("transferFrom")}
      </motion.h3>
      <motion.div
        className="bg-gray-700 p-4 rounded-lg mb-4 flex justify-between"
        variants={itemVariants}
      >
        <span className="text-sm">{t("yourWallet")}: 0.00฿</span>
      </motion.div>
      <motion.button
        className="w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-sm"
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t("transferButton")}
      </motion.button>
    </motion.div>
  );
};

export default TransferTab;
