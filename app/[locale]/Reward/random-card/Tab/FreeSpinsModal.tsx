"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ReactDOM from "react-dom";

interface FreeSpinsModalProps {
    game: {
        img: string;
        title: string;
        spins: number;
    } | null;
    selectedBet: string | null;
    setSelectedBet: (value: string | null) => void;
    closeModal: () => void;
}

const FreeSpinsModal: React.FC<FreeSpinsModalProps> = ({ game, selectedBet, setSelectedBet, closeModal }) => {
    const modalBackdropRef = useRef<HTMLDivElement | null>(null);
    const modalContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (game) {
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
    }, [game]);

    if (!game) return null;

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
                            src={game.img}
                            alt={game.title}
                            className="w-40 h-40 rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Details and Options */}
                    <div className="col-span-8">
                        <div>
                            <h3 className="text-white font-bold text-lg">{game.spins} Free Spins</h3>
                            <p className="text-gray-400 mt-1">
                                in games{" "}
                                <span className="text-yellow-500 font-medium">{game.title}</span>
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

export default FreeSpinsModal;
