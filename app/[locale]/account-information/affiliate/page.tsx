"use client";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTelegram, faSkype, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import DataOverview from "./DataOverview";
import Analytics from "./Analytics";
import gsap from "gsap";
import Link from "next/link";
import WalletModal from "@/components/Navbar/WalletModal/WalletModal";


const Affiliate = () => {
    const referralLink = "https://playgame168.co?ref_code=IP7MSaJ9aH";
    const referralCode = "IP7MSaJ9aH";
    const containerRef = useRef<HTMLDivElement>(null);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power4.out" }
            );
        }
    })

    return (
        <>
            <div ref={containerRef}>
                <div className="p-6 bg-gray-900 rounded-lg text-white shadow-lg">
                    {/* Header */}
                    <div className="grid grid-cols-3 gap-6 items-center mb-6">
                        <div
                            className="flex flex-col justify-center items-center rounded-lg p-4 relative overflow-hidden"
                            style={{
                                backgroundColor: "rgba(128, 0, 128, 0.9)", // Adds a slight purple tint overlay
                            }}
                        >
                            {/* Animated Background */}
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733999993/bganimation_cyse5y.gif"
                                alt="Background Animation"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                <h2 className="text-sm text-gray-300">Your income today</h2>
                                <span className="text-3xl font-bold text-yellow-500">0.00฿</span>
                            </div>
                        </div>


                        <div>
                            <p className="text-sm text-gray-400">Total Referral</p>
                            <p className="text-lg font-bold text-yellow-500">0.00฿</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Referral Click</p>
                            <p className="text-lg font-bold text-yellow-500">0</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Turnover</p>
                            <p className="text-lg font-bold text-yellow-500">0.00฿</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Cashback</p>
                            <p className="text-lg font-bold text-yellow-500">0.00฿</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Total Member</p>
                            <p className="text-lg font-bold text-yellow-500">0</p>
                        </div>
                    </div>

                    {/* Referral Link */}
                    <div className="mb-6">
                        <div className="mb-4">
                            <p className="text-sm text-gray-400">Referral Link</p>
                            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                                <input
                                    type="text"
                                    value={referralLink}
                                    readOnly
                                    className="flex-1 bg-transparent text-gray-300 focus:outline-none"
                                />
                                <button
                                    onClick={() => copyToClipboard(referralLink)}
                                    className="text-yellow-500 hover:text-yellow-400 transition"
                                >
                                    <FontAwesomeIcon icon={faCopy} />
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm text-gray-400">Referral Code</p>
                            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                                <input
                                    type="text"
                                    value={referralCode}
                                    readOnly
                                    className="flex-1 bg-transparent text-gray-300 focus:outline-none"
                                />
                                <button
                                    onClick={() => copyToClipboard(referralCode)}
                                    className="text-yellow-500 hover:text-yellow-400 transition"
                                >
                                    <FontAwesomeIcon icon={faCopy} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-6">
                        Copy your referral code or link to your friends, and when they register and play the game, you get a rebate.
                    </p>

                    {/* Invite and Transfer */}
                    <div className="flex items-center justify-between">
                        {/* Invite Friends Section */}
                        <div>
                            <p className="text-sm text-gray-400 mb-3">Invite Friends</p>
                            <div className="flex gap-4">
                                <Link
                                    href="https://www.facebook.com/" // Change the link to your Facebook profile
                                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-600 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} className="text-gray-300" />
                                </Link>
                                <Link
                                    href="https://t.me/" // Telegram
                                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-400 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faTelegram} className="text-gray-300" />
                                </Link>
                                <Link
                                    href="https://www.skype.com/" // Skype
                                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-500 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faSkype} className="text-gray-300" />
                                </Link>
                                <Link
                                    href="https://web.whatsapp.com/" // WhatsApp
                                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-green-500 transition transform hover:scale-105"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-gray-300" />
                                </Link>
                            </div>
                        </div>

                        {/* Transfer Button */}
                        <button onClick={handleOpenModal} className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow hover:shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-105">
                            Transfer
                        </button>
                    </div>

                </div>
                <br />
                <DataOverview />
                <br />
                <Analytics />

                {/* Wallet Modal */}
                <WalletModal isOpen={isModalVisible} onClose={handleCloseModal} />
            </div>
        </>
    );
};

export default Affiliate;
