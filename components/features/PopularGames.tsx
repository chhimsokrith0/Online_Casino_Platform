"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import img1 from "@/assets/img-popular/1.png";
import img2 from "@/assets/img-popular/2.png";
import img3 from "@/assets/img-popular/3.png";
import img4 from "@/assets/img-popular/4.png";
import img5 from "@/assets/img-popular/5.png";
import img6 from "@/assets/img-popular/6.png";

import { useTranslations } from "next-intl";

const PopularGames: React.FC = () => {
    const t = useTranslations("popularGames");

    // Example game data
    const games = [
        { id: 1, title: t("games.jewelMania"), provider: t("provider"), image: img1 },
        { id: 2, title: t("games.hotFruitsOnFire"), provider: t("provider"), image: img2 },
        { id: 3, title: t("games.barsAndBells"), provider: t("provider"), image: img3 },
        { id: 4, title: t("games.reelReelHot"), provider: t("provider"), image: img4 },
        { id: 5, title: t("games.spiritOfTheLake"), provider: t("provider"), image: img5 },
        { id: 6, title: t("games.twinWinsMystery"), provider: t("provider"), image: img6 },
    ];

    const gameRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animate cards on entrance
        gsap.fromTo(
            gameRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
        );
    }, []);

    const handleHover = (index: number) => {
        const card = gameRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleLeave = (index: number) => {
        const card = gameRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-semibold flex items-center space-x-2">
                    <span role="img" aria-label="fire">
                        🔥
                    </span>
                    <span> {t("title")} </span>
                </h2>
                <button className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                    <span>{t("seeAll")}</span>
                    <span className="font-bold">➤</span>
                </button>
            </div>

            {/* Mobile & Desktop View */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) gameRefs.current[index] = el; // Assign each card's ref
                        }} // Assign ref to each game card
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleLeave(index)}
                        className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Game Image */}
                        <img
                            src={game.image.src}
                            alt={game.title}
                            className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Overlay for Game Details */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button className="px-2 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full hover:bg-yellow-500 transition">
                                Play Now
                            </button>
                        </div>
                        {/* Game Details */}
                        <div className="p-2">
                            <h3 className="text-sm font-medium text-white truncate">{game.title}</h3>
                            <p className="text-xs text-gray-400 truncate">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularGames;
