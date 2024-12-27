// "use client";

// import React, { useEffect, useRef, useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { gsap } from "gsap";
// import GamesHeader from "@/components/GamesHeader/GamesHeader";
// import GameCard from "./GameCard";
// import { useTranslations } from "next-intl";
// import { generateGamesData } from "./gamesData";
// import nothing_box from "../../../../public/nothing_box.webp";
// import Loading from "@/components/Loading";
// import { useSidebar } from "@/components/Sidebar/SidebarContext";
// interface Game {
//   id: number;
//   title: string;
//   provider: string;
//   image: string;
//   category: string;
//   percentage?: string; // Optional field for percentage, if needed
// }

// interface AllGamesProps {
//   locale: string;
// }

// const AllRtpSlotGames: React.FC<AllGamesProps> = ({ locale }) => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const router = useRouter();
//   const initialCategory = "allGames";

//   const [category, setCategory] = useState(initialCategory);
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
//   const [visibleCount, setVisibleCount] = useState(24); // Number of games to display initially
//   const [loading, setLoading] = useState(true); // Loading state

//   const t = useTranslations("games.allGame");
//   const { isCollapsed } = useSidebar();

//   // Generate game data once using useMemo for better performance
//   const gamesData = useMemo(() => generateGamesData(t), [t]);

//   // Filter games based on category and search term
//   const filteredGames = useMemo(() => {
//     return gamesData.filter(
//       (game) =>
//         (category === "allGames" || game.category === category) &&
//         game.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [gamesData, category, searchTerm]);

//   // Handle loading state when category changes
//   useEffect(() => {
//     setLoading(true);
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, [category]);

//   // Update the URL when the category changes
//   useEffect(() => {
//     const currentQuery = new URLSearchParams(window.location.search);
//     const currentCategory = currentQuery.get("category");

//     if (currentCategory !== category) {
//       router.push(`?category=${category}`);
//     }
//   }, [category, router]);

//   // Add animation on component load
//   useEffect(() => {
//     if (sectionRef.current) {
//       gsap.fromTo(
//         sectionRef.current.querySelector("h1"),
//         { opacity: 0, y: -50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//       );
//     }
//   }, []);

//   // Load more games
//   const loadMoreGames = () => {
//     setVisibleCount((prev) => prev + 24); // Load 24 more games on each click
//   };

//   return (
//     <div ref={sectionRef} className={`max-w-[1200px] mx-auto p-4 ${isCollapsed ? "ml-[5rem]" : ""}`}>
//       <GamesHeader
//         pageName="RtpSlot"
//         locale={locale}
//         setCategory={setCategory}
//         currentCategory={category}
//         gameCount={filteredGames.length}
//         setSearchTerm={setSearchTerm}
//       />

//       {loading ? (
//         <Loading />
//       ) : filteredGames.length > 0 ? (
//         <>
//           <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
//             {filteredGames.slice(0, visibleCount).map((game) => (
//               <GameCard
//                 key={game.id}
//                 title={game.title}
//                 provider={game.provider}
//                 image={game.image}
//                 percentage={game.percentage}
//               />
//             ))}
//           </div>
//           {visibleCount < filteredGames.length && (
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={loadMoreGames}
//                 className="h-[44px] bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full px-5 py-2 hover:opacity-90 transition"
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="flex flex-col items-center justify-center h-80">
//           <div className="text-gray-500 mb-4">
//             <img
//               src={nothing_box.src}
//               alt="Empty state"
//               className="w-32 h-32"
//             />
//           </div>
//           <p className="text-gray-400">{"There's nothing here yet!"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllRtpSlotGames;




"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GamesHeader from "@/components/GamesHeader/GamesHeader";
import GameCard from "./GameCard";
import nothing_box from "../../../../public/nothing_box.webp";
import Loading from "@/components/Loading";
import { useSidebar } from "@/components/Sidebar/SidebarContext";

interface Game {
  id: number;
  title: string;
  provider: string;
  image: string; // Matches the API response
  category: string;
  percentage: string;
}

interface AllGamesProps {
  locale: string;
}

const AllRtpSlotGames: React.FC<AllGamesProps> = ({ locale }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); // Get URL parameters
  const { isCollapsed } = useSidebar();

  const initialCategory = searchParams?.get("category") || "allGames"; // Get the category from URL or default
  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state
  const [visibleCount, setVisibleCount] = useState(24); // Number of games to display initially
  const [loading, setLoading] = useState(true); // Loading state
  const [gamesData, setGamesData] = useState<Game[]>([]); // Games data state

  // Fetch games data from the API
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/rtpslot?category=${category}&search=${searchTerm}`);
        const { data } = await response.json();
        setGamesData(data);
      } catch (error) {
        console.error("Failed to fetch games data:", error);
        setGamesData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [category, searchTerm]);

  // Load more games
  const loadMoreGames = () => {
    setVisibleCount((prev) => prev + 24); // Load 24 more games on each click
  };

  // Handle category changes and update URL
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    router.push(`?category=${newCategory}`); // Update URL with the new category
  };

  return (
    <div ref={sectionRef} className={`max-w-[1200px] mx-auto p-4 ${isCollapsed ? "ml-[5rem]" : ""}`}>
      <GamesHeader
        pageName="RtpSlot"
        locale={locale}
        setCategory={handleCategoryChange}
        currentCategory={category}
        gameCount={gamesData.length}
        setSearchTerm={setSearchTerm}
      />

      {loading ? (
        <Loading />
      ) : gamesData.length > 0 ? (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {gamesData.slice(0, visibleCount).map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                provider={game.provider}
                image={game.image}
                percentage={game.percentage}
              />
            ))}
          </div>
          {visibleCount < gamesData.length && (
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

export default AllRtpSlotGames;
