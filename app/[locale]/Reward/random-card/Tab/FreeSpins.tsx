
"use client";

import React, { useState } from "react";
import FreeSpinsModal from "./FreeSpinsModal";

const FreeSpins = () => {
    const [selectedBet, setSelectedBet] = useState<string | null>(null);
    const [selectedGame, setSelectedGame] = useState<{
        img: string;
        title: string;
        spins: number;
    } | null>(null);

    const games = [
        {
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010602/1_ncyagu.png",
            title: "Double Fortune",
            spins: 1,
        },
        {
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010603/2_w9anty.png",
            title: "Mahjong Ways",
            spins: 3,
        },
        {
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010603/3_mi8u5o.png",
            title: "Sweet Bonanza",
            spins: 3,
        },
        {
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010603/4_sc8f14.png",
            title: "Golden Empire",
            spins: 3,
        },
        {
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734010604/5_yxhtti.png",
            title: "Christmas Gift Rush",
            spins: 3,
        },
    ];

    const openModal = (game: { img: string; title: string; spins: number }) => {
        setSelectedGame(game);
    };

    const closeModal = () => {
        setSelectedGame(null);
        setSelectedBet(null);
    };

    return (
        <div className="mt-6">
            {/* Grid of Free Spins Games */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg flex flex-row items-center justify-between shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        <img src={game.img} alt={game.title} className="w-36 h-36 rounded-lg" />
                        <div>
                            <h3 className="text-white font-bold text-lg">{game.spins} Free Spins</h3>
                            <p className="text-gray-400 text-sm mt-1">
                                in games <span className="text-yellow-500">{game.title}</span>
                            </p>
                            <button
                                onClick={() => openModal(game)}
                                className="mt-4 px-6 py-2 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition duration-200"
                            >
                                Choose
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <FreeSpinsModal
                game={selectedGame}
                selectedBet={selectedBet}
                setSelectedBet={setSelectedBet}
                closeModal={closeModal}
            />
        </div>
    );
};

export default FreeSpins;
