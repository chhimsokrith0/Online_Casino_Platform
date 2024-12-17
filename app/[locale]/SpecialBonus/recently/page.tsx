"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "@/components/Sidebar/SidebarContext";

const FavouriteGames = () => {
    const games = [
        {
            id: 1,
            title: "Ways of the Qilin",
            provider: "PGSoft",
            image: "https://cdn.ifuse.games/178016022787c6e77330dfcb6df3b44d", // Replace with the actual image URL
        },
        {
            id: 2,
            title: "Lucky Neko",
            provider: "PGSoft",
            image: "https://cdn.zgaggregator.com/17d981646392b22c46835d4525cd97fd", // Replace with the actual image URL
        },
        {
            id: 3,
            title: "Mahjong Ways 2",
            provider: "PGSoft",
            image: "https://cdn.ifuse.games/upload/thumbnail/Joker/j3wngk3efrzn6.png", // Replace with the actual image URL
        },
        {
            id: 4,
            title: "Treasures of Aztec",
            provider: "PGSoft",
            image: "https://cdn.ifuse.games/178c5faed8e0dd25818cf40d36e93462", // Replace with the actual image URL
        },
        {
            id: 5,
            title: "Ninja Raccoon Frenzy",
            provider: "PGSoft",
            image: "https://cdn.ifuse.games/upload/thumbnail/Joker/t656f48j75z6a.png", // Replace with the actual image URL
        },
    ];

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const { isCollapsed } = useSidebar();
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
        <div className={`max-w-[1200px] mx-auto p-4 sm:p-8 ${isCollapsed ? "ml-[4rem]" : ""}`}>
            {/* Breadcrumb */}
            <nav className="text-gray-400 text-sm mb-4">
                <Link href="/">
                    <span className="cursor-pointer hover:text-gray-200">Home</span>
                </Link>{" "}
                / <span className="text-gray-200">Recently Play</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-white bg-black p-1 rounded-full" />
                Recently Played
            </h1>


            {/* Games List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleLeave(index)}
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative group"
                    >
                        {/* Favorite Icon */}
                        <div
                            className="absolute top-2 right-2 z-10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                            onClick={() => toggleFavorite(game.id)}
                        >
                            <span
                                className={`text-2xl ${favorites.includes(game.id) ? "text-red-500" : "text-gray-400"
                                    }`}
                            >
                                ❤
                            </span>
                        </div>

                        {/* Game Image */}
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay for Game Details */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                        </div>

                        {/* Game Details */}
                        <div className="p-3">
                            <h3 className="text-md font-semibold truncate">{game.title}</h3>
                            <p className="text-sm text-gray-400">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavouriteGames;
