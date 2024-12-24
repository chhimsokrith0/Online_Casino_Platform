"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import img1 from "@/assets/img-popular/1.png";
import img2 from "@/assets/img-popular/2.png";
import img3 from "@/assets/img-popular/3.png";
import img4 from "@/assets/img-popular/4.png";
import img5 from "@/assets/img-popular/5.png";
import img6 from "@/assets/img-popular/6.png";

import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SignupModal from "@/components/Navbar/SignUpModal";

const PopularGames: React.FC = () => {
    const t = useTranslations("popularGames");
    const { data: session } = useSession();

    // Example game data
    const games = [
        { id: 1, title: t("games.jewelMania"), provider: t("provider"), image: img1 },
        { id: 2, title: t("games.hotFruitsOnFire"), provider: t("provider"), image: img2 },
        { id: 3, title: t("games.barsAndBells"), provider: t("provider"), image: img3 },
        { id: 4, title: t("games.reelReelHot"), provider: t("provider"), image: img4 },
        { id: 5, title: t("games.spiritOfTheLake"), provider: t("provider"), image: img5 },
        { id: 6, title: t("games.twinWinsMystery"), provider: t("provider"), image: img6 },
    ];

    const gameRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [showSignUpModal, setShowSignUpModal] = React.useState(false);


    useEffect(() => {
        // Animate cards on entrance
        gsap.fromTo(
            gameRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
        );
    }, []);

    const handleHover = (index: number) => {
        const card = gameRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleLeave = (index: number) => {
        const card = gameRefs.current[index];
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
        console.log("Play button clicked!");
    };

    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-xl font-semibold flex items-center space-x-2">
                    <span role="img" aria-label="fire">
                        🔥
                    </span>
                    <span>{t("title")}</span>
                </h2>
                <Link href="/Games/all" className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                    <span>{t("seeAll")}</span>
                    <span className="font-bold">➤</span>
                </Link>
            </div>

            {/* Mobile & Desktop View */}
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        ref={(el) => {
                            if (el) gameRefs.current[index] = el; // Assign each card's ref
                        }}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleLeave(index)}
                        className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Favorite Icon (Visible on Hover) */}
                        <div
                            className="absolute cursor-pointer top-2 right-2 z-10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
                            alt={game.title}
                            className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay for Game Details */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {session ? (
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-yellow-500 transition transform hover:scale-110 cursor-pointer shadow-lg"
                                    onClick={() => handleClick(gameRefs.current[index])}
                                >
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
                                        alt="Play"
                                        className="w-16 h-16"
                                    />
                                </div>
                            ) : (
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-red-500 transition transform hover:scale-110 cursor-pointer shadow-lg"
                                    onClick={() => setShowSignUpModal(true)} // Show the modal when clicked
                                >
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
                                        alt="Sign Up"
                                        className="w-16 h-16"
                                    />
                                </div>
                            )}

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
            {showSignUpModal && (
                <SignupModal activeTab="signIn" onClose={() => setShowSignUpModal(false)} />
            )}
        </div>
    );
};

export default PopularGames;


