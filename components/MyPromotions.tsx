"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

// Modal Component
const PromotionModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const rowRefs = useRef<HTMLTableRowElement[]>([]);

    useEffect(() => {
        if (isOpen && modalRef.current) {
            // Animate modal opening
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: -50, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
            );

            // Animate rows inside the table
            gsap.fromTo(
                rowRefs.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        if (modalRef.current) {
            // Animate modal closing
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

    const promotions = [
        { bonus: "2%", level: "Bronze", limit: "500 บาท" },
        { bonus: "3%", level: "Silver", limit: "700 บาท" },
        { bonus: "4%", level: "Gold", limit: "1,000 บาท" },
        { bonus: "5%", level: "Diamond", limit: "1,500 บาท" },
        { bonus: "6%", level: "Platinum", limit: "2,000 บาท" },
        { bonus: "7%", level: "Black", limit: "2,500 บาท" },
    ];

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]"
            onClick={handleClose}
        >
            <div
                ref={modalRef}
                className="bg-gray-800 w-[90%] max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent modal close on inner clicks
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl text-white font-bold">Promotion Details</h3>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="text-gray-400 cursor-pointer hover:text-white"
                        onClick={handleClose}
                    />
                </div>

                {/* Modal Content */}
                <div>
                    <img
                        src="https://storage.googleapis.com/playgame168/promotion_images/25473cba-fbcf-43c2-a71b-22bff5b1ae6d.webp"
                        alt="Promotion Banner"
                        className="w-full rounded-lg mb-4"
                    />
                    <h4 className="text-white text-lg font-bold mb-2">คืนยอดเสีย (Cashback)</h4>
                    <p className="text-gray-300 mb-4">โบนัสคืนยอดเสีย สูงสุด 7% ทุกวัน! ดูรายละเอียดด้านล่าง:</p>
                    <table className="w-full text-gray-400 mb-4">
                        <thead>
                            <tr>
                                <th className="text-left p-2 border-b border-gray-700">โบนัส</th>
                                <th className="text-left p-2 border-b border-gray-700">Member Level</th>
                                <th className="text-left p-2 border-b border-gray-700">จ่ายสูงสุดต่อวัน</th>
                            </tr>
                        </thead>
                        <tbody>
                            {promotions.map((row, index) => (
                                <tr
                                    key={index}
                                    ref={(el) => {
                                        if (el) rowRefs.current.push(el);
                                    }}
                                >
                                    <td className="p-2 border-b border-gray-700">{row.bonus}</td>
                                    <td className="p-2 border-b border-gray-700">{row.level}</td>
                                    <td className="p-2 border-b border-gray-700">{row.limit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-gray-400">* คืนยอดเสียเฉพาะหลักเกณฑ์ที่ระบุไว้เท่านั้น</p>
                </div>
            </div>
        </div>
    );
};

// Main Component
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

    useEffect(() => {
        if (!isMobile && cardRefs.current.length > 0) {
            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
            );
        }
    }, [isMobile]);

    return (
        <div className="max-w-[1200px] mx-auto pt-4 p-4">
            {isMobile ? (
                <button
                    onClick={openModal}
                    className="w-full bg-gray-800 text-white flex items-center justify-between px-6 py-3 rounded-full border border-yellow-400 hover:bg-gray-700 transition"
                >
                    <span className="text-white font-semibold">My Promotions</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-yellow-400" />
                </button>
            ) : (
                <>
                    <h3 className="text-gray-400 text-lg font-bold flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faGift} className="text-yellow-400" />
                        My Promotions
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            {
                                title: "คืนยอดเสีย",
                                subtitle: "Cashback",
                            },
                            {
                                title: "คืนยอดเดิมพัน",
                                subtitle: "Rebate",
                            },
                        ].map((promotion, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el;
                                }}
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
                            </div>
                        ))}
                    </div>
                </>
            )}

            <PromotionModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default MyPromotions;
