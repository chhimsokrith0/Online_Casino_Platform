"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faCrown,
  faGift,
  faTable,
  faChartLine,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const Categories = ({ t, locale }: { t: any; locale: string }) => {
  const categories = [
    { id: 1, name: t("demo"), icon: <span className="text-lg font-bold">▶</span>, link: `/${locale}/Games/all`, active: false },
    { id: 2, name: t("allGames"), icon: <FontAwesomeIcon icon={faDice} />, link: `/${locale}/Games/all`, active: true },
    { id: 3, name: t("popularGames"), icon: <FontAwesomeIcon icon={faCrown} />, link: `/${locale}/Games/all`, active: false },
    { id: 4, name: t("newGames"), icon: <FontAwesomeIcon icon={faGift} />, link: `/${locale}/Games/all`, active: false },
    { id: 5, name: t("cashDrop"), icon: <FontAwesomeIcon icon={faChartLine} />, link: `/${locale}/Games/all`, active: false },
    { id: 6, name: t("jackpots"), icon: <FontAwesomeIcon icon={faTrophy} />, link: `/${locale}/Games/all`, active: false },
    { id: 7, name: t("megaways"), icon: <span className="text-lg font-bold">M</span>, link: `/${locale}/Games/all`, active: false },
    { id: 8, name: t("tableGames"), icon: <FontAwesomeIcon icon={faTable} />, link: `/${locale}/Games/all`, active: false },
  ];

  const categoryRefs = useRef<HTMLDivElement[]>([]); // Updated type for refs

  useEffect(() => {
    // Fade-in animation for the categories
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

  const handleHover = (index: number) => {
    const element = categoryRefs.current[index];
    if (element) {
      gsap.to(element, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLeave = (index: number) => {
    const element = categoryRefs.current[index];
    if (element) {
      gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  return (
    <div className="flex space-x-6 overflow-x-auto scrollbar-hide w-full md:w-auto">
      {categories.map((category, index) => (
        <div
          key={category.id}
          ref={(el) => {
            if (el) categoryRefs.current[index] = el; // Assign each card's ref
          }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleLeave(index)}
        >
          <Link
            href={category.link}
            className={`flex flex-col items-center text-center ${
              category.active ? "text-yellow-500 font-semibold" : "text-gray-400 hover:text-yellow-500"
            } transition duration-300`}
          >
            <span className="text-xl mb-1">{category.icon}</span>
            <span className="text-sm whitespace-nowrap">{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
