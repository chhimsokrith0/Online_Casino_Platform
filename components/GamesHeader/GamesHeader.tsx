
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSlidersH,
  faCrown,
  faDice,
  faGift,
  faTable,
  faChartLine,
  faTrophy,
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
    { id: 1, name: t("demo"), icon: <span className="text-lg font-bold">▶</span>, link: "demo" },
    { id: 2, name: t("allGames"), icon: <FontAwesomeIcon icon={faDice} />, link: "allGames" },
    { id: 3, name: t("popularGames"), icon: <FontAwesomeIcon icon={faCrown} />, link: "popularGames" },
    { id: 4, name: t("newGames"), icon: <FontAwesomeIcon icon={faGift} />, link: "newGames" },
    { id: 5, name: t("cashDrop"), icon: <FontAwesomeIcon icon={faChartLine} />, link: "cashDrop" },
    { id: 6, name: t("jackpots"), icon: <FontAwesomeIcon icon={faTrophy} />, link: "jackpots" },
    { id: 7, name: t("megaways"), icon: <span className="text-lg font-bold">M</span>, link: "megaways" },
    { id: 8, name: t("tableGames"), icon: <FontAwesomeIcon icon={faTable} />, link: "tableGames" },
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
                className={`flex flex-col items-center text-center ${
                  currentCategory === category.link
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
          <div className="relative flex items-center bg-gray-800 rounded-full px-4 py-2 w-[240px]">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-lg cursor-pointer hover:text-white" />
          </div>
          <button className="bg-gray-800 text-gray-400 px-3 py-2 rounded-full hover:text-white">
            <FontAwesomeIcon icon={faSlidersH} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesHeader;
