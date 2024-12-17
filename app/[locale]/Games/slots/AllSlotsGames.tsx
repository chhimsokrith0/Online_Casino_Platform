"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import GamesHeader from "@/components/GamesHeader/GamesHeader";
import GameCard from "./GameCard";
import { useTranslations } from "next-intl";
import { generateGamesData } from "./gamesData";
import nothing_box from "../../../../public/nothing_box.webp";
import Loading from "@/components/Loading";
import { useSidebar } from "@/components/Sidebar/SidebarContext";

interface Game {
  id: number;
  title: string;
  provider: string;
  image: string;
  category: string;
}

interface AllGamesProps {
  locale: string;
}

const AllGames: React.FC<AllGamesProps> = ({ locale }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const initialCategory = "allGames";

  // State Management
  const [category, setCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
  const [filteredGames, setFilteredGames] = useState<Game[]>([]); // Filtered games
  const [visibleCount, setVisibleCount] = useState<number>(24); // Number of visible games
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const t = useTranslations("games.allGame");
   const { isCollapsed } = useSidebar(); 

  // Load and generate games data
  const gamesData: Game[] = generateGamesData(t);

  // Filter games based on category and search term
  useEffect(() => {
    // Avoid unnecessary state updates
    const filtered = gamesData.filter(
      (game) =>
        (category === "allGames" || game.category === category) &&
        game.title?.toLowerCase().includes(searchTerm.toLowerCase()) // Defensive check
    );

    // Only update the state if the filtered data has actually changed
    setFilteredGames((prev) => {
      const isSame =
        prev.length === filtered.length &&
        prev.every((game, index) => game.id === filtered[index].id);

      if (!isSame) {
        return filtered;
      }

      return prev;
    });
  }, [category, searchTerm, gamesData]);

  // Handle loading state when category changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [category]);

  // Update URL when category changes (Preventing Infinite Updates)
  useEffect(() => {
    // Only update the URL if the category is different
    const currentQuery = new URLSearchParams(window.location.search);
    const currentCategory = currentQuery.get("category");

    if (currentCategory !== category) {
      router.push(`?category=${category}`);
    }
  }, [category, router]);

  // Add animation on component load
  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector("h1"),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  // Load more games
  const loadMoreGames = () => {
    setVisibleCount((prev) => prev + 24); // Load 24 more games
  };

  return (
    <div ref={sectionRef} className={`max-w-[1200px] mx-auto p-4 ${isCollapsed ? "ml-[5rem]" : ""}`}>
      {/* Games Header */}
      <GamesHeader
        pageName="Slots"
        locale={locale}
        setCategory={setCategory}
        currentCategory={category}
        gameCount={filteredGames.length}
        setSearchTerm={setSearchTerm} // Pass setSearchTerm to GamesHeader
      />

      {/* Content */}
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

export default AllGames;
