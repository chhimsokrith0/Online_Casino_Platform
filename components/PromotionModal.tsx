"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

interface PromotionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const rowRefs = useRef<HTMLTableRowElement[]>([]);
    const t = useTranslations("Mypromotions");

    useEffect(() => {
        if (isOpen && modalRef.current) {
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -50, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
            );

            gsap.fromTo(
                rowRefs.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        if (modalRef.current) {
            gsap.to(modalRef.current, {
                opacity: 0,
                y: -50,
                scale: 0.8,
                duration: 0.5,
                ease: "power3.in",
                onComplete: onClose,
            });
        } else {
            onClose();
        }
    };

    if (!isOpen) return null;

    const levels = [
        { bonus: t("promotionDetails.levels.bronze.bonus"), level: t("promotionDetails.levels.bronze.level"), dailyLimit: t("promotionDetails.levels.bronze.dailyLimit") },
        { bonus: t("promotionDetails.levels.silver.bonus"), level: t("promotionDetails.levels.silver.level"), dailyLimit: t("promotionDetails.levels.silver.dailyLimit") },
        { bonus: t("promotionDetails.levels.gold.bonus"), level: t("promotionDetails.levels.gold.level"), dailyLimit: t("promotionDetails.levels.gold.dailyLimit") },
        { bonus: t("promotionDetails.levels.diamond.bonus"), level: t("promotionDetails.levels.diamond.level"), dailyLimit: t("promotionDetails.levels.diamond.dailyLimit") },
        { bonus: t("promotionDetails.levels.platinum.bonus"), level: t("promotionDetails.levels.platinum.level"), dailyLimit: t("promotionDetails.levels.platinum.dailyLimit") },
        { bonus: t("promotionDetails.levels.black.bonus"), level: t("promotionDetails.levels.black.level"), dailyLimit: t("promotionDetails.levels.black.dailyLimit") },
    ];

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200] backdrop-blur-sm"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                className="bg-gray-800 w-[90%] max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl text-white font-bold">{t("promotionDetails.title")}</h3>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="text-gray-400 cursor-pointer hover:text-white"
                        onClick={handleClose}
                    />
                </div>

                <div>
                    <img
                        src={t("promotionDetails.banner")}
                        alt="Promotion Banner"
                        className="w-full rounded-lg mb-4"
                    />
                    <h4 className="text-white text-lg font-bold mb-2">{t("promotionDetails.cashbackTitle")}</h4>
                    <p className="text-gray-300 mb-4">{t("promotionDetails.description")}</p>
                    <table className="w-full text-gray-400 mb-4">
                        <thead>
                            <tr>
                                <th className="text-left p-2 border-b border-gray-700">{t("promotionDetails.bonus")}</th>
                                <th className="text-left p-2 border-b border-gray-700">{t("promotionDetails.memberLevel")}</th>
                                <th className="text-left p-2 border-b border-gray-700">{t("promotionDetails.dailyLimit")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {levels.map((row, index) => (
                                <tr
                                    key={index}
                                    ref={(el) => {
                                        if (el) rowRefs.current[index] = el;
                                    }}
                                >
                                    <td className="p-2 border-b border-gray-700">{row.bonus}</td>
                                    <td className="p-2 border-b border-gray-700">{row.level}</td>
                                    <td className="p-2 border-b border-gray-700">{row.dailyLimit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-gray-400">{t("promotionDetails.note")}</p>
                </div>
            </div>
        </div>
    );
};

export default PromotionModal;
