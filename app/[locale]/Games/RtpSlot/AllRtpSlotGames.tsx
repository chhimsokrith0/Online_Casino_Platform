"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { gsap } from "gsap";
import GamesHeader from "@/components/GamesHeader/GamesHeader";
import GameCard from "./GameCard";
import { useTranslations } from "next-intl";
import { generateGamesData } from "./gamesData";
import nothing_box from "../../../../public/nothing_box.webp";
import Loading from "@/components/Loading";

interface AllGamesProps {
  locale: string;
}

const AllLiveCasinoGames: React.FC<AllGamesProps> = ({ locale }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = "allGames";
  const [category, setCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(24); // Number of games to display initially
  const [loading, setLoading] = useState(true);

  const t = useTranslations("games.allGame");

  // Simulate data loading
  const gamesData = generateGamesData(t);
  const filteredGames = gamesData.filter((game) => game.category === category);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [category]);

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

  const loadMoreGames = () => {
    setVisibleCount((prev) => prev + 24); // Load 24 more games on each click
  };

  return (
    <div ref={sectionRef} className="max-w-[1200px] mx-auto p-4">
      <GamesHeader
        pageName="RTP Slots"
        locale={locale}
        setCategory={setCategory}
        currentCategory={category}
        gameCount={filteredGames.length}
      />

      {loading ? (
        <Loading />
      ) : filteredGames.length > 0 ? (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {filteredGames.slice(0, visibleCount).map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                provider={game.provider}
                image={game.image}
                percentage={game.percentage}
              />
            ))}
          </div>
          {visibleCount < filteredGames.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMoreGames}
                className="h-[44px] bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full px-5 py-2 hover:opacity-90 transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-80">
          <div className="text-gray-500 mb-4">
            <img
              src={nothing_box.src}
              alt="Empty state"
              className="w-32 h-32"
            />
          </div>
          <p className="text-gray-400">{"There's nothing here yet!"}</p>
        </div>
      )}
    </div>
  );
};

export default AllLiveCasinoGames;
