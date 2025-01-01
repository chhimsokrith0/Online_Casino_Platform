"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const DepositTab: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const t = useTranslations("wallet.deposit");

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="overflow-y-scroll h-full scrollbar-hide"
    >
      <h3 className="text-sm p-2"> {t("paymentMethod")} </h3>
      <motion.div
        className="space-y-4 p-4"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Option 1: ABA Bank */}
        {selectedMethod === null || selectedMethod === "ABA Bank" ? (
          <motion.div
            onClick={() => setSelectedMethod("ABA Bank")}
            className={`bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition ${
              selectedMethod === "ABA Bank" ? "ring-2 ring-yellow-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734270594/aba_cu3ptz.png"
                alt="ABA Bank"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold">{t("methods.abaBank")}</span>
            </div>
          </motion.div>
        ) : null}

        {/* Option 2: ACLADA */}
        {selectedMethod === null || selectedMethod === "ACLADA" ? (
          <motion.div
            onClick={() => setSelectedMethod("ACLADA")}
            className={`bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition ${
              selectedMethod === "ACLADA" ? "ring-2 ring-yellow-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734270672/ac_bnshyj.jpg"
                alt="ACLADA Bank"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold">{t("methods.acledaBank")}</span>
            </div>
          </motion.div>
        ) : null}

        {/* Option 3: QR ABA Dynamic */}
        {selectedMethod === null || selectedMethod === "QR ABA Dynamic" ? (
          <motion.div
            onClick={() => setSelectedMethod("QR ABA Dynamic")}
            className={`bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition ${
              selectedMethod === "QR ABA Dynamic" ? "ring-2 ring-yellow-500" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734270674/qr_bkvg2k.jpg"
                alt="QR ABA Dynamic"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold">{t("methods.qrCodeAbaBank")}</span>
            </div>
          </motion.div>
        ) : null}
      </motion.div>

      {/* Details Section */}
      {selectedMethod && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <h3 className="text-sm text-gray-400 mb-2">{t("DepositAmount.title")}</h3>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>{t("DepositAmount.yourWallet")}:</span>
              <span>{t("DepositAmount.buttons.100")}</span>
            </div>
            <input
              type="text"
              value="100"
              className="bg-gray-800 w-full p-2 rounded-md text-white focus:ring-2 focus:ring-yellow-500"
              readOnly
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>{t("DepositAmount.minMax")}</span>
              <span>{t("DepositAmount.balance")}: {t("DepositAmount.buttons.100")}</span>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            {[t("DepositAmount.buttons.100"), t("DepositAmount.buttons.300"), t("DepositAmount.buttons.500"), t("DepositAmount.buttons.1000")].map((amount) => (
              <button
                key={amount}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                {amount}
              </button>
            ))}
          </div>

          <div className="border border-red-500 text-xs text-red-500 p-4 rounded-lg">
            <p>{t("DepositAmount.instructions.title")}</p>
            <ul className="list-disc ml-4 mt-2">
              <li>{t("DepositAmount.instructions.points.1")}</li>
              <li>{t("DepositAmount.instructions.points.2")}</li>
              <li>{t("DepositAmount.instructions.points.3")}</li>
              <li>{t("DepositAmount.instructions.points.4")}</li>
            </ul>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setSelectedMethod(null)}
              className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
            >
              {t("DepositAmount.backButton")}
            </button>
            <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-600">
            {t("DepositAmount.nextButton")}
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DepositTab;
