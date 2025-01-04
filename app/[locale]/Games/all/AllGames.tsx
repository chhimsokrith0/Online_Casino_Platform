"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import GamesHeader from "@/components/GamesHeader/GamesHeader";

import GameCard from "./GameCard";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import nothing_box from "../../../../public/nothing_box.webp";
import Loading from "@/components/Loading";

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
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "allGames";
  const [category, setCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
  const [gamesData, setGamesData] = useState<Game[]>([]); // All fetched games
  const [filteredGames, setFilteredGames] = useState<Game[]>([]); // Filtered games
  const [visibleCount, setVisibleCount] = useState<number>(24); // Number of visible games
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const { isCollapsed } = useSidebar();

  // Fetch games from the API
  useEffect(() => {

    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/gameall?category=${category}&search=${searchTerm}`);
        if (!res.ok) throw new Error("Failed to fetch games");
        const { data } = await res.json();
        setGamesData(data);
        setFilteredGames(data.slice(0, visibleCount));
      } catch (err) {
        console.error("Error fetching games:", err);
        setGamesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [category, searchTerm, visibleCount]);

  // Handle category change
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`?category=${newCategory}`); // Update URL for category
  };


  return (
    <div ref={sectionRef} className={`max-w-[1200px] mx-auto p-4 ${isCollapsed ? "ml-[2rem]" : ""}`}>
      {/* Games Header */}
      <GamesHeader
        pageName="All Games"
        locale={locale}
        setCategory={handleCategoryChange}
        currentCategory={category}
        gameCount={gamesData.length}
        setSearchTerm={setSearchTerm}
      />

      {/* Content */}
      {loading ? (
        <Loading />
      ) : gamesData.length > 0 ? (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} title={game.title} provider={game.provider} image={game.image} />
            ))}
          </div>
          {visibleCount < gamesData.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 24)}
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
            <img src={nothing_box.src} alt="Empty state" className="w-32 h-32" />
          </div>
          <p className="text-gray-400">{"There's nothing here yet!"}</p>
        </div>
      )}


    </div>
  );
};

export default AllGames;
