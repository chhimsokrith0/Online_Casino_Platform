"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import img1 from "@/assets/img-live-casino/1.png";
import img2 from "@/assets/img-live-casino/2.jpg";
import img3 from "@/assets/img-live-casino/3.jpg";
import img4 from "@/assets/img-live-casino/4.png";
import img5 from "@/assets/img-live-casino/5.png";
import img6 from "@/assets/img-live-casino/6.png";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import Link from "next/link";

const LiveCasinoSection: React.FC = () => {
    const { data: session } = useSession();
    const t = useTranslations("liveCasino");

    const liveCasinoGames = [
        {
            id: 1,
            name: t("games.pragmaticLive"),
            provider: t("providers.pragmaticPlay"),
            image: img1,
        },
        {
            id: 2,
            name: t("games.baccaratC08"),
            provider: t("providers.sa"),
            image: img2,
        },
        {
            id: 3,
            name: t("games.baccarat"),
            provider: t("providers.aeSexy"),
            image: img3,
        },
        {
            id: 4,
            name: t("games.dreamGaming"),
            provider: t("providers.dreamGaming"),
            image: img4,
        },
        {
            id: 5,
            name: t("games.topGamesLobby"),
            provider: t("providers.evolutionGaming"),
            image: img5,
        },
        {
            id: 6,
            name: t("games.liveCasino"),
            provider: t("providers.weGaming"),
            image: img6,
        },
    ];

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        // GSAP entrance animation
        gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    const handleHover = (index: number) => {
        const card = cardRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleLeave = (index: number) => {
        const card = cardRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
    };

    const toggleFavorite = (gameId: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(gameId)
                ? prevFavorites.filter((id) => id !== gameId)
                : [...prevFavorites, gameId]
        );
    };

    const handleClick = (ref: HTMLDivElement | null) => {
        if (ref) {
            gsap.fromTo(
                ref,
                { scale: 1 },
                { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.out" }
            );
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-blue-500">🎲</span>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                        {t("title")}
                    </h2>
                </div>
                <Link href="/Games/all" className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                    <span>{t("seeAll")}</span>
                    <span className="font-bold">➤</span>
                </Link>
            </div>

            {/* Mobile & Desktop View */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {liveCasinoGames.map((game, index) => (
                    <div
                        key={game.id}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleLeave(index)}
                        className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Favorite Icon (Visible on Hover) */}
                        <div
                            className="absolute top-2 right-2 z-10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                            onClick={() => toggleFavorite(game.id)}
                        >
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={`text-2xl ${favorites.includes(game.id) ? "text-red-500" : "text-gray-400"
                                    }`}
                            />
                        </div>

                        {/* Game Image */}
                        <img
                            src={game.image.src}
                            alt={game.name}
                            className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay for Game Details */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {session && (
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-yellow-500 transition transform hover:scale-110 cursor-pointer shadow-lg"
                                    onClick={() => handleClick(cardRefs.current[index])}
                                >
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
                                        alt="Play"
                                        className="w-16 h-16"
                                    />
                                </div>
                            )}
                        </div>


                        {/* Game Details */}
                        <div className="p-2">
                            <h3 className="text-sm font-medium text-white truncate">
                                {game.name}
                            </h3>
                            <p className="text-xs text-gray-400 truncate">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveCasinoSection;
