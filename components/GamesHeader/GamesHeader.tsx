"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH, faCrown, faDice, faGift, faTable, faChartLine, faTrophy } from "@fortawesome/free-solid-svg-icons";

const GamesHeader = () => {
  const categories = [
    { id: 1, name: "Demo", icon: <span className="text-green-500 text-lg font-bold">▶</span>, active: true },
    { id: 2, name: "All Games", icon: <FontAwesomeIcon icon={faDice} />, active: false },
    { id: 3, name: "Popular Games", icon: <FontAwesomeIcon icon={faCrown} />, active: false },
    { id: 4, name: "New Games", icon: <FontAwesomeIcon icon={faGift} />, active: false },
    { id: 5, name: "Cash Drop", icon: <FontAwesomeIcon icon={faChartLine} />, active: false },
    { id: 6, name: "Jackpots", icon: <FontAwesomeIcon icon={faTrophy} />, active: false },
    { id: 7, name: "Megaways", icon: <span className="text-lg font-bold">M</span>, active: false },
    { id: 8, name: "Table Games", icon: <FontAwesomeIcon icon={faTable} />, active: false },
  ];

  return (
    <div className=" text-gray-300 px-6 py-4">
      {/* Breadcrumb Section */}
      <div className="text-sm mb-3 text-gray-400">
        <span className="cursor-pointer hover:underline">Home</span> / <span className="text-white">Games</span>
      </div>

      {/* Title and Count */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-2xl font-bold">Games</h1>
        <span className="text-gray-400">221 Games</span>
      </div>

      {/* Categories and Search */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Categories */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex flex-col items-center text-center cursor-pointer ${
                category.active
                  ? "text-green-500 font-semibold"
                  : "text-gray-400 hover:text-green-500"
              } transition duration-300`}
            >
              <span className="text-xl mb-1">{category.icon}</span>
              <span className="text-sm whitespace-nowrap">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative flex items-center bg-gray-800 rounded-full px-4 py-2 w-[240px]">
            <input
              type="text"
              placeholder="Find your game"
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
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
