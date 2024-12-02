"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img1 from "@/assets/img-allgames/1.png";
import img2 from "@/assets/img-allgames/2.png";
import img3 from "@/assets/img-allgames/3.png";
import img4 from "@/assets/img-allgames/4.png";
import img5 from "@/assets/img-allgames/5.png";
import img6 from "@/assets/img-allgames/6.png";
import img7 from "@/assets/img-allgames/7.png";
import img8 from "@/assets/img-allgames/8.png";
import img9 from "@/assets/img-allgames/9.png";
import img10 from "@/assets/img-allgames/10.png";
import img11 from "@/assets/img-allgames/11.png";
import img12 from "@/assets/img-allgames/12.png";

import img26 from "@/assets/img-allgames/26.png";
import img27 from "@/assets/img-allgames/27.png";
import img28 from "@/assets/img-allgames/28.png";
import img29 from "@/assets/img-allgames/29.png";
import img30 from "@/assets/img-allgames/30.png";
import img31 from "@/assets/img-allgames/31.png";
import img32 from "@/assets/img-allgames/32.png";
import img33 from "@/assets/img-allgames/33.png";
import img34 from "@/assets/img-allgames/34.png";
import img35 from "@/assets/img-allgames/35.png";
import img36 from "@/assets/img-allgames/36.png";
import img37 from "@/assets/img-allgames/37.png";

import GamesHeader from "@/components/GamesHeader/GamesHeader";

import { useTranslations } from "next-intl";


const GamesPage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const gameRefs = useRef<(HTMLDivElement | null)[]>([]);
    const t = useTranslations("allGames");
    const gamesData = [
        {
            id: 1,
            title: t("games.ninjaRaccoonFrenzy.name"),
            provider: t("games.ninjaRaccoonFrenzy.provider"),
            image: img1,
        },
        {
            id: 1,
            title: t("games.treasuresOfAztec.name"),
            provider: t("games.treasuresOfAztec.provider"),
            image: img2,
        },
        {
            id: 1,
            title: t("games.mahjongWays2.name"),
            provider: t("games.mahjongWays2.provider"),
            image: img3,
        },
        {
            id: 1,
            title: t("games.luckyNeko.name"),
            provider: t("games.luckyNeko.provider"),
            image: img4,
        },
        {
            id: 1,
            title: t("games.mahjongWays.name"),
            provider: t("games.mahjongWays.provider"),
            image: img5,
        },
        {
            id: 1,
            title: t("games.wildBountyShowdown.name"),
            provider: t("games.wildBountyShowdown.provider"),
            image: img6,
        },
        {
            id: 1,
            title: t("games.waysOfTheQilin.name"),
            provider: t("games.waysOfTheQilin.provider"),
            image: img7,
        },
        {
            id: 1,
            title: t("games.wildBandito.name"),
            provider: t("games.wildBandito.provider"),
            image: img8,
        },
        {
            id: 1,
            title: t("games.fortuneRabbit.name"),
            provider: t("games.fortuneRabbit.provider"),
            image: img9,
        },
        {
            id: 1,
            title: t("games.caishenWins.name"),
            provider: t("games.caishenWins.provider"),
            image: img10,
        },
        {
            id: 1,
            title: t("games.fortuneOx.name"),
            provider: t("games.fortuneOx.provider"),
            image: img11,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img12,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img26,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img27,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img28,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img29,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img30,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img31,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img32,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img33,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img34,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img35,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img36,
        },
        {
            id: 1,
            title: t("games.ganeshaFortune.name"),
            provider: t("games.ganeshaFortune.provider"),
            image: img37,
        },
    ];

    useEffect(() => {
        // Animate header
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.querySelector("h1"),
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
        }

        // Animate game cards
        if (gameRefs.current.length) {
            gsap.fromTo(
                gameRefs.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.2,
                }
            );
        }
    }, []);
    return (
        <div ref={sectionRef} className="max-w-[1200px] mx-auto p-4">
            <GamesHeader />

            {/* Mobile & Desktop View */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {gamesData.map((game, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) {
                                gameRefs.current[index] = el;
                            }
                        }} // Assign ref to each game card
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
                            <h3 className="text-sm font-medium text-white truncate">
                                {game.title}
                            </h3>
                            <p className="text-xs text-gray-400 truncate">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesPage;
