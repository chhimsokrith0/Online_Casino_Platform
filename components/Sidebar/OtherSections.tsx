// "use client";

// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBuilding,
//   faChartLine,
//   faFutbol,
//   faFish,
//   faGamepad,
//   faUsers,
//   faHeart,
//   faClock,
// } from "@fortawesome/free-solid-svg-icons";
// import { useTranslations } from "next-intl";

// const OtherSections = ({
//   locale,
//   activeItem,
//   setActiveItem,
//   isLoggedIn,
// }: {
//   locale: string;
//   activeItem: string;
//   setActiveItem: (item: string) => void;
//   isLoggedIn: boolean;
// }) => {
//   const t = useTranslations("slidebar");

//   return (
//     <div className="mt-6">
//       <div className="border-t border-gray-700 my-4"></div>

//       {/* Special Bonus Section */}
//       {isLoggedIn && (
//         <div>
//           <h3 className="text-gray-400 font-bold mb-4">Special Bonus</h3>

//           {/* Invite and Benefit */}
//           <li
//             onClick={() => setActiveItem("inviteAndBenefit")}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "inviteAndBenefit"
//                 ? "bg-gray-700 text-white"
//                 : "hover:bg-gray-800 text-gray-400"
//               }`}
//           >
//             <FontAwesomeIcon icon={faUsers} />
//             <span>Invite and Benefit</span>
//           </li>

//           {/* Favorite Games */}
//           <li
//             onClick={() => setActiveItem("favoriteGames")}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "favoriteGames"
//                 ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//                 : "text-gray-500"
//               }`}
//           >
//             <FontAwesomeIcon icon={faHeart} />
//             <span>Favorite Games</span>
//           </li>

//           {/* Recently Played */}
//           <li
//             onClick={() => setActiveItem("recentlyPlayed")}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "recentlyPlayed"
//                 ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//                 : "text-gray-500"
//               }`}
//           >
//             <FontAwesomeIcon icon={faClock} />
//             <span>Recently Play</span>
//           </li>

//           <div className="border-t border-gray-700 my-4"></div>
//         </div>

//       )}

//       {/* Other Sections */}
//       <li
//         onClick={() => setActiveItem("providers")}
//         className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "providers"
//           ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//           : "hover:bg-gray-800"
//           }`}
//       >
//         <FontAwesomeIcon icon={faBuilding} />
//         <span>{t("providers")}</span>
//       </li>

//       <Link href={`/${locale}/Games`}>
//         <li
//           onClick={() => setActiveItem("rtpSlots")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "rtpSlots"
//             ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//             : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faChartLine} />
//           <span>{t("rtpSlots")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games`}>
//         <li
//           onClick={() => setActiveItem("sports")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "sports"
//             ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//             : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faFutbol} />
//           <span>{t("sports")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games`}>
//         <li
//           onClick={() => setActiveItem("fishing")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "fishing"
//             ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//             : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faFish} />
//           <span>{t("fishing")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games`}>
//         <li
//           onClick={() => setActiveItem("virtual")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "virtual"
//             ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//             : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faGamepad} />
//           <span>{t("virtual")}</span>
//         </li>
//       </Link>
//     </div>
//   );
// };

// export default OtherSections;



"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartLine,
  faFutbol,
  faFish,
  faGamepad,
  faUsers,
  faHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";
import InviteModal from "./InviteModal";

const OtherSections = ({
  locale,
  activeItem,
  setActiveItem,
}: {
  locale: string;
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const t = useTranslations("slidebar");
  const { data: session } = useSession();
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="mt-6">
      <div className="border-t border-gray-700 my-4"></div>

      {/* Special Bonus Section - Visible only if logged in */}
      {session && (
        <div>
          <h3 className="text-gray-400 font-bold mb-4">Special Bonus</h3>

          {/* Invite and Benefit */}
          <li
            onClick={() => setModalOpen(true)}
            className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg ${activeItem === "inviteAndBenefit"
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-800 text-gray-400"
              }`}
          >
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734068020/inviteAndBenefit_ycm1bw.svg" // Replace with the actual icon link
                alt="Invite Icon"
                className="w-5 h-5"
              />
              <span className="font-medium">Invite and Benefit</span>
            </div>
          </li>

          {/* Favorite Games */}
          <li
            onClick={() => setActiveItem("favoriteGames")}
            className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg ${activeItem === "favoriteGames"
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-800 text-gray-400"
              }`}
          >
            <Link href={`/${locale}/SpecialBonus/FavouriteGames`}>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHeart} className="text-gray-400" />
                <span className="font-medium">Favorite Games</span>
              </div>
            </Link>

          </li>

          {/* Recently Played */}
          <li
            onClick={() => setActiveItem("recentlyPlayed")}
            className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg ${activeItem === "recentlyPlayed"
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-800 text-gray-400"
              }`}
          >
            <Link href={`/${locale}/SpecialBonus/recently`}>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-gray-400" />
                <span className="font-medium">Recently Played</span>
              </div>
            </Link>
          </li>

          <div className="border-t border-gray-700 my-4"></div>
        </div>

      )}

      {/* Other Sections */}
      <Link href={`/${locale}/providers`} passHref>
        <li
          onClick={() => setActiveItem("providers")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "providers"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
            : "hover:bg-gray-800"
            }`}
        >
          <FontAwesomeIcon icon={faBuilding} />
          <span>{t("providers")}</span>
        </li>
      </Link>


      <Link href={`/${locale}/Games/RtpSlot`}>
        <li
          onClick={() => setActiveItem("rtpSlots")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "rtpSlots"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
            : "hover:bg-gray-800"
            }`}
        >
          <FontAwesomeIcon icon={faChartLine} />
          <span>{t("rtpSlots")}</span>
        </li>
      </Link>

      <Link href={`/${locale}/Games/Sport`}>
        <li
          onClick={() => setActiveItem("sports")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "sports"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
            : "hover:bg-gray-800"
            }`}
        >
          <FontAwesomeIcon icon={faFutbol} />
          <span>{t("sports")}</span>
        </li>
      </Link>

      <Link href={`/${locale}/Games/Fishing`}>
        <li
          onClick={() => setActiveItem("fishing")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "fishing"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
            : "hover:bg-gray-800"
            }`}
        >
          <FontAwesomeIcon icon={faFish} />
          <span>{t("fishing")}</span>
        </li>
      </Link>

      <Link href={`/${locale}/Games/Virtual`}>
        <li
          onClick={() => setActiveItem("virtual")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "virtual"
            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
            : "hover:bg-gray-800"
            }`}
        >
          <FontAwesomeIcon icon={faGamepad} />
          <span>{t("virtual")}</span>
        </li>
      </Link>


      <InviteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        referralLink="https://playgame168.co?ref_code=IP7MSaJ9aH"
        referralCode="IP7MSaJ9aH"
      />
    </div>
  );
};

export default OtherSections;
