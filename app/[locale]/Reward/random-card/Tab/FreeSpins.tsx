"use client";

import React, { useState } from "react";

interface Game {
    img: string;
    title: string;
    spins: number;
}

const FreeSpins = () => {
    const [selectedBet, setSelectedBet] = useState<string | null>(null);

    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

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

    const openModal = (game: Game) => {
        setSelectedGame(game);
    };

    const closeModal = () => {
        setSelectedGame(null);
        setSelectedBet(null);
    };

    return (
        <div className="mt-6">
            {/* Search Bar and Filters */}
            <div className="flex justify-between items-center mb-6">
                <div className="relative flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Find your game"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-full focus:outline-none placeholder-gray-400"
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="text-gray-400 hover:text-white flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 4h18M3 10h18m-9 6h9"
                            />
                        </svg>
                        Filters
                    </button>
                    <button className="text-gray-400 hover:text-white flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M12 5l7 7-7 7"
                            />
                        </svg>
                        Redeem History
                    </button>
                </div>
            </div>

            {/* Grid of Free Spins Games */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg flex flex-row items-center justify-between shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={game.img}
                            alt={game.title}
                            className="w-36 h-36 rounded-lg"
                        />
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
            {selectedGame && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-800 rounded-lg w-11/12 md:w-1/3 p-6 relative shadow-xl">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h2 className="text-xl font-bold text-white mb-6 text-center">
                            Choose Bet Size/Round
                        </h2>
                        <div className="flex items-center space-x-4 mb-6">
                            <img
                                src={selectedGame.img}
                                alt={selectedGame.title}
                                className="w-24 h-24 rounded-lg"
                            />
                            <div>
                                <h3 className="text-white font-bold">{selectedGame.spins} Free Spins</h3>
                                <p className="text-gray-400">
                                    in games <span className="text-yellow-500">{selectedGame.title}</span>
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4 text-center">
                            Choose the number of Bet Size/Round
                        </p>
                        <div className="flex justify-center space-x-4 mb-6">
                            {[
                                { value: "2.00", points: "2,500 Points" },
                                { value: "5.00", points: "5,500 Points" },
                            ].map((option) => (
                                <button
                                    key={option.value}
                                    className={`px-6 py-3 rounded-lg focus:outline-none ${selectedBet === option.value
                                        ? "bg-yellow-500 text-black"
                                        : "bg-gray-700 text-white hover:bg-gray-600"
                                        }`}
                                    onClick={() => setSelectedBet(option.value)}
                                >
                                    {option.value}฿ <br />
                                    <span className="text-gray-400 text-sm">{option.points}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            className={`w-full px-6 py-3 rounded-full font-bold focus:outline-none ${selectedBet
                                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                                : "bg-gray-700 text-gray-500 cursor-not-allowed"
                                }`}
                            disabled={!selectedBet}
                        >
                            {selectedBet ? `Redeem for ${selectedBet}K 💎` : "Redeem"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FreeSpins;