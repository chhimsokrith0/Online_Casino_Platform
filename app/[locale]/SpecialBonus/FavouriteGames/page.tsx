"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const FavouriteGames = () => {
    const games = [
        {
            id: 1,
            title: "Ways of the Qilin",
            provider: "PGSoft",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010604/5_yxhtti.png", // Replace with the actual image URL
        },
        {
            id: 2,
            title: "Lucky Neko",
            provider: "PGSoft",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010602/1_ncyagu.png", // Replace with the actual image URL
        },
        {
            id: 3,
            title: "Mahjong Ways 2",
            provider: "PGSoft",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010603/2_w9anty.png", // Replace with the actual image URL
        },
        {
            id: 4,
            title: "Treasures of Aztec",
            provider: "PGSoft",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733743006/3_audfff.jpg", // Replace with the actual image URL
        },
        {
            id: 5,
            title: "Ninja Raccoon Frenzy",
            provider: "PGSoft",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733741827/635_z5flqd.png", // Replace with the actual image URL
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
        <div className="max-w-[1200px] mx-auto p-4 sm:p-8">
            {/* Breadcrumb */}
            <nav className="text-gray-400 text-sm mb-4">
                <Link href="/">
                    <span className="cursor-pointer hover:text-gray-200">Home</span>
                </Link>{" "}
                / <span className="text-gray-200">Favourite Games</span>
            </nav>

            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-red-500">❤</span> Favourite Games
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
