// "use client";

// import React from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouseUser, faGamepad, faDice } from "@fortawesome/free-solid-svg-icons";
// import { useTranslations } from "next-intl";

// const NavigationMenu = ({
//   locale,
//   activeItem,
//   setActiveItem,
// }: {
//   locale: string;
//   activeItem: string;
//   setActiveItem: (item: string) => void;
// }) => {
//   const t = useTranslations("slidebar");

//   return (
//     <>
//       <Link href={`/${locale}/`}>
//         <li
//           onClick={() => setActiveItem("home")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "home"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faHouseUser} className="text-lg text-yellow-400" />
//           <span className="font-medium">{t("home")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/slots`}>
//         <li
//           onClick={() => setActiveItem("slots")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "slots"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faGamepad} className="text-lg text-pink-500" />
//           <span className="font-medium">{t("slots")}</span>
//         </li>
//       </Link>

//       <Link href={`/${locale}/Games/LiveCasino`}>
//         <li
//           onClick={() => setActiveItem("liveCasino")}
//           className={`flex items-center gap-3 px-4 py-2 rounded-lg ${activeItem === "liveCasino"
//               ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
//               : "hover:bg-gray-800"
//             }`}
//         >
//           <FontAwesomeIcon icon={faDice} className="text-lg text-purple-400" />
//           <span className="font-medium">{t("liveCasino")}</span>
//         </li>
//       </Link>

//     </>
//   );
// };

// export default NavigationMenu;




"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faGamepad, faDice } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const NavigationMenu = ({
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

  return (
    <>
      {/* Home */}
      <Link href={`/${locale}/`}>
        <li
          onClick={() => setActiveItem("home")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "home"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
              : "hover:bg-gray-800"
          }`}
        >
          <FontAwesomeIcon icon={faHouseUser} className="text-lg text-yellow-400" />
          {!isCollapsed && <span className="font-medium">{t("home")}</span>}
        </li>
      </Link>

      {/* Slots */}
      <Link href={`/${locale}/Games/slots`}>
        <li
          onClick={() => setActiveItem("slots")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "slots"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
              : "hover:bg-gray-800"
          }`}
        >
          <FontAwesomeIcon icon={faGamepad} className="text-lg text-pink-500" />
          {!isCollapsed && <span className="font-medium">{t("slots")}</span>}
        </li>
      </Link>

      {/* Live Casino */}
      <Link href={`/${locale}/Games/LiveCasino`}>
        <li
          onClick={() => setActiveItem("liveCasino")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeItem === "liveCasino"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-md"
              : "hover:bg-gray-800"
          }`}
        >
          <FontAwesomeIcon icon={faDice} className="text-lg text-purple-400" />
          {!isCollapsed && <span className="font-medium">{t("liveCasino")}</span>}
        </li>
      </Link>
    </>
  );
};

export default NavigationMenu;
