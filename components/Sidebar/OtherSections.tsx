

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBuildingColumns,
//   faChartBar,
//   faFishFins,
//   faRunning,
//   faGamepad,
//   faMeteor,
//   faHeart,
//   faClock,
//   faDiceD20,
// } from "@fortawesome/free-solid-svg-icons";
// import { useTranslations } from "next-intl";
// import { useSession } from "next-auth/react";
// import InviteModal from "./InviteModal";

// const OtherSections = ({
//   locale,
//   activeItem,
//   setActiveItem,
// }: {
//   locale: string;
//   activeItem: string;
//   setActiveItem: (item: string) => void;
// }) => {
//   const t = useTranslations("slidebar");
//   const { data: session } = useSession();
//   const [isModalOpen, setModalOpen] = React.useState(false);

//   return (
//     <div className="mt-6">
//       <div className="border-t border-gray-700 my-4"></div>

//       {/* Special Bonus Section - Visible only if logged in */}
//       {session && (
//         <div>
//           <h3 className="text-gray-400 font-bold mb-4">Special Bonus</h3>

//           {/* Invite and Benefit */}
//           <li
//             onClick={() => setModalOpen(true)}
//             className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg ${activeItem === "inviteAndBenefit"
//               ? "bg-gray-700 text-white"
//               : "hover:bg-gray-800 text-gray-400"
//               }`}
//           >
//             <div className="flex items-center gap-2">
//               <img
//                 src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734068020/inviteAndBenefit_ycm1bw.svg" // Replace with the actual icon link
//                 alt="Invite Icon"
//                 className="w-5 h-5"
//               />
//               <span className="font-medium">Invite and Benefit</span>
//             </div>
//           </li>

//           {/* Favorite Games */}
//           <li
//             onClick={() => setActiveItem("favoriteGames")}
//             className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg ${activeItem === "favoriteGames"
//               ? "bg-gray-700 text-white"
//               : "hover:bg-gray-800 text-gray-400"
//               }`}
//           >
//             <Link href={`/${locale}/SpecialBonus/FavouriteGames`}>
//               <div className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faHeart} className="text-gray-400" />
//                 <span className="font-medium">Favorite Games</span>
//               </div>
//             </Link>

//           </li>

//           {/* Recently Played */}
//           <li
//             onClick={() => setActiveItem("recentlyPlayed")}
//             className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg ${activeItem === "recentlyPlayed"
//               ? "bg-gray-700 text-white"
//               : "hover:bg-gray-800 text-gray-400"
//               }`}
//           >
//             <Link href={`/${locale}/SpecialBonus/recently`}>
//               <div className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faClock} className="text-gray-400" />
//                 <span className="font-medium">Recently Played</span>
//               </div>
//             </Link>
//           </li>

//           <div className="border-t border-gray-700 my-4"></div>
//         </div>

//       )}

//       {/* Other Sections */}
//       <Link href={`/${locale}/providers`} passHref>
//         <li
//           onClick={() => setActiveItem("providers")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "providers"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for Providers */}
//           <FontAwesomeIcon icon={faBuildingColumns} className="text-lg text-yellow-500" />
//           <span>{t("providers")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/RtpSlot`}>
//         <li
//           onClick={() => setActiveItem("rtpSlots")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "rtpSlots"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for RTP Slots */}
//           <FontAwesomeIcon icon={faChartBar} className="text-lg text-purple-500" />
//           <span>{t("rtpSlots")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/Sport`}>
//         <li
//           onClick={() => setActiveItem("sports")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "sports"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for Sports */}
//           <FontAwesomeIcon icon={faRunning} className="text-lg text-blue-500" />
//           <span>{t("sports")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/Fishing`}>
//         <li
//           onClick={() => setActiveItem("fishing")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "fishing"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for Fishing */}
//           <FontAwesomeIcon icon={faFishFins} className="text-lg text-teal-500" />
//           <span>{t("fishing")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/Virtual`}>
//         <li
//           onClick={() => setActiveItem("virtual")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "virtual"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for Virtual */}
//           <FontAwesomeIcon icon={faGamepad} className="text-lg text-red-500" />
//           <span>{t("virtual")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/Virtual`}>
//         <li
//           onClick={() => setActiveItem("crash")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "crash"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for Crash */}
//           <FontAwesomeIcon icon={faMeteor} className="text-lg text-orange-500" />
//           <span>Crash</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/Virtual`}>
//         <li
//           onClick={() => setActiveItem("lotto")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "lotto"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           {/* Updated Icon for Lotto */}
//           <FontAwesomeIcon icon={faDiceD20} className="text-lg text-green-500" />
//           <span>Lotto</span>
//         </li>
//       </Link>




//       <InviteModal
//         isOpen={isModalOpen}
//         onClose={() => setModalOpen(false)}
//         referralLink="https://playgame168.co?ref_code=IP7MSaJ9aH"
//         referralCode="IP7MSaJ9aH"
//       />
//     </div>
//   );
// };

// export default OtherSections;


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChartBar,
  faFishFins,
  faRunning,
  faGamepad,
  faMeteor,
  faHeart,
  faClock,
  faDiceD20,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import InviteModal from "./InviteModal";

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

  // Section Data
  const sections = [
    { key: "providers", icon: faBuildingColumns, color: "text-yellow-500" },
    { key: "RtpSlot", icon: faChartBar, color: "text-purple-500" },
    { key: "Sport", icon: faRunning, color: "text-blue-500" },
    { key: "Fishing", icon: faFishFins, color: "text-teal-500" },
    { key: "Virtual", icon: faGamepad, color: "text-red-500" },
    { key: "Crash", icon: faMeteor, color: "text-orange-500" },
    { key: "Lotto", icon: faDiceD20, color: "text-green-500" },
  ];

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
            className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
              } px-4 py-2 cursor-pointer rounded-lg transition-all ${activeItem === "inviteAndBenefit"
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-800 text-gray-400"
              }`}
          >
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734068020/inviteAndBenefit_ycm1bw.svg"
                alt="Invite Icon"
                className="w-5 h-5"
              />
              {isCollapsed && (
                <span className="absolute left-12 top-1/2 -translate-y-1/2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Invite and Benefit
                </span>
              )}
            </div>
            {!isCollapsed && <span className="font-medium">{ t("SpecialBonus.InviteAndBenefits") }</span>}
          </li>

          {/* Favorite Games */}
          <Link href={`/${locale}/SpecialBonus/FavouriteGames`}>
            <li
              onClick={() => setActiveItem("favoriteGames")}
              className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
                } px-4 py-2 cursor-pointer rounded-lg transition-all ${activeItem === "favoriteGames"
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800 text-gray-400"
                }`}
            >
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              {!isCollapsed && <span className="font-medium"> { t("SpecialBonus.FavoriteGames") } </span>}
            </li>
          </Link>

          {/* Recently Played */}
          <Link href={`/${locale}/SpecialBonus/recently`}>
            <li
              onClick={() => setActiveItem("recentlyPlayed")}
              className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
                } px-4 py-2 cursor-pointer rounded-lg transition-all ${activeItem === "recentlyPlayed"
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800 text-gray-400"
                }`}
            >
              <FontAwesomeIcon icon={faClock} className="text-yellow-400" />
              {!isCollapsed && <span className="font-medium">{ t("SpecialBonus.RecentlyPlayed") }</span>}
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
            className={`flex items-center ${isCollapsed ? "justify-center" : "gap-3"
              } px-4 py-2 rounded-lg transition-all ${activeItem === section.key
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "hover:bg-gray-800"
              }`}
          >
            <div className="relative group">
              <FontAwesomeIcon
                icon={section.icon}
                className={`text-lg ${section.color} transition-transform duration-300 group-hover:scale-110`}
              />
              {/* Tooltip */}
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
