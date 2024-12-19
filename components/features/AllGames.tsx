
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SignupModal from "@/components/Navbar/SignUpModal";

import img1 from "@/assets/img-allgames/1.png";
import img2 from "@/assets/img-allgames/2.png";
import img3 from "@/assets/img-allgames/3.png";
import img4 from "@/assets/img-allgames/4.png";
import img5 from "@/assets/img-allgames/5.png";
import img6 from "@/assets/img-allgames/6.png";
import img7 from "@/assets/img-allgames/7.png";
import img8 from "@/assets/img-allgames/8.png";
import img9 from "@/assets/img-allgames/9.png";
import img10 from "@/assets/img-allgames/10.png";
import img11 from "@/assets/img-allgames/11.png";
import img12 from "@/assets/img-allgames/12.png";

import img26 from "@/assets/img-allgames/26.png";
import img27 from "@/assets/img-allgames/27.png";
import img28 from "@/assets/img-allgames/28.png";
import img29 from "@/assets/img-allgames/29.png";
import img30 from "@/assets/img-allgames/30.png";
import img31 from "@/assets/img-allgames/31.png";
import img32 from "@/assets/img-allgames/32.png";
import img33 from "@/assets/img-allgames/33.png";
import img34 from "@/assets/img-allgames/34.png";
import img35 from "@/assets/img-allgames/35.png";
import img36 from "@/assets/img-allgames/36.png";
import img37 from "@/assets/img-allgames/37.png";
import Link from "next/link";

const AllGames: React.FC = () => {
    const { data: session } = useSession();
    const t = useTranslations("games.allGame");
    const [showSignUpModal, setShowSignUpModal] = React.useState(false);

    const gameRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const games = [
        {
            id: 1,
            title: t("ninjaRaccoonFrenzy.name"),
            provider: t("ninjaRaccoonFrenzy.provider"),
            image: img1,
        },
        {
            id: 2,
            title: t("treasuresOfAztec.name"),
            provider: t("treasuresOfAztec.provider"),
            image: img2,
        },
        {
            id: 3,
            title: t("mahjongWays2.name"),
            provider: t("mahjongWays2.provider"),
            image: img3,
        },
        {
            id: 4,
            title: t("luckyNeko.name"),
            provider: t("luckyNeko.provider"),
            image: img4,
        },
        {
            id: 5,
            title: t("mahjongWays.name"),
            provider: t("mahjongWays.provider"),
            image: img5,
        },
        {
            id: 6,
            title: t("wildBountyShowdown.name"),
            provider: t("wildBountyShowdown.provider"),
            image: img6,
        },
        {
            id: 7,
            title: t("waysOfTheQilin.name"),
            provider: t("waysOfTheQilin.provider"),
            image: img7,
        },
        {
            id: 8,
            title: t("wildBandito.name"),
            provider: t("wildBandito.provider"),
            image: img8,
        },
        {
            id: 9,
            title: t("fortuneRabbit.name"),
            provider: t("fortuneRabbit.provider"),
            image: img9,
        },
        {
            id: 10,
            title: t("caishenWins.name"),
            provider: t("caishenWins.provider"),
            image: img10,
        },
        {
            id: 11,
            title: t("fortuneOx.name"),
            provider: t("fortuneOx.provider"),
            image: img11,
        },
        {
            id: 12,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img12,
        },
        {
            id: 13,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img26,
        },
        {
            id: 14,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img27,
        },
        {
            id: 15,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img28,
        },
        {
            id: 16,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img29,
        },
        {
            id: 17,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img30,
        },
        {
            id: 18,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img31,
        },
        {
            id: 19,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img32,
        },
        {
            id: 20,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img33,
        },
        {
            id: 21,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img34,
        },
        {
            id: 22,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img35,
        },
        {
            id: 23,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img36,
        },
        {
            id: 24,
            title: t("ganeshaFortune.name"),
            provider: t("ganeshaFortune.provider"),
            image: img37,
        },
    ];

    useEffect(() => {
        // GSAP animation for game cards on component mount
        gsap.fromTo(
            gameRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
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
        <section className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-blue-500">🎲</span>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{t("title")}</h2>
                </div>
                <Link href="/Games/all" className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                    <span>{t("seeAll")}</span>
                    <span className="font-bold">➤</span>
                </Link>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        ref={(el) => {
                            (gameRefs.current[index] = el)
                        }}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleLeave(index)}
                        className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Favorite Icon */}
                        <div
                            className="absolute cursor-pointer top-2 right-2 z-10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            onClick={() => toggleFavorite(game.id)}
                        >
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={`text-2xl ${favorites.includes(game.id) ? "text-red-500" : "text-gray-400"}`}
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
                            <h3 className="text-sm font-medium text-white truncate">{game.title}</h3>
                            <p className="text-xs text-gray-400 truncate">{game.provider}</p>
                        </div>
                    </div>
                ))}
            </div>
            {showSignUpModal && (
                <SignupModal activeTab="signIn" onClose={() => setShowSignUpModal(false)} />
            )}
        </section>
    );
};

export default AllGames;
