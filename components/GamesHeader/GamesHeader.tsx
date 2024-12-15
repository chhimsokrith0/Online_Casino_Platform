
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

interface GamesHeaderProps {
  pageName: string;
  locale: string;
  setCategory: (category: string) => void;
  currentCategory: string;
  gameCount: number;
  setSearchTerm: (term: string) => void; // Prop to update search term in the parent component
}

const GamesHeader: React.FC<GamesHeaderProps> = ({
  pageName,
  locale,
  setCategory,
  currentCategory,
  gameCount,
  setSearchTerm,
}) => {
  const t = useTranslations("GamesHeader"); // Translation function
  const categoryRefs = useRef<HTMLDivElement[]>([]); // Refs for categories (used for animations)

  // Categories configuration
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

  // Animation for category buttons
  useEffect(() => {
    gsap.fromTo(
      categoryRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term); // Pass the search term to the parent component
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="text-gray-300 px-6 py-4">
      {/* Breadcrumb Section */}
      <div className="text-sm mb-3 text-gray-400">
        <Link href={`/`} className="cursor-pointer hover:underline">
          {t("home")}
        </Link>{" "}
        / <span className="text-white">{pageName}</span>
      </div>

      {/* Title and Game Count */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-white text-2xl font-bold">{pageName}</h1>
        </div>
        <span className="text-gray-400">{t("gameCount", { count: gameCount })}</span>
      </div>

      {/* Categories and Search Section */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Categories */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => {
                if (el) categoryRefs.current[index] = el;
              }}
              onClick={() => handleCategoryClick(category.link)}
              className="cursor-pointer"
            >
              <div
                className={`flex flex-col items-center text-center ${currentCategory === category.link
                  ? "text-yellow-500 font-semibold"
                  : "text-gray-400 hover:text-yellow-500"
                  } transition duration-300`}
              >
                <span className="text-xl mb-1">{category.icon}</span>
                <span className="text-sm whitespace-nowrap">{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative flex items-center bg-gray-900 rounded-full px-4 py-2 w-[300px] shadow-md hover:shadow-xl transition-all duration-300">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              onChange={handleSearch}
            />
            <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ml-2">
              <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
            </button>
          </div>

          <button  onClick={toggleModal} className="bg-gray-800 text-gray-400 px-3 py-2 rounded-full hover:text-white">
            <FontAwesomeIcon icon={faSlidersH} />
          </button>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal} // Close modal when clicking outside
        >
          <div
            className="bg-gray-900 rounded-lg p-6 w-[300px] shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg">Filters</h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:text-white"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-semibold">Sort By</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition">
                  A-Z
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition">
                  Z-A
                </button>
                <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition">
                  Newest
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesHeader;
