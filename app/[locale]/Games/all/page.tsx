
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { gsap } from "gsap";
// import GamesHeader from "@/components/GamesHeader/GamesHeader";
// import { useTranslations } from "next-intl";

// import img1 from "@/assets/img-allgames/1.png";
// import img2 from "@/assets/img-allgames/2.png";
// import img3 from "@/assets/img-allgames/3.png";
// import img4 from "@/assets/img-allgames/4.png";
// import img5 from "@/assets/img-allgames/5.png";
// import img6 from "@/assets/img-allgames/6.png";
// import img7 from "@/assets/img-allgames/7.png";
// import img8 from "@/assets/img-allgames/8.png";
// import img9 from "@/assets/img-allgames/9.png";
// import img10 from "@/assets/img-allgames/10.png";
// import img11 from "@/assets/img-allgames/11.png";
// import img12 from "@/assets/img-allgames/12.png";
// import img26 from "@/assets/img-allgames/26.png";
// import img27 from "@/assets/img-allgames/27.png";
// import img28 from "@/assets/img-allgames/28.png";
// import img29 from "@/assets/img-allgames/29.png";
// import img30 from "@/assets/img-allgames/30.png";
// import img31 from "@/assets/img-allgames/31.png";
// import img32 from "@/assets/img-allgames/32.png";
// import img33 from "@/assets/img-allgames/33.png";
// import img34 from "@/assets/img-allgames/34.png";
// import img35 from "@/assets/img-allgames/35.png";
// import img36 from "@/assets/img-allgames/36.png";
// import img37 from "@/assets/img-allgames/37.png";

// const AllGames = ({ locale }: { locale: string }) => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const gameRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialCategory = searchParams.get("category") || "allGames";
//   const [category, setCategory] = useState(initialCategory);

//   const t = useTranslations("games.allGame");

//   const gamesData = [
//     { id: 1, title: t("ninjaRaccoonFrenzy.name"), provider: t("ninjaRaccoonFrenzy.provider"), image: img1, category: "demo" },
//     { id: 2, title: t("treasuresOfAztec.name"), provider: t("treasuresOfAztec.provider"), image: img2, category: "allGames" },
//     { id: 3, title: t("mahjongWays2.name"), provider: t("mahjongWays2.provider"), image: img3, category: "popularGames" },
//     { id: 4, title: t("luckyNeko.name"), provider: t("luckyNeko.provider"), image: img4, category: "newGames" },
//     { id: 5, title: t("mahjongWays.name"), provider: t("mahjongWays.provider"), image: img5, category: "cashDrop" },
//     { id: 6, title: t("wildBountyShowdown.name"), provider: t("wildBountyShowdown.provider"), image: img6, category: "jackpots" },
//     { id: 7, title: t("waysOfTheQilin.name"), provider: t("waysOfTheQilin.provider"), image: img7, category: "megaways" },
//     { id: 8, title: t("wildBandito.name"), provider: t("wildBandito.provider"), image: img8, category: "tableGames" },
//     { id: 9, title: t("fortuneRabbit.name"), provider: t("fortuneRabbit.provider"), image: img9, category: "demo" },
//     { id: 10, title: t("caishenWins.name"), provider: t("caishenWins.provider"), image: img10, category: "allGames" },
//     { id: 11, title: t("fortuneOx.name"), provider: t("fortuneOx.provider"), image: img11, category: "popularGames" },
//     { id: 12, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img12, category: "newGames" },
//     { id: 13, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img26, category: "cashDrop" },
//     { id: 14, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img27, category: "jackpots" },
//     { id: 15, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img28, category: "megaways" },
//     { id: 16, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img29, category: "tableGames" },
//     { id: 17, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img30, category: "demo" },
//     { id: 18, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img31, category: "allGames" },
//     { id: 19, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img32, category: "popularGames" },
//     { id: 20, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img33, category: "newGames" },
//     { id: 21, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img34, category: "cashDrop" },
//     { id: 22, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img35, category: "jackpots" },
//     { id: 23, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img36, category: "megaways" },
//     { id: 24, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img37, category: "tableGames" },
// ];


//   const filteredGames = gamesData.filter((game) => category === "allGames" || game.category === category);

//   useEffect(() => {
//     router.push(`?category=${category}`);
//   }, [category, router]);

//   useEffect(() => {
//     if (sectionRef.current) {
//       gsap.fromTo(
//         sectionRef.current.querySelector("h1"),
//         { opacity: 0, y: -50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//       );
//     }

//     if (gameRefs.current.length) {
//       gsap.fromTo(
//         gameRefs.current,
//         { opacity: 0, scale: 0.8 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1,
//           ease: "power2.out",
//           stagger: 0.2,
//         }
//       );
//     }
//   }, [category]);

//   return (
//     <div ref={sectionRef} className="max-w-[1200px] mx-auto p-4">
//       <GamesHeader pageName="Games" locale={locale} setCategory={setCategory} currentCategory={category} />
//       <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
//         {filteredGames.map((game, index) => (
//           <div
//             key={game.id}
//             ref={(el) => {
//               if (el) {
//                 gameRefs.current[index] = el;
//               }
//             }}
//             className="rounded-lg shadow-lg overflow-hidden bg-gray-800 relative group hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={game.image.src}
//               alt={game.title}
//               className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <button className="px-2 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full hover:bg-yellow-500 transition">
//                 Play Now
//               </button>
//             </div>
//             <div className="p-2">
//               <h3 className="text-sm font-medium text-white truncate">{game.title}</h3>
//               <p className="text-xs text-gray-400 truncate">{game.provider}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllGames;





// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { gsap } from "gsap";
// import GamesHeader from "@/components/GamesHeader/GamesHeader";
// import GameCard from "./GameCard";
// import { useTranslations } from "next-intl";
// import { generateGamesData } from "./gamesData";

// interface AllGamesProps {
//     locale: string;
// }

// const AllGames: React.FC<AllGamesProps> = ({ locale }) => {
//     const sectionRef = useRef<HTMLDivElement | null>(null);
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const initialCategory = searchParams.get("category") || "allGames";
//     const [category, setCategory] = useState(initialCategory);

//     const t = useTranslations("games.allGame");

//     // Generate games data using the translation function
//     const gamesData = generateGamesData(t);

//     // Filter games based on the selected category
//     const filteredGames = gamesData.filter(
//         (game) => game.category === category
//     );

//     // Update the URL query parameter when the category changes
//     useEffect(() => {
//         router.push(`?category=${category}`);
//     }, [category, router]);

//     // Animate the header section
//     useEffect(() => {
//         if (sectionRef.current) {
//             gsap.fromTo(
//                 sectionRef.current.querySelector("h1"),
//                 { opacity: 0, y: -50 },
//                 { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//             );
//         }
//     }, []);

//     return (
//         <div ref={sectionRef} className="max-w-[1200px] mx-auto p-4">
//             {/* Header Section */}
//             <GamesHeader
//                 pageName="Games"
//                 locale={locale}
//                 setCategory={setCategory}
//                 currentCategory={category}
//                 gameCount={filteredGames.length}
//             />

//             {/* Games Grid */}
//             <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
//                 {filteredGames.map((game) => (
//                     <GameCard
//                         key={game.id}
//                         title={game.title}
//                         provider={game.provider}
//                         image={game.image}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllGames;


import AllGames from "./AllGames";

export default function Page({ params }: { params: { locale: string } }) {
  return <AllGames locale={params.locale} />;
}
