"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const t = useTranslations("searchModal");
  const recommendedGames = [
    {
      id: 1,
      name: t("recommended.games.game1.name"),
      provider: t("recommended.games.game1.provider"),
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/29001.png",
    },
    {
      id: 2,
      name: t("recommended.games.game2.name"),
      provider: t("recommended.games.game2.provider"),
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/22001.png",
    },
    {
      id: 3,
      name: t("recommended.games.game3.name"),
      provider: t("recommended.games.game3.provider"),
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/28001.png",
    },
    {
      id: 4,
      name: t("recommended.games.game4.name"),
      provider: t("recommended.games.game4.provider"),
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/24001.png",
    },
    {
      id: 5,
      name: t("recommended.games.game5.name"),
      provider: t("recommended.games.game5.provider"),
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/20001.png",
    },
    {
      id: 6,
      name: t("recommended.games.game6.name"),
      provider: t("recommended.games.game6.provider"),
      img: "https://storage.googleapis.com/luxino-public/game/mancala/Thumb/21001.png",
    },
  ];

  const modalRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const handleHover = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div
        ref={modalRef}
        className="relative bg-gray-900 text-gray-300 w-full max-w-4xl rounded-lg p-6 shadow-xl overflow-y-auto h-[85vh] sm:h-auto"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Search Input */}
        <div className="mb-6">
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-3">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder={t("searchBar.placeholder")}
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>
          <p className="mt-2 text-gray-500 text-xs">{t("searchBar.description")}</p>
        </div>

        {/* Recommended Games Section */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            {t("recommended.title")}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {recommendedGames.map((game, index) => (
              <div
                key={game.id}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-transform"
              >
                <img
                  src={game.img}
                  alt={game.name}
                  className="object-cover w-full h-32 sm:h-36"
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
