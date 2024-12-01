import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faCrown,
  faGift,
  faTable,
  faChartLine,
  faTrophy,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Categories = ({ t, locale }: { t: any; locale: string }) => {
  const categories = [
    { id: 1, name: t("demo"), icon: <span className="text-green-500 text-lg font-bold">▶</span>, link: `/${locale}/Games`, active: false },
    { id: 2, name: t("allGames"), icon: <FontAwesomeIcon icon={faDice} />, link: `/${locale}/Games`, active: true },
    { id: 3, name: t("popularGames"), icon: <FontAwesomeIcon icon={faCrown} />, link: `/${locale}/Games`, active: false },
    { id: 4, name: t("newGames"), icon: <FontAwesomeIcon icon={faGift} />, link: `/${locale}/Games`, active: false },
    { id: 5, name: t("cashDrop"), icon: <FontAwesomeIcon icon={faChartLine} />, link: `/${locale}/Games`, active: false },
    { id: 6, name: t("jackpots"), icon: <FontAwesomeIcon icon={faTrophy} />, link: `/${locale}/Games`, active: false },
    { id: 7, name: t("megaways"), icon: <span className="text-lg font-bold">M</span>, link: `/${locale}/Games`, active: false },
    { id: 8, name: t("tableGames"), icon: <FontAwesomeIcon icon={faTable} />, link: `/${locale}/Games`, active: false },
  ];

  return (
    <div className="flex space-x-6 overflow-x-auto scrollbar-hide w-full md:w-auto">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.link}
          className={`flex flex-col items-center text-center ${
            category.active ? "text-yellow-500 font-semibold" : "text-gray-400 hover:text-yellow-500"
          } transition duration-300`}
        >
          <span className="text-xl mb-1">{category.icon}</span>
          <span className="text-sm whitespace-nowrap">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
