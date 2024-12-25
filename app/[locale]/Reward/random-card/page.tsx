"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import FreeSpins from "./Tab/FreeSpins";
import TabRandomCard from "./Tab/RandomCard";
import { useSidebar } from "@/components/Sidebar/SidebarContext";

const RandomCard = () => {

    const [activeTab, setActiveTab] = useState<"RandomCard" | "FreeSpins">("RandomCard");
    const buttonRefs = useRef<HTMLButtonElement[]>([]);
    const { isCollapsed } = useSidebar();

    useEffect(() => {

        // GSAP Entry Animation for Buttons
        gsap.fromTo(
            buttonRefs.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.2,
                ease: "power4.out",
            }
        );
    }, []);

    const handleTabClick = (tab: "RandomCard" | "FreeSpins", index: number) => {
        setActiveTab(tab);

        // GSAP Animation for Button Click
        const button = buttonRefs.current[index];
        if (button) {
            gsap.fromTo(
                button,
                { scale: 1 },
                {
                    scale: 1.2,
                    duration: 0.2,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1,
                }
            );
        }
    };
    return (
        <>
            <div className={`${isCollapsed ? "ml-[-12rem]" : ""}`}>
                {/* Banner Section */}
                <div className={`relative`}>
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734006354/Screenshot_2024-12-12_192536_wfxtl5.png"
                        alt="Banner"
                        className="w-full h-auto"
                    />
                </div>

                {/* Rewards Section */}
                <div className="max-w-[1200px] mx-auto p-6 text-center">
                    <div className="flex justify-between items-center flex-wrap">
                        <div className="text-left">
                            <h2 className="text-2xl font-bold text-white">PlayGame168 Reward</h2>
                            <p className="text-gray-400 mt-2">
                                Experience the thrill of exclusivity with our premium selection of rewards.
                            </p>
                        </div>
                        {/* Current Points Section */}
                        <div className="bg-gray-800 px-6 py-3 rounded-full flex items-center space-x-2">
                            <p className="text-gray-300">Current Point :</p>
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733034979/eec3c896-fc98-4ed7-a4b1-c0c4d6e63e42_y0p6uo.webp"
                                alt="Diamond Icon"
                                className="w-5 h-5"
                            />
                            <span className="text-yellow-500 font-bold">800.00</span>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-4 flex justify-center bg-gray-900 rounded-full p-1 w-fit">
                        <button
                            ref={(el) => {
                                el && (buttonRefs.current[1] = el);
                            }}
                            className={`px-6 py-3 rounded-full font-bold transition focus:outline-none ${activeTab === "RandomCard"
                                ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white"
                                : "text-white hover:bg-gray-800"
                                }`}
                            onClick={() => handleTabClick("RandomCard", 0)}
                        >
                            Random Card
                        </button>
                        <button
                            ref={(el) => {
                                el && (buttonRefs.current[1] = el);
                            }}
                            className={`px-6 py-3 rounded-full font-bold transition focus:outline-none ml-2 ${activeTab === "FreeSpins"
                                ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white"
                                : "text-white hover:bg-gray-800"
                                }`}
                            onClick={() => handleTabClick("FreeSpins", 1)}
                        >
                            Free Spins
                        </button>
                    </div>

                    <br />

                    {activeTab === "RandomCard" && (
                        <TabRandomCard />

                    )}

                    {activeTab === "FreeSpins" && (
                        <FreeSpins />
                    )}


                </div>
            </div>
        </>
    );
};

export default RandomCard;
