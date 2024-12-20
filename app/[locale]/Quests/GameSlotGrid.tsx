"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";


const GameSlotGrid: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const t = useTranslations("questsHub.questDetailsPage");

    const games = [
        { name: t("games.games1.name"), provider: t("games.games1.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-CM02.png" },
        { name: t("games.games2.name"), provider: t("games.games2.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-MT01.png" },
        { name: t("games.games3.name"), provider: t("games.games3.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-TW01.png" },
        { name: t("games.games4.name"), provider: t("games.games4.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-ZE01.png" },
        { name: t("games.games5.name"), provider: t("games.games5.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-TW01.png" },
        { name: t("games.games6.name"), provider: t("games.games6.provider"), image: "https://storage.googleapis.com/luxino-public/game/rich88/SlotEgyptionDeities.png" },
        { name: t("games.games7.name"), provider: t("games.games7.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-DF02.png" },
        { name: t("games.games8.name"), provider: t("games.games8.provider"), image: "https://storage.googleapis.com/luxino-public/game/spadegaming/S-FS01.png" },
        { name: t("games.games9.name"), provider: t("games.games9.provider"), image: "https://storage.googleapis.com/cdn.i-gamingplatform.com/game/rich88/SlotFortuneGems.webp" },
    ];

    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-md hover:shadow-lg">
                    {t("navigation.slotsButton")}
                </button>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder={t("navigation.searchGamesPlaceholder")}
                        className="px-4 py-2 bg-gray-800 text-white rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4a1 1 0 011-1h2a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM17 4a1 1 0 011-1h2a1 1 0 011 1v16a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM8 12h8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGames.map((game, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 items-center lg:items-start bg-gray-900 rounded-xl p-4 hover:shadow-lg transition transform hover:scale-105 overflow-hidden"
                    >
                        {/* Image Container */}
                        <div className="relative w-full lg:w-[125px] lg:min-w-[125px] rounded-2xl overflow-hidden">
                            {/* Game Image */}
                            <img
                                className="w-full h-full object-cover rounded-2xl"
                                src={game.image}
                                alt={game.name}
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/70 opacity-0 hover:opacity-100 flex items-center justify-center transition duration-300">
                                {/* Play Button */}
                                <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-lg transform hover:scale-110 transition duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14.752 11.168l-5.197-3.07A1 1 0 008 9.07v6.18a1 1 0 001.555.832l5.197-3.07a1 1 0 000-1.664z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Favorite Icon */}
                            <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 rounded-full p-1 shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-300 hover:text-red-500 transition duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20l7.682-7.318a4.5 4.5 0 00-6.364-6.364L12 4.318l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Game Info */}
                        <div className="w-full lg:w-auto max-w-full text-center lg:text-left">
                            <h3 className="text-sm font-medium truncate text-white">{game.name}</h3>
                            <p className="text-xs font-normal text-gray-400 mt-1">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameSlotGrid;
