"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const recommendedGames = [
    {
      id: 1,
      name: "Jewel Mania",
      provider: "Mancala",
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/29001.png",
    },
    {
      id: 2,
      name: "Hot Fruits on Fire",
      provider: "Mancala",
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/22001.png",
    },
    {
      id: 3,
      name: "#BarsAndBells",
      provider: "Mancala",
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/28001.png",
    },
    {
      id: 4,
      name: "Reel Reel Hot",
      provider: "Mancala",
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/24001.png",
    },
    {
      id: 5,
      name: "Spirit of the Lake",
      provider: "Mancala",
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/20001.png",
    },
    {
      id: 6,
      name: "The Twin Wins Mystery",
      provider: "Mancala",
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/21001.png",
    },
  ];

  // Prevent scrolling of the page while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-gray-800 text-gray-300 w-full max-w-4xl rounded-lg p-6 shadow-lg overflow-y-auto animate-fade-in">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>

        {/* Search Input */}
        <div className="mb-6">
          <div className="flex items-center bg-gray-700 rounded-full px-4 py-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search Games"
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <p className="mt-2 text-gray-500 text-sm">Find your games</p>
        </div>

        {/* Recommended Games Section */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Recommended for you
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {recommendedGames.map((game) => (
              <div
                key={game.id}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={game.img}
                  alt={game.name}
                  className="object-cover w-full h-40"
                />
                <div className="p-3">
                  <h4 className="text-sm text-white truncate">{game.name}</h4>
                  <p className="text-xs text-gray-400">{game.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-end mt-6 space-x-4">
          <button className="text-gray-400 hover:text-yellow-500">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="text-gray-400 hover:text-yellow-500">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
