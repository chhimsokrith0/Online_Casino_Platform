"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

interface Challenge {
    task: string;
    amount: string;
    action: string;
    progress: number; // Add this property
    isNew?: boolean;  // Optional property for the badge
}

const UpgradeVipModal = ({ onClose }: { onClose: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rowsRef = useRef<HTMLTableRowElement[]>([]);

    const [activeTab, setActiveTab] = useState("Bronze");

    const levels = [
        {
            name: "Bronze",
            icon: "bronze_wjj7dp.png",
            challenges: [
                { task: "Increase Deposit Amount", amount: "1,000.00", action: "Deposit", progress: 50, isNew: true },
                { task: "Increase Turnover Amount", amount: "1,000.00", action: "Bet", progress: 30, isNew: false },
            ],
        },
        {
            name: "Silver",
            icon: "silver_dfjavn.png",
            challenges: [
                { task: "Increase Deposit Amount", amount: "10,000.00", action: "Deposit", progress: 20, isNew: false },
                { task: "Increase Turnover Amount", amount: "10,000.00", action: "Bet", progress: 0, isNew: true },
            ],
        },
        {
            name: "Gold",
            icon: "gold_q096hm.png",
            challenges: [],
        },
        {
            name: "Diamond",
            icon: "diamond_ivqx8m.png",
            challenges: [],
        },
        {
            name: "Platinum",
            icon: "platinum_ayncab.png",
            challenges: [],
        },
        {
            name: "Black",
            icon: "black_dd4lz1.png",
            challenges: [],
        },
    ];


    const activeLevel = levels.find(level => level.name === activeTab);

    useEffect(() => {
        // Animation for the table container
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
            );
        }

        // Animation for table rows
        rowsRef.current.forEach((row, index) => {
            if (row) {
                gsap.fromTo(
                    row,
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.3, delay: index * 0.1, ease: "power4.out" }
                );
            }
        });
    }, [activeTab]);

    return (
        <div ref={containerRef} className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-gray-900 w-4/5 max-w-4xl rounded-lg shadow-lg p-8 relative">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-white">Level Member Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faTimes} className="text-lg" />
                    </button>
                </div>

                <div className="p-6">
                    {/* Upgrade Section */}
                    <div className="mb-8 text-center">
                        <h3
                            className="relative text-2xl font-bold text-center text-yellow-500 mb-6"
                            style={{
                                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733825184/badge1.Ngjr3OAn_yhauhe.svg')`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                padding: "20px",
                            }}
                        >
                            Upgrade Your <span className="text-white">Member Level</span>
                        </h3>

                        <div className="flex justify-center space-x-6 mb-6">
                            {levels.map((level, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveTab(level.name)}
                                    className={`text-center cursor-pointer ${activeTab === level.name
                                        ? "text-yellow-500 font-bold border-b-4 border-yellow-500"
                                        : "text-gray-400 hover:text-yellow-500"
                                        }`}
                                >
                                    <img
                                        src={`https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/${level.icon}`}
                                        alt={`${level.name} Icon`}
                                        className={`w-12 h-12 mx-auto ${activeTab === level.name ? "ring-4 ring-yellow-500 rounded-full" : ""
                                            }`}
                                    />
                                    <p className="mt-2">{level.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Challenges Table */}
                    <div ref={containerRef}>
                        <h4 className="text-yellow-500 font-bold mb-4">{activeTab} Challenges</h4>
                        <table className="w-full text-left text-gray-400">
                            <thead className="bg-gray-700 text-gray-400">
                                <tr>
                                    <th className="p-4 text-sm">Challenges</th>
                                    <th className="p-4 text-sm">Progress</th>
                                    <th className="p-4 text-sm text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeLevel?.challenges.map((challenge, index) => (
                                    <tr
                                        key={index}
                                        className="odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-600"
                                    >
                                        <td className="p-4 flex items-center gap-3">
                                            <img
                                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733818625/gift.BcLrywuT_j6dl2k.svg"
                                                alt="Icon"
                                                className="w-6 h-6"
                                            />
                                            <span>
                                                {challenge.task}{" "}
                                                <span className="text-yellow-500 font-medium">
                                                    {challenge.amount} to Level Up
                                                </span>
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="relative bg-gray-700 h-2 rounded-full">
                                                <div
                                                    className="absolute top-0 left-0 bg-yellow-500 h-full rounded-full transition-all duration-500 ease-in-out"
                                                    style={{ width: `${challenge.progress}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-gray-400 text-xs mt-2">
                                                {challenge.progress}% Complete
                                            </p>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button
                                                className={`${challenge.action === "Deposit" || challenge.action === "Bet"
                                                    ? "bg-yellow-500"
                                                    : "bg-gray-500 cursor-not-allowed"
                                                    } text-black px-6 py-2 rounded-full shadow hover:bg-yellow-600 relative transition-all`}
                                            >
                                                {challenge.action}
                                                <span
                                                    className="absolute top-0 right-0 -mt-2 -mr-2 w-3 h-3 bg-red-500 rounded-full"
                                                    style={{ display: challenge.isNew ? "block" : "none" }}
                                                ></span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpgradeVipModal;
