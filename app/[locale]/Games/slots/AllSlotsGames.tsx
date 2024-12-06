"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import GamesHeader from "@/components/GamesHeader/GamesHeader";
import GameCard from "./GameCard";
import { useTranslations } from "next-intl";
import { generateGamesData } from "./gamesData";
import nothing_box from "../../../../public/nothing_box.webp";

interface AllGamesProps {
    locale: string;
}

const AllGames: React.FC<AllGamesProps> = ({ locale }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "allGames";
    const [category, setCategory] = useState(initialCategory);

    const t = useTranslations("games.allGame");

    const gamesData = generateGamesData(t);

    const filteredGames = gamesData.filter((game) => game.category === category);

    useEffect(() => {
        router.push(`?category=${category}`);
    }, [category, router]);

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.querySelector("h1"),
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <div ref={sectionRef} className="max-w-[1200px] mx-auto p-4">
            <GamesHeader
                pageName="Slots"
                locale={locale}
                setCategory={setCategory}
                currentCategory={category}
                gameCount={filteredGames.length}
            />

            {filteredGames.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
                    {filteredGames.map((game) => (
                        <GameCard
                            key={game.id}
                            title={game.title}
                            provider={game.provider}
                            image={game.image}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-80">
                    <div className="text-gray-500 mb-4">
                        <img
                            src={nothing_box.src}
                            alt="Empty state"
                            className="w-32 h-32" // Add size using Tailwind CSS
                        />
                    </div>
                    <p className="text-gray-400">
                        {"There's nothing here yet!"}
                    </p>
                </div>

            )}
        </div>
    );
};

export default AllGames;
