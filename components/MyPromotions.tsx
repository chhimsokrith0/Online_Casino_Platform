"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import PromotionModal from "./PromotionModal"; // Import the modal

const MyPromotions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize(); // Run once on mount
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const t = useTranslations("Mypromotions");

    const promotions = [
        { title: t("cashback.description"), subtitle: t("cashback.title") },
        { title: t("rebate.description"), subtitle: t("rebate.title") },
    ];

    // Animations
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonHover = {
        scale: 1.05,
        transition: { duration: 0.2 },
    };

    return (
        <div className="max-w-[1200px] mx-auto pt-4 p-4">
            {isMobile ? (
                <motion.button
                    onClick={openModal}
                    whileHover={buttonHover}
                    className="w-full bg-gray-800 text-white flex items-center justify-between px-6 py-3 rounded-full border border-yellow-400 hover:bg-gray-700 transition"
                >
                    <span className="text-white font-semibold">{t("title")}</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-yellow-400" />
                </motion.button>
            ) : (
                <>
                    <h3 className="text-gray-400 text-lg font-bold flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faGift} className="text-yellow-400" />
                        {t("title")}
                    </h3>

                    {/* Promotions Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.2 }}
                    >
                        {promotions.map((promotion, index) => (
                            <motion.div
                                key={index}
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el;
                                }}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                                onClick={openModal}
                            >
                                <div className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faGift} className="text-pink-500 text-2xl" />
                                    <div>
                                        <p className="text-white font-semibold">{promotion.title}</p>
                                        <p className="text-gray-400 text-sm">{promotion.subtitle}</p>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-lg" />
                            </motion.div>
                        ))}
                    </motion.div>
                </>
            )}

            <AnimatePresence>
                {isModalOpen && <PromotionModal isOpen={isModalOpen} onClose={closeModal} />}
            </AnimatePresence>
        </div>
    );
};

export default MyPromotions;
