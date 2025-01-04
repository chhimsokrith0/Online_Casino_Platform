// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Import usePathname for dynamic routing
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faPlayCircle,
//   faGamepad,
//   faFireAlt,
//   faStar,
//   faDollarSign,
//   faGem,
//   faMagic,
//   faChessBoard,
//   faSlidersH,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
// import { gsap } from "gsap";
// import { useTranslations } from "next-intl";

// interface GamesHeaderProps {
//   pageName: string;
//   locale: string;
//   setCategory: (category: string) => void;
//   currentCategory: string;
//   gameCount: number;
//   setSearchTerm: (term: string) => void;
// }

// const GamesHeader: React.FC<GamesHeaderProps> = ({
//   pageName,
//   locale,
//   setCategory,
//   currentCategory,
//   gameCount,
//   setSearchTerm,
// }) => {
//   const t = useTranslations("GamesHeader");
//   const pathname = usePathname(); // UsePathname to dynamically track active category
//   const categoryRefs = useRef<HTMLDivElement[]>([]);

//   // Categories configuration
//   const categories = [
//     { id: 1, name: t("demo"), icon: <FontAwesomeIcon icon={faPlayCircle} />, link: "demo" },
//     { id: 2, name: t("allGames"), icon: <FontAwesomeIcon icon={faGamepad} />, link: "allGames" },
//     { id: 3, name: t("popularGames"), icon: <FontAwesomeIcon icon={faFireAlt} />, link: "popularGames" },
//     { id: 4, name: t("newGames"), icon: <FontAwesomeIcon icon={faStar} />, link: "newGames" },
//     { id: 5, name: t("cashDrop"), icon: <FontAwesomeIcon icon={faDollarSign} />, link: "cashDrop" },
//     { id: 6, name: t("jackpots"), icon: <FontAwesomeIcon icon={faGem} />, link: "jackpots" },
//     { id: 7, name: t("megaways"), icon: <FontAwesomeIcon icon={faMagic} />, link: "megaways" },
//     { id: 8, name: t("tableGames"), icon: <FontAwesomeIcon icon={faChessBoard} />, link: "tableGames" },
//   ];

//   // Animate category buttons
//   useEffect(() => {
//     gsap.fromTo(
//       categoryRefs.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
//     );
//   }, []);

//   // Dynamically set active category based on the route
//   useEffect(() => {
//     if (!pathname) return;

//     const matchedCategory = categories.find((category) =>
//       pathname.includes(category.link)
//     );
//     if (matchedCategory) {
//       setCategory(matchedCategory.link);
//     }
//   }, [pathname, categories, setCategory]);

//   // Search input handler
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const term = e.target.value;
//     setSearchTerm(term); // Pass search term to parent
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <div className="text-gray-300 px-6 py-4">
//       {/* Breadcrumb Section */}
//       <div className="text-sm mb-3 text-gray-400">
//         <Link href={`/${locale}/`} className="cursor-pointer hover:underline">
//           {t("home")}
//         </Link>{" "}
//         / <span className="text-white">{pageName}</span>
//       </div>

//       {/* Title and Game Count */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-white text-2xl font-bold">{pageName}</h1>
//         <span className="text-gray-400">{t("gameCount", { count: gameCount })}</span>
//       </div>

//       {/* Categories and Search */}
//       <div className="flex flex-wrap justify-between items-center">
//         {/* Categories */}
//         <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               ref={(el) => {
//                 if (el) categoryRefs.current[index] = el;
//               }}
//               onClick={() => setCategory(category.link)}
//               className="cursor-pointer text-sm whitespace-nowrap"
//             >
//               <div
//                 className={`flex flex-col items-center text-center ${currentCategory === category.link
//                   ? "text-yellow-500 font-semibold"
//                   : "text-gray-400 hover:text-yellow-500"
//                   } transition duration-300`}
//               >
//                 <span className="text-xl mb-1">{category.icon}</span>
//                 <span className="text-sm">{category.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center space-x-4 mt-4 md:mt-0">
//           <div className="relative flex items-center bg-gray-900 rounded-full px-4 py-2 w-[300px] shadow-md">
//             <input
//               type="text"
//               placeholder={t("searchPlaceholder")}
//               className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
//               onChange={handleSearch}
//             />
//             <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg ml-2">
//               <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
//             </button>
//           </div>

//           <button onClick={toggleModal} className="bg-gray-800 text-gray-400 px-3 py-2 rounded-full hover:text-white">
//             <FontAwesomeIcon icon={faSlidersH} />
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="
//           fixed 
//           inset-0 
//           z-[200] 
//           flex 
//           items-center 
//           justify-center 
//           bg-black 
//           bg-opacity-50 
//           backdrop-blur-sm
//           transition 
//           duration-300
//         "
//           onClick={toggleModal}
//         >
//           <div
//             className="
//             relative
//             bg-gray-900 
//             rounded-xl 
//             p-6 
//             w-[300px] 
//             shadow-2xl 
//             transform 
//             transition-all 
//             duration-300 
//             hover:scale-105
//           "
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-white font-bold text-lg">Filters</h3>
//               <button
//                 onClick={toggleModal}
//                 className="text-gray-400 hover:text-white transition duration-200"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="space-y-4">
//               <p className="text-gray-400 text-sm font-semibold">Sort By</p>
//               <div className="flex gap-2">
//                 <button
//                   className="
//                   px-4 
//                   py-2 
//                   rounded-full 
//                   bg-gray-800 
//                   text-gray-400 
//                   hover:bg-gray-700 
//                   hover:text-white 
//                   transition 
//                   duration-200
//                 "
//                 >
//                   A to Z
//                 </button>
//                 <button
//                   className="
//                   px-4 
//                   py-2 
//                   rounded-full 
//                   bg-gray-800 
//                   text-gray-400 
//                   hover:bg-gray-700 
//                   hover:text-white 
//                   transition 
//                   duration-200
//                 "
//                 >
//                   Z to A
//                 </button>
//                 <button
//                   className="
//                   px-4 
//                   py-2 
//                   rounded-full 
//                   bg-gray-800 
//                   text-gray-400 
//                   hover:bg-gray-700 
//                   hover:text-white 
//                   transition 
//                   duration-200
//                 "
//                 >
//                   Newest
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       )}
//     </div>
//   );
// };

// export default GamesHeader;



"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for dynamic routing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlayCircle,
  faGamepad,
  faFireAlt,
  faStar,
  faDollarSign,
  faGem,
  faMagic,
  faChessBoard,
  faSlidersH,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

interface GamesHeaderProps {
  pageName: string;
  locale: string;
  setCategory: (category: string) => void;
  currentCategory: string;
  gameCount: number;
  setSearchTerm: (term: string) => void;
}

const GamesHeader: React.FC<GamesHeaderProps> = ({
  pageName,
  locale,
  setCategory,
  currentCategory,
  gameCount,
  setSearchTerm,
}) => {
  const t = useTranslations("GamesHeader");
  const t_Providers = useTranslations("Providers");
  const pathname = usePathname();
  const categoryRefs = useRef<HTMLDivElement[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 1, name: t("demo"), icon: <FontAwesomeIcon icon={faPlayCircle} />, link: "demo" },
    { id: 2, name: t("allGames"), icon: <FontAwesomeIcon icon={faGamepad} />, link: "allGames" },
    { id: 3, name: t("popularGames"), icon: <FontAwesomeIcon icon={faFireAlt} />, link: "popularGames" },
    { id: 4, name: t("newGames"), icon: <FontAwesomeIcon icon={faStar} />, link: "newGames" },
    { id: 5, name: t("cashDrop"), icon: <FontAwesomeIcon icon={faDollarSign} />, link: "cashDrop" },
    { id: 6, name: t("jackpots"), icon: <FontAwesomeIcon icon={faGem} />, link: "jackpots" },
    { id: 7, name: t("megaways"), icon: <FontAwesomeIcon icon={faMagic} />, link: "megaways" },
    { id: 8, name: t("tableGames"), icon: <FontAwesomeIcon icon={faChessBoard} />, link: "tableGames" },
  ];

  useEffect(() => {
    gsap.fromTo(
      categoryRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const matchedCategory = categories.find((category) =>
      pathname.includes(category.link)
    );
    if (matchedCategory) {
      setCategory(matchedCategory.link);
    }
  }, [pathname, categories, setCategory]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilterPanel = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="text-gray-300 px-6 py-4">
      {/* Breadcrumb Section */}
      <div className="text-sm mb-3 text-gray-400">
        <Link href={`/${locale}/`} className="cursor-pointer hover:underline">
          {t("home")}
        </Link>{" "}
        / <span className="text-white">{pageName}</span>
      </div>

      {/* Title and Game Count */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl font-bold">{pageName}</h1>
        <span className="text-gray-400">{t("gameCount", { count: gameCount })}</span>
      </div>

      {/* Categories and Search */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Categories */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => {
                if (el) categoryRefs.current[index] = el;
              }}
              onClick={() => setCategory(category.link)}
              className="cursor-pointer text-sm whitespace-nowrap"
            >
              <div
                className={`flex flex-col items-center text-center ${currentCategory === category.link
                  ? "text-yellow-500 font-semibold"
                  : "text-gray-400 hover:text-yellow-500"
                  } transition duration-300`}
              >
                <span className="text-xl mb-1">{category.icon}</span>
                <span className="text-sm">{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative flex items-center bg-gray-900 rounded-full px-4 py-2 w-[300px] shadow-md">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              onChange={handleSearch}
            />
            <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg ml-2">
              <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
            </button>
          </div>

          <button onClick={toggleFilterPanel} className="bg-gray-800 text-gray-400 px-3 py-2 rounded-full hover:text-white">
            <FontAwesomeIcon icon={faSlidersH} />
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed inset-0 flex justify-end z-[200] backdrop-blur-sm"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <div className="flex-grow bg-black bg-opacity-50" onClick={toggleFilterPanel}></div>

            {/* Filter Panel */}
            <div className="bg-gray-900 p-4 md:p-6 w-full md:w-[350px] overflow-auto">
              <div className="flex flex-col gap-4 h-full">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg font-bold">{t_Providers("Filters")}</span>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-gray-400 cursor-pointer hover:text-gray-200"
                    onClick={toggleFilterPanel}
                  />
                </div>
                <div className="w-full h-px bg-gray-700 my-2"></div>

                {/* Sort By Section */}
                <div className="flex flex-col gap-5">
                  <span className="text-gray-300 text-sm font-bold">{t_Providers("SortBy")}</span>
                  <div className="grid grid-cols-3 gap-3">
                    {["A-Z", "Z-A", "Newest"].map((filter) => (
                      <button
                        key={filter}
                        className="rounded-full h-[36px] bg-gray-800 text-gray-300 text-sm font-semibold px-4 py-2 hover:bg-gray-700 transition"
                        onClick={() => console.log(`${filter} selected`)}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Providers Section */}
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm font-bold">Providers (1)</span>
                    <button
                      onClick={() => console.log("Clear All Providers")}
                      className="text-gray-400 text-xs hover:text-white"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Providers"
                      className="w-full bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full placeholder-gray-500 focus:outline-none"
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "PG", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992725/1_cv73r2.png" },
                      { name: "Joker", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992725/2_w9bcoe.png" },
                      { name: "Jili", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992725/3_l7docr.png" },
                      { name: "Pragmatic Play", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992725/4_uwesjg.png" },
                      { name: "Habanero", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992725/5_fok5on.png" },
                      { name: "Pegasus", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735993106/6_ay8vct.png" },
                      { name: "NAGA", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992726/7_t17ir4.png" },
                      { name: "NOLIMIT", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992726/8_tmauix.png" },
                      { name: "SA", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992726/9_iqnvj1.png" },
                      { name: "Sexy", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992726/10_avp1wy.png" },
                      { name: "EVOPLAY", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735992726/11_vzsuev.png" },
                    ].map((provider) => (
                      <button
                        key={provider.name}
                        className="flex flex-col items-center justify-center bg-gray-800 text-gray-300 text-sm font-semibold rounded-lg py-2 hover:bg-gray-700 transition relative"
                      >
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="w-[73.5px] h-[26px] mb-2"
                        />
                        {provider.name}
                        <span className="absolute top-1 right-2 text-xs text-yellow-500 font-bold">
                          HOT
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default GamesHeader;
