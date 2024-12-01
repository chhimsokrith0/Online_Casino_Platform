"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/assets/img-newgames/1.png";
import img2 from "@/assets/img-newgames/2.png";
import { useTranslations } from "next-intl";


const NewGames: React.FC = () => {

    const t = useTranslations("newGames");

    const newGames = [
        { id: 1, title: t("games.spiritOfTheLake"), provider: t("provider"), image: img1 },
        { id: 2, title: t("games.twinWinsMystery"), provider: t("provider"), image: img2 },
    ];


    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-semibold flex items-center space-x-2">
                    <span role="img" aria-label="lightning">
                        ⚡
                    </span>
                    <span> {t("title")} </span>
                </h2>
                <button className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                    <span>{t("seeAll")}</span>
                    <span className="font-bold">➤</span>
                </button>
            </div>

            {/* Game Cards
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {newGames.map((game) => (
                    <div
                        key={game.id}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative w-full h-40">
                            <Image
                                src={game.image}
                                alt={game.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                            <div className="absolute top-2 right-2 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">🎲</span>
                            </div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-white text-sm font-semibold truncate">{game.title}</h3>
                            <p className="text-gray-400 text-xs mt-1">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div> */}


            {/* Mobile & Desktop View */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {newGames.map((game, index) => (
                    <div
                        key={index}
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

export default NewGames;
