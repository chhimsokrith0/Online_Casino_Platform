"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { gsap } from "gsap";

interface Game {
    img: string;
    title: string;
    spins: number;
}

const FreeSpins = () => {
    const [selectedBet, setSelectedBet] = useState<string | null>(null);
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const modalBackdropRef = useRef<HTMLDivElement | null>(null);
    const modalContentRef = useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
        if (selectedGame) {
            // Animate backdrop and modal content
            gsap.fromTo(
                modalBackdropRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: "power3.out" }
            );

            gsap.fromTo(
                modalContentRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.6)" }
            );
        }
    }, [selectedGame]);

    const openModal = (game: Game) => {
        setSelectedGame(game);
    };

    const closeModal = () => {
        gsap.to(modalBackdropRef.current, { opacity: 0, duration: 0.3 });
        gsap.to(modalContentRef.current, { scale: 0.8, opacity: 0, duration: 0.3 }).then(() => {
            setSelectedGame(null);
        });
        setSelectedBet(null);
    };

    const renderModal = () => {
        if (!selectedGame) return null;

        // Ensure #modal-root exists
        let modalRoot = document.getElementById("modal-root");
        if (!modalRoot) {
            modalRoot = document.createElement("div");
            modalRoot.id = "modal-root";
            document.body.appendChild(modalRoot);
        }

        return ReactDOM.createPortal(
            <div
                ref={modalBackdropRef}
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[200]"
            >
                <div
                    ref={modalContentRef}
                    className="bg-[#252734] rounded-2xl w-11/12 md:w-1/3 p-8 relative shadow-xl"
                >
                    {/* Close Button */}
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

                    {/* Modal Header */}
                    <h2 className="text-2xl text-left font-semibold text-white mb-6">
                        Choose Bet Size/Round
                    </h2>

                    <div className="grid grid-cols-12 gap-4">
                        {/* Game Details */}
                        <div className="col-span-4 flex items-center">
                            <img
                                src={selectedGame.img}
                                alt={selectedGame.title}
                                className="w-40 h-40 rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Details and Options */}
                        <div className="col-span-8">
                            <div>
                                <h3 className="text-white font-bold text-lg">{selectedGame.spins} Free Spins</h3>
                                <p className="text-gray-400 mt-1">
                                    in games{" "}
                                    <span className="text-yellow-500 font-medium">{selectedGame.title}</span>
                                </p>
                            </div>

                            {/* Instruction */}
                            <p className="text-gray-400 mb-4 mt-4 text-left">
                                Choose the number of Bet Size/Round
                            </p>

                            {/* Bet Size Options with Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {[
                                    { value: "2.00", points: "2,500 Points" },
                                    { value: "5.00", points: "5,500 Points" },
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        className={`px-6 py-3 text-center rounded-lg font-medium text-sm transition-all duration-300 ${selectedBet === option.value
                                                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-2 border-yellow-500"
                                                : "bg-[#2c2f3f] text-white border border-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-black hover:border-yellow-500"
                                            }`}
                                        onClick={() => setSelectedBet(option.value)}
                                    >
                                        {option.value}฿ <br />
                                        <span className="text-gray-400 text-xs">{option.points}</span>
                                    </button>
                                ))}
                            </div>


                            {/* Redeem Button */}
                            <button
                                className={`w-full py-3 rounded-full font-semibold text-lg ${selectedBet
                                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-2 border-yellow-500"
                                    : "bg-[#2c2f3f] text-gray-500 cursor-not-allowed"
                                    }`}
                                disabled={!selectedBet}
                            >
                                {selectedBet ? `Redeem for ${selectedBet}K 💎` : "Redeem"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>,
            modalRoot
        );
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 10h18m-9 6h9" />
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

            {/* Modal Rendering */}
            {renderModal()}
        </div>
    );
};

export default FreeSpins;
