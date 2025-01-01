"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const UpgradeVipModal = ({ onClose }: { onClose: () => void }) => {
    const [activeTab, setActiveTab] = useState("Bronze");
    const t = useTranslations("accountInformation");

    const levels = [
        {
            name: t("profile.VIPLevelModal.levels.bronze"),
            icon: "bronze_wjj7dp.png",
            challenges: [
                { task: t("profile.VIPLevelModal.challenges.list.task1.description"), amount: "1,000.00", action: "Deposit", progress: 50, isNew: true },
                { task: t("profile.VIPLevelModal.challenges.list.task2.description"), amount: "1,000.00", action: "Bet", progress: 30, isNew: false },
            ],
        },
        {
            name: t("profile.VIPLevelModal.levels.silver"),
            icon: "silver_dfjavn.png",
            challenges: [
                { task: t("profile.VIPLevelModal.challenges.list.task1.description"), amount: "10,000.00", action: "Deposit", progress: 20, isNew: false },
                { task: t("profile.VIPLevelModal.challenges.list.task2.description"), amount: "10,000.00", action: "Bet", progress: 0, isNew: true },
            ],
        },
        {
            name: t("profile.VIPLevelModal.levels.gold"),
            icon: "gold_q096hm.png",
            challenges: [],
        },
        {
            name: t("profile.VIPLevelModal.levels.diamond"),
            icon: "diamond_ivqx8m.png",
            challenges: [],
        },
        {
            name: t("profile.VIPLevelModal.levels.platinum"),
            icon: "platinum_ayncab.png",
            challenges: [],
        },
        {
            name: t("profile.VIPLevelModal.levels.black"),
            icon: "black_dd4lz1.png",
            challenges: [],
        },
    ];

    const activeLevel = levels.find((level) => level.name === activeTab);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[200] backdrop-blur-sm"
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900 w-full max-w-4xl rounded-lg shadow-lg p-4 sm:p-8 relative"
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <h2 className="text-lg sm:text-xl font-bold text-white">{t("profile.VIPLevelModal.title")}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faTimes} className="text-lg" />
                    </button>
                </div>

                <div className="p-4 sm:p-6">
                    {/* Upgrade Section */}
                    <div className="mb-6 sm:mb-8 text-center">
                        <h3
                            className="relative text-lg sm:text-2xl font-bold text-center text-yellow-500 mb-4 sm:mb-6"
                            style={{
                                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733825184/badge1.Ngjr3OAn_yhauhe.svg')`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                padding: "15px",
                            }}
                        >
                            {t("profile.VIPLevelModal.upgradeTitle")} <span className="text-white">{t("profile.VIPLevelModal.MemberLevel")}</span>
                        </h3>

                        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-6">
                            {levels.map((level, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => setActiveTab(level.name)}
                                    className={`text-center cursor-pointer ${
                                        activeTab === level.name
                                            ? "text-yellow-500 font-bold border-b-4 border-yellow-500"
                                            : "text-gray-400 hover:text-yellow-500"
                                    }`}
                                >
                                    <img
                                        src={`https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/${level.icon}`}
                                        alt={`${level.name} Icon`}
                                        className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto ${
                                            activeTab === level.name ? "ring-4 ring-yellow-500 rounded-full" : ""
                                        }`}
                                    />
                                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm">{level.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Challenges Table */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h4 className="text-yellow-500 font-bold mb-4">{activeTab} {t("profile.VIPLevelModal.challenges.title")}</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-gray-400">
                                <thead className="bg-gray-700 text-gray-400">
                                    <tr>
                                        <th className="p-3 sm:p-4 text-xs sm:text-sm">{t("profile.VIPLevelModal.challenges.th1")}</th>
                                        <th className="p-3 sm:p-4 text-xs sm:text-sm">{t("profile.VIPLevelModal.challenges.th2")}</th>
                                        <th className="p-3 sm:p-4 text-xs sm:text-sm text-right">{t("profile.VIPLevelModal.challenges.th3")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeLevel?.challenges.map((challenge, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ x: -50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1, duration: 0.4 }}
                                            className="odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-600"
                                        >
                                            <td className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                                                <img
                                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733818625/gift.BcLrywuT_j6dl2k.svg"
                                                    alt="Icon"
                                                    className="w-4 h-4 sm:w-6 sm:h-6"
                                                />
                                                <span className="text-xs sm:text-sm">
                                                    {challenge.task}{" "}
                                                    <span className="text-yellow-500 font-medium">
                                                        {challenge.amount} to Level Up
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="p-3 sm:p-4">
                                                <div className="relative bg-gray-700 h-2 rounded-full">
                                                    <motion.div
                                                        className="absolute top-0 left-0 bg-yellow-500 h-full rounded-full"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${challenge.progress}%` }}
                                                        transition={{ duration: 0.5 }}
                                                    ></motion.div>
                                                </div>
                                                <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                                                    {challenge.progress}% Complete
                                                </p>
                                            </td>
                                            <td className="p-3 sm:p-4 text-right">
                                                <Link
                                                    href={
                                                        challenge.action === "Deposit"
                                                            ? "/Games/Deposit"
                                                            : challenge.action === "Bet"
                                                            ? "/Games/slots"
                                                            : "#"
                                                    }
                                                    legacyBehavior
                                                >
                                                    <a>
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            className={`${
                                                                challenge.action === "Deposit" || challenge.action === "Bet"
                                                                    ? "bg-yellow-500"
                                                                    : "bg-gray-500 cursor-not-allowed"
                                                            } text-black px-4 py-2 sm:px-6 sm:py-2 rounded-full shadow hover:bg-yellow-600 relative transition-all text-xs sm:text-sm`}
                                                        >
                                                            {challenge.action}
                                                            <span
                                                                className="absolute top-0 right-0 -mt-1 sm:-mt-2 -mr-1 sm:-mr-2 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"
                                                                style={{ display: challenge.isNew ? "block" : "none" }}
                                                            ></span>
                                                        </motion.button>
                                                    </a>
                                                </Link>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default UpgradeVipModal;
