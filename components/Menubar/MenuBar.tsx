// "use client";

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDice,
//   faCrown,
//   faGift,
//   faTable,
//   faChartLine,
//   faTrophy,
//   faCog,
//   faSearch,
// } from "@fortawesome/free-solid-svg-icons";
// import { useTranslations } from "next-intl";


// import icon_PG from "@/assets/icon_Providers/PG.svg";
// import icon_Joker from "@/assets/icon_Providers/Joker.svg";
// import icon_JILI from "@/assets/icon_Providers/JILI.svg";
// import icon_PragmaticPlay from "@/assets/icon_Providers/PragmaticPlay.svg";
// import icon_Habanero from "@/assets/icon_Providers/Habanero.svg";
// import icon_Pegasus from "@/assets/icon_Providers/Pegasus.svg";
// import icon_DreamGaming from "@/assets/icon_Providers/DreamGaming.svg";
// import icon_Worldmatch from "@/assets/icon_Providers/Worldmatch.svg";
// import icon_WMCASINO from "@/assets/icon_Providers/WMCASINO.svg";
// import icon_Amigo from "@/assets/icon_Providers/Amigo.svg";
// import icon_Naga from "@/assets/icon_Providers/Naga.svg";
// import icon_Nolimit from "@/assets/icon_Providers/Nolimit.svg";
// import icon_SA from "@/assets/icon_Providers/SA.svg";
// import icon_AeSexy from "@/assets/icon_Providers/AeSexy.svg";
// import icon_Evoplay from "@/assets/icon_Providers/Evoplay.svg";
// import icon_Spribe from "@/assets/icon_Providers/Spribe.svg";
// import icon_Sbobet from "@/assets/icon_Providers/Sbobet.svg";
// import icon_Evolution from "@/assets/icon_Providers/Evolution.svg";
// import icon_Mancala from "@/assets/icon_Providers/Mancala.svg";
// import icon_PlaynGo from "@/assets/icon_Providers/Play'nGo.svg";
// import icon_Relax from "@/assets/icon_Providers/Relax.svg";
// import icon_Smartsoft from "@/assets/icon_Providers/Smartsoft.svg";
// import icon_3Oaks from "@/assets/icon_Providers/3OaksGaming.svg";
// import icon_Dragongaming from "@/assets/icon_Providers/Dragongaming.svg";
// import icon_WeGaming from "@/assets/icon_Providers/WeGaming.svg";
// import icon_Rich88 from "@/assets/icon_Providers/Rich88.svg";
// import icon_SpadeGaming from "@/assets/icon_Providers/SpadeGaming.svg";
// import icon_FACHAI from "@/assets/icon_Providers/FACHAI.svg";
// import icon_FastSpin from "@/assets/icon_Providers/FastSpin.svg";
// import icon_CQ9 from "@/assets/icon_Providers/CQ9.svg";
// import icon_Hacksaw from "@/assets/icon_Providers/Hacksaw.svg";
// import icon_RoyalSlot from "@/assets/icon_Providers/RoyalSlot.svg";
// import icon_Winfinity from "@/assets/icon_Providers/Winfinity.svg";

// const MenuBar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const t = useTranslations("MenuBar");

//   const categories = [
//     { id: 1, name: t("demo"), icon: <FontAwesomeIcon icon={faCog} />, active: false },
//     { id: 2, name: t("allGames"), icon: <FontAwesomeIcon icon={faDice} />, active: true },
//     { id: 3, name: t("popularGames"), icon: <FontAwesomeIcon icon={faCrown} />, active: false },
//     { id: 4, name: t("newGames"), icon: <FontAwesomeIcon icon={faGift} />, active: false },
//     { id: 5, name: t("cashDrop"), icon: <FontAwesomeIcon icon={faChartLine} />, active: false },
//     { id: 6, name: t("jackpots"), icon: <FontAwesomeIcon icon={faTrophy} />, active: false },
//     { id: 7, name: t("megaways"), icon: <span className="text-lg font-bold">M</span>, active: false },
//     { id: 8, name: t("tableGames"), icon: <FontAwesomeIcon icon={faTable} />, active: false },
//   ];

//   const providers = [
//     { name: "PGSoft", icon: icon_PG },
//     { name: "Joker", icon: icon_Joker },
//     { name: "JILI", icon: icon_JILI },
//     { name: "PragmaticPlay", icon: icon_PragmaticPlay },
//     { name: "Habanero", icon: icon_Habanero },
//     { name: "Pegasus", icon: icon_Pegasus },
//     { name: "DreamGaming", icon: icon_DreamGaming },
//     { name: "Worldmatch", icon: icon_Worldmatch },
//     { name: "WMCASINO", icon: icon_WMCASINO },
//     { name: "Amigo", icon: icon_Amigo },
//     { name: "Naga", icon: icon_Naga },
//     { name: "Nolimit City", icon: icon_Nolimit },
//     { name: "SA", icon: icon_SA },
//     { name: "Ae Sexy", icon: icon_AeSexy },
//     { name: "Evoplay", icon: icon_Evoplay },
//     { name: "Spribe", icon: icon_Spribe },
//     { name: "Sbobet", icon: icon_Sbobet },
//     { name: "Evolution Gaming", icon: icon_Evolution },
//     { name: "Mancala", icon: icon_Mancala },
//     { name: "Play`n Go", icon: icon_PlaynGo },
//     { name: "Relax Gaming", icon: icon_Relax },
//     { name: "Smartsoft Gaming", icon: icon_Smartsoft },
//     { name: "3 Oaks Gaming", icon: icon_3Oaks },
//     { name: "Dragongaming", icon: icon_Dragongaming },
//     { name: "We Gaming", icon: icon_WeGaming },
//     { name: "Rich88", icon: icon_Rich88 },
//     { name: "SpadeGaming", icon: icon_SpadeGaming },
//     { name: "FA CHAI", icon: icon_FACHAI },
//     { name: "FastSpin", icon: icon_FastSpin },
//     { name: "CQ9", icon: icon_CQ9 },
//     { name: "Hacksaw", icon: icon_Hacksaw },
//     { name: "Royal Slot Gaming", icon: icon_RoyalSlot },
//     { name: "Winfinity", icon: icon_Winfinity },
//   ];



//   return (
//     <div className="text-gray-300 mt-5 shadow-md rounded-lg px-4 py-3">
//       <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between">
//         {/* Categories */}
//         <div className="flex space-x-6 overflow-x-auto scrollbar-hide w-full md:w-auto">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className={`flex flex-col items-center text-center ${category.active
//                 ? "text-yellow-500 font-semibold"
//                 : "text-gray-400 hover:text-yellow-500"
//                 } transition duration-300`}
//             >
//               <span className="text-xl mb-1">{category.icon}</span>
//               <span className="text-sm whitespace-nowrap">{category.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Desktop View Providers Dropdown and Search */}
//         <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
//           <button
//             className="bg-gray-800 text-gray-400 px-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-gray-700 transition"
//             onClick={() => setIsModalOpen(true)}
//           >
//             Providers
//           </button>

//           <FontAwesomeIcon
//             icon={faSearch}
//             className="text-gray-400 text-xl cursor-pointer hover:text-yellow-500 transition duration-300"
//           />
//         </div>

//         {/* Mobile View Providers Dropdown and Search */}
//         <div className="block md:hidden mt-6 w-full">
//           <div className="flex items-center space-x-4">
//             <button
//               className="bg-gray-800 text-gray-400 px-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-gray-700 transition w-[75%]"
//               onClick={() => setIsModalOpen(true)}
//             >
//               Providers
//             </button>

//             <FontAwesomeIcon
//               icon={faSearch}
//               className="text-gray-400 text-xl cursor-pointer hover:text-yellow-500 transition duration-300"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
//           <div className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow-lg w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-[90%] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold text-white">All Providers</h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Providers Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//               {providers.map((provider, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-2 bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition"
//                 >
//                   <img
//                     src={provider.icon.src}
//                     alt={provider.name}
//                     className="w-10 h-10 object-contain rounded-full"
//                   />
//                   <span className="text-xs sm:text-sm md:text-base truncate">
//                     {provider.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}


//     </div>
//   );
// };

// export default MenuBar;



"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";
import ProvidersModal from "./ProvidersModal";
import SearchModal from "./SearchModal";
import { useTranslations } from "next-intl";

const MenuBar = ({ locale }: { locale: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // For Providers Modal
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // For Search Modal
  const t = useTranslations("MenuBar");

  return (
    <div className="text-gray-300 mt-5 shadow-md rounded-lg px-4 py-3">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Categories Section */}
        <Categories t={t} locale={locale}/>

        {/* Desktop View Providers Button and Search */}
        <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
          <button
            className="bg-gray-800 text-gray-400 px-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-gray-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Providers
          </button>

          {/* Search Icon for Desktop */}
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 text-xl cursor-pointer hover:text-yellow-500 transition duration-300"
            onClick={() => setIsSearchModalOpen(true)} // Opens the search modal
          />
        </div>

        {/* Mobile View Providers Button and Search */}
        <div className="block md:hidden mt-6 w-full">
          <div className="flex items-center space-x-4">
            <button
              className="bg-gray-800 text-gray-400 px-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-gray-700 transition w-[75%]"
              onClick={() => setIsModalOpen(true)}
            >
              Providers
            </button>

            {/* Search Icon for Mobile */}
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 text-xl cursor-pointer hover:text-yellow-500 transition duration-300"
              onClick={() => setIsSearchModalOpen(true)} // Opens the search modal
            />
          </div>
        </div>
      </div>

      {/* Providers Modal */}
      {isModalOpen && <ProvidersModal setIsModalOpen={setIsModalOpen} />}

      {/* Search Modal */}
      {isSearchModalOpen && (
        <SearchModal onClose={() => setIsSearchModalOpen(false)} />
      )}
    </div>
  );
};

export default MenuBar;
