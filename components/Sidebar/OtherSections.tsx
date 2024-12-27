
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import { useSession } from "next-auth/react";
// import InviteModal from "./InviteModal";
// import {
//   AccountBalance,
//   BarChart,
//   DirectionsRun,
//   SportsEsports,
//   Casino,
//   RocketLaunch,
//   Favorite,
//   AccessTime,
// } from "@mui/icons-material";

// const OtherSections = ({
//   locale,
//   activeItem,
//   setActiveItem,
//   isCollapsed,
// }: {
//   locale: string;
//   activeItem: string;
//   setActiveItem: (item: string) => void;
//   isCollapsed: boolean;
// }) => {
//   const t = useTranslations("slidebar");
//   const { data: session } = useSession();
//   const [isModalOpen, setModalOpen] = useState(false);

//   // Section Data
//   const sections = [
//     { key: "providers", icon: <AccountBalance />, color: "text-yellow-500" },
//     { key: "RtpSlot", icon: <BarChart />, color: "text-purple-500" },
//     { key: "Sport", icon: <DirectionsRun />, color: "text-blue-500" },
//     { key: "Fishing", icon: <SportsEsports />, color: "text-teal-500" },
//     { key: "Virtual", icon: <Casino />, color: "text-red-500" },
//     { key: "Crash", icon: <RocketLaunch />, color: "text-orange-500" },
//     { key: "Lotto", icon: <Casino />, color: "text-green-500" },
//   ];

//   return (
//     <div className={`mt-6 ${isCollapsed ? "text-center" : ""}`}>
//       {/* Divider */}
//       <div className="border-t border-gray-700 my-4"></div>

//       {/* Special Bonus Section */}
//       {session && (
//         <div>
//           {!isCollapsed && (
//             <h3 className="text-gray-400 font-bold mb-4">Special Bonus</h3>
//           )}

//           {/* Invite and Benefit */}
//           <li
//             onClick={() => setModalOpen(true)}
//             className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
//               } px-4 py-2 cursor-pointer rounded-lg transition-all ${activeItem === "inviteAndBenefit"
//                 ? "bg-gray-700 text-white"
//                 : "hover:bg-gray-800 text-gray-400"
//               }`}
//           >
//             <div className="relative group">
//               <span className="text-lg">💸</span> {/* Emoji icon for Invite */}
//               {isCollapsed && (
//                 <span className="absolute left-12 top-1/2 -translate-y-1/2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                   Invite and Benefit
//                 </span>
//               )}
//             </div>
//             {!isCollapsed && (
//               <span className="font-medium">
//                 {t("SpecialBonus.InviteAndBenefits")}
//               </span>
//             )}
//           </li>


//           {/* Favorite Games */}
//           <Link href={`/${locale}/SpecialBonus/FavouriteGames`}>
//             <li
//               onClick={() => setActiveItem("favoriteGames")}
//               className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
//                 } px-4 py-2 cursor-pointer rounded-lg transition-all ${activeItem === "favoriteGames"
//                   ? "bg-gray-700 text-white"
//                   : "hover:bg-gray-800 text-gray-400"
//                 }`}
//             >
//               <Favorite />
//               {!isCollapsed && (
//                 <span className="font-medium">
//                   {t("SpecialBonus.FavoriteGames")}
//                 </span>
//               )}
//             </li>
//           </Link>

//           {/* Recently Played */}
//           <Link href={`/${locale}/SpecialBonus/recently`}>
//             <li
//               onClick={() => setActiveItem("recentlyPlayed")}
//               className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
//                 } px-4 py-2 cursor-pointer rounded-lg transition-all ${activeItem === "recentlyPlayed"
//                   ? "bg-gray-700 text-white"
//                   : "hover:bg-gray-800 text-gray-400"
//                 }`}
//             >
//               <AccessTime />
//               {!isCollapsed && (
//                 <span className="font-medium">
//                   {t("SpecialBonus.RecentlyPlayed")}
//                 </span>
//               )}
//             </li>
//           </Link>
//           <div className="border-t border-gray-700 my-4"></div>
//         </div>
//       )}

//       {/* Other Sections */}
//       {sections.map((section) => (
//         <Link href={`/${locale}/Games/${section.key}`} key={section.key}>
//           <li
//             onClick={() => setActiveItem(section.key)}
//             className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
//               } px-4 py-2 rounded-lg transition-all ${activeItem === section.key
//                 ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//                 : "hover:bg-gray-800"
//               }`}
//           >
//             <div className="relative group">
//               {section.icon}
//               {isCollapsed && (
//                 <span className="absolute left-12 top-1/2 -translate-y-1/2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                   {t(section.key)}
//                 </span>
//               )}
//             </div>
//             {!isCollapsed && (
//               <span className="font-medium">{t(section.key)}</span>
//             )}
//           </li>
//         </Link>
//       ))}

//       {/* Invite Modal */}
//       <InviteModal
//         isOpen={isModalOpen}
//         onClose={() => setModalOpen(false)}
//         referralLink="https://ICGGaming.co?ref_code=IP7MSaJ9aH"
//         referralCode="IP7MSaJ9aH"
//       />
//     </div>
//   );
// };

// export default OtherSections;







"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"; // Import for dynamic routing
import { useSession } from "next-auth/react";
import InviteModal from "./InviteModal";
import {
  AccountBalance,
  BarChart,
  DirectionsRun,
  SportsEsports,
  Casino,
  RocketLaunch,
  Favorite,
  AccessTime,
} from "@mui/icons-material";

const OtherSections = ({
  locale,
  activeItem,
  setActiveItem,
  isCollapsed,
}: {
  locale: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
  isCollapsed: boolean;
}) => {
  const t = useTranslations("slidebar");
  const { data: session } = useSession();
  const [isModalOpen, setModalOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Section Data
  const sections = [
    { key: "providers", icon: <AccountBalance />, color: "text-yellow-500" },
    { key: "RtpSlot", icon: <BarChart />, color: "text-purple-500" },
    { key: "Sport", icon: <DirectionsRun />, color: "text-blue-500" },
    { key: "Fishing", icon: <SportsEsports />, color: "text-teal-500" },
    { key: "Virtual", icon: <Casino />, color: "text-red-500" },
    { key: "Crash", icon: <RocketLaunch />, color: "text-orange-500" },
    { key: "Lotto", icon: <Casino />, color: "text-green-500" },
  ];

  useEffect(() => {
    if (!pathname) return;

    // Dynamically update activeItem based on the current route
    if (pathname.includes("/SpecialBonus/FavouriteGames")) {
      setActiveItem("favoriteGames");
    } else if (pathname.includes("/SpecialBonus/recently")) {
      setActiveItem("recentlyPlayed");
    } else {
      sections.forEach((section) => {
        if (pathname.includes(`/Games/${section.key}`)) {
          setActiveItem(section.key);
        }
      });
    }
  }, [pathname, setActiveItem, sections]);

  return (
    <div className={`mt-6 ${isCollapsed ? "text-center" : ""}`}>
      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Special Bonus Section */}
      {session && (
        <div>
          {!isCollapsed && (
            <h3 className="text-gray-400 font-bold mb-4">Special Bonus</h3>
          )}

          {/* Invite and Benefit */}
          <li
            onClick={() => setModalOpen(true)}
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "gap-3"
            } px-4 py-2 cursor-pointer rounded-lg transition-all ${
              activeItem === "inviteAndBenefit"
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-800 text-gray-400"
            }`}
          >
            <div className="relative group">
              <span className="text-lg">💸</span> {/* Emoji icon for Invite */}
              {isCollapsed && (
                <span className="absolute left-12 top-1/2 -translate-y-1/2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Invite and Benefit
                </span>
              )}
            </div>
            {!isCollapsed && (
              <span className="font-medium">
                {t("SpecialBonus.InviteAndBenefits")}
              </span>
            )}
          </li>

          {/* Favorite Games */}
          <Link href={`/${locale}/SpecialBonus/FavouriteGames`}>
            <li
              onClick={() => setActiveItem("favoriteGames")}
              className={`flex items-center ${
                isCollapsed ? "justify-center" : "gap-3"
              } px-4 py-2 cursor-pointer rounded-lg transition-all ${
                activeItem === "favoriteGames"
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800 text-gray-400"
              }`}
            >
              <Favorite />
              {!isCollapsed && (
                <span className="font-medium">
                  {t("SpecialBonus.FavoriteGames")}
                </span>
              )}
            </li>
          </Link>

          {/* Recently Played */}
          <Link href={`/${locale}/SpecialBonus/recently`}>
            <li
              onClick={() => setActiveItem("recentlyPlayed")}
              className={`flex items-center ${
                isCollapsed ? "justify-center" : "gap-3"
              } px-4 py-2 cursor-pointer rounded-lg transition-all ${
                activeItem === "recentlyPlayed"
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800 text-gray-400"
              }`}
            >
              <AccessTime />
              {!isCollapsed && (
                <span className="font-medium">
                  {t("SpecialBonus.RecentlyPlayed")}
                </span>
              )}
            </li>
          </Link>
          <div className="border-t border-gray-700 my-4"></div>
        </div>
      )}

      {/* Other Sections */}
      {sections.map((section) => (
        <Link href={`/${locale}/Games/${section.key}`} key={section.key}>
          <li
            onClick={() => setActiveItem(section.key)}
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "gap-3"
            } px-4 py-2 rounded-lg transition-all ${
              activeItem === section.key
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="relative group">
              {section.icon}
              {isCollapsed && (
                <span className="absolute left-12 top-1/2 -translate-y-1/2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {t(section.key)}
                </span>
              )}
            </div>
            {!isCollapsed && (
              <span className="font-medium">{t(section.key)}</span>
            )}
          </li>
        </Link>
      ))}

      {/* Invite Modal */}
      <InviteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        referralLink="https://ICGGaming.co?ref_code=IP7MSaJ9aH"
        referralCode="IP7MSaJ9aH"
      />
    </div>
  );
};

export default OtherSections;
