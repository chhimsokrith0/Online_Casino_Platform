"use client";

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCrown,
  faGift,
  faHistory,
  faChartBar,
  faDollarSign,
  faArrowCircleUp,
  faBoxOpen,
  faSignOutAlt,
  faCog,
  faStar,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import gsap from "gsap";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import QuestsModal from "@/app/[locale]/Quests/QuestsModal";
import LogoutConfirmationModal from "./LogoutConfirmationModal";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, locale }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const actionRefs = useRef<HTMLButtonElement[]>([]);
  const logoutRef = useRef<HTMLButtonElement | null>(null);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const t = useTranslations("ProfileModal");
  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false)

  const logoutModalRef = useRef<HTMLDivElement>(null);






  const handleButtonClickModal = (label: string) => {
    if (label === t("menu.quests")) {
      setIsQuestsModalOpen(true); // Open the modal when "Quests" is clicked
    }
  };

  const handleCloseQuestsModal = () => {
    setIsQuestsModalOpen(false); // Close the modal
  };


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling

      // GSAP animations
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" }
      );

      gsap.fromTo(
        actionRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out", delay: 0.2 }
      );

      gsap.fromTo(
        logoutRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.8, ease: "power4.out" }
      );
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); // Close the modal if clicked outside
      }
    };

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  useEffect(() => {
    if (showLogoutModal) {
      gsap.fromTo(
        logoutModalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, [showLogoutModal]);

  if (!isOpen) return null;

  const handleButtonClick = () => {
    onClose(); // Hide modal when a button is clicked
  };

  const handleLogout = () => {
    signOut({
      redirect: true,
      callbackUrl: "/", // Redirect to the home page or login page
    });
    onClose();
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false); // Close the logout confirmation modal
  };

  return (
    <>
      <div
        ref={modalRef}
        className="hidden sm:block absolute top-20 w-90 sm:w-[500px] right-36 bg-gray-900 rounded-lg p-1 text-white shadow-lg z-50 overflow-y-auto animate-fade-in"
      >
        <div className="p-2 text-white rounded-lg w-full">
          {/* Header */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              {/* User Information */}
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                  alt="User Level"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold"> {t("header.username")} </h2>
                  <p className="text-yellow-400 text-sm">{t("header.points")}</p>
                </div>
              </div>
              {/* Settings Button */}
              <Link
                href={`/${locale}/general-setting`}
                className="text-gray-400 hover:text-yellow-500 flex items-center gap-2"
                onClick={handleButtonClick}
              >
                <span>{t("header.generalSetting")}</span>
                <FontAwesomeIcon icon={faCog} />
              </Link>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">{t("header.progress.label")}</p>
              <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
                <div className="bg-yellow-500 h-full" style={{ width: "0%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{t("header.progress.bronze")}</span>
                <span>{t("header.progress.silver")}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: faUser, label: t("menu.myProfile"), link: `/${locale}/account-information`, active: false },
                { icon: faCrown, label: t("menu.levels"), link: `/${locale}/member-level`, active: false },
                { icon: faGift, label: t("menu.reward"), link: `/${locale}/Reward/random-card`, active: false },
                { icon: faHistory, label: t("menu.history"), link: `/${locale}/account-information/transactions`, active: false },
                { icon: faArrowCircleUp, label: t("menu.rebate"), link: `/${locale}/account-information/rebate`, active: false },
                { icon: faDollarSign, label: t("menu.cashback"), link: `/${locale}/account-information/cashback`, active: false },
                { icon: faBoxOpen, label: t("menu.referral"), link: `/${locale}/account-information/affiliate`, active: false },
                { icon: faChartBar, label: t("menu.totalBet"), link: `/${locale}/account-information/total-bet`, active: false },
                { icon: faStar, label: t("menu.pointHistory"), link: `/${locale}/account-information/current-point`, active: false },
                { icon: faBolt, label: t("menu.quests"), link: "#", active: false }, // No link for Quests, handle with modal
              ].map((action, index) => (
                <Link
                  href={action.link}
                  key={index}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg transition w-full ${action.active ? "text-white" : "hover:bg-gradient-to-r from-yellow-500 to-yellow-600"
                    }`}
                  onClick={() => handleButtonClickModal(action.label)}
                >
                  <FontAwesomeIcon
                    icon={action.icon}
                    className={`text-lg ${action.active ? "text-white" : "text-gray-300"}`}
                  />
                  <span className="whitespace-nowrap">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <button
            ref={logoutRef}
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-start gap-2 mt-4 p-3 rounded-lg w-[200px] hover:bg-gray-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg text-gray-400" />
            <span className="text-sm text-gray-400">{t("logout")}</span>
          </button>
        </div>
      </div>

      {isQuestsModalOpen && (
        <QuestsModal isOpen={isQuestsModalOpen} onClose={handleCloseQuestsModal} />
      )}

      {/* Mobile Modal */}
      <div
        ref={modalRef}
        className="block sm:hidden h-screen fixed top-[130px] sm:top-20 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-md bg-gray-900 rounded-lg p-1 text-white shadow-lg z-50 overflow-y-auto"
      >
        <div className="p-1 text-white rounded-lg w-full">
          {/* Header */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              {/* User Information */}
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                  alt="User Level"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold"> {t("header.username")} </h2>
                  <p className="text-yellow-400 text-sm">{t("header.points")}</p>
                </div>
              </div>
              {/* Settings Button */}
              <button
                className="text-gray-400 hover:text-yellow-500 flex items-center gap-2"
                onClick={onClose}
              >
                <span>Settings</span>
                <FontAwesomeIcon icon={faCog} />
              </button>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">{t("header.progress.label")}</p>
              <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
                <div className="bg-yellow-500 h-full" style={{ width: "0%" }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{t("header.progress.bronze")}</span>
                <span>{t("header.progress.silver")}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: faUser, label: t("menu.myProfile"), link: `/${locale}/account-information`, active: false },
                { icon: faCrown, label: t("menu.levels"), link: `/${locale}/member-level`, active: false },
                { icon: faGift, label: t("menu.reward"), link: `/${locale}/Reward/random-card`, active: false },
                { icon: faHistory, label: t("menu.history"), link: `/${locale}/account-information/transactions`, active: false },
                { icon: faArrowCircleUp, label: t("menu.rebate"), link: `/${locale}/account-information/rebate`, active: false },
                { icon: faDollarSign, label: t("menu.cashback"), link: `/${locale}/account-information/cashback`, active: false },
                { icon: faBoxOpen, label: t("menu.referral"), link: `/${locale}/account-information/affiliate`, active: false },
                { icon: faChartBar, label: t("menu.totalBet"), link: `/${locale}/account-information/total-bet`, active: false },
                { icon: faStar, label: t("menu.pointHistory"), link: `/${locale}/account-information/current-point`, active: false },
                { icon: faBolt, label: t("menu.quests"), link: "#", active: false },
              ].map((action, index) => (
                <Link
                  href={action.link}
                  key={index}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg transition w-full ${action.active ? "text-white" : "hover:bg-gradient-to-r from-yellow-500 to-yellow-600"
                    }`}
                  onClick={() => handleButtonClickModal(action.label)}
                >
                  <FontAwesomeIcon
                    icon={action.icon}
                    className={`text-lg ${action.active ? "text-white" : "text-gray-300"}`}
                  />
                  <span className="whitespace-nowrap">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>


          {/* Logout Button */}
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-start gap-2 mt-4 bg-gray-800 w-1/3 p-3 rounded-lg w-full hover:bg-red-600 transition"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-lg text-gray-400" />
            <span className="text-sm text-gray-400">{t("logout")}</span>
          </button>
        </div>
      </div>


      {/* Logout Confirmation Modal */}
      <LogoutConfirmationModal
        isOpen={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default ProfileModal;



// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faCrown,
//   faGift,
//   faHistory,
//   faChartBar,
//   faDollarSign,
//   faArrowCircleUp,
//   faBoxOpen,
//   faSignOutAlt,
//   faCog,
//   faStar,
//   faBolt,
// } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import gsap from "gsap";
// import { signOut } from "next-auth/react";
// import { useTranslations } from "next-intl";
// import QuestsModal from "@/app/[locale]/Quests/QuestsModal";
// import LogoutConfirmationModal from "./LogoutConfirmationModal";

// interface ProfileModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   locale: string;
// }

// const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, locale }) => {
//   const modalRef = useRef<HTMLDivElement>(null);
//   const actionRefs = useRef<HTMLButtonElement[]>([]);
//   const logoutRef = useRef<HTMLButtonElement | null>(null);

//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const t = useTranslations("ProfileModal");
//   const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);

//   const logoutModalRef = useRef<HTMLDivElement>(null);

//   const handleButtonClickModal = (label: string) => {
//     if (label === t("menu.quests")) {
//       setIsQuestsModalOpen(true);
//     }
//   };

//   const handleCloseQuestsModal = () => {
//     setIsQuestsModalOpen(false);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";

//       gsap.fromTo(
//         modalRef.current,
//         { opacity: 0, scale: 0.9 },
//         { opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" }
//       );

//       gsap.fromTo(
//         actionRefs.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out", delay: 0.2 }
//       );

//       gsap.fromTo(
//         logoutRef.current,
//         { opacity: 0, scale: 0.9 },
//         { opacity: 1, scale: 1, duration: 0.5, delay: 0.8, ease: "power4.out" }
//       );
//     } else {
//       document.body.style.overflow = "";
//     }

//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.body.style.overflow = "";
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen, onClose]);

//   useEffect(() => {
//     if (showLogoutModal) {
//       gsap.fromTo(
//         logoutModalRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
//       );
//     }
//   }, [showLogoutModal]);

//   if (!isOpen) return null;

//   const handleLogout = () => {
//     signOut({
//       redirect: true,
//       callbackUrl: "/",
//     });
//     onClose();
//   };

//   return (
//     <>
//       <div
//         ref={modalRef}
//         className="absolute top-20 w-full max-w-sm md:max-w-lg bg-gray-900 rounded-lg p-4 text-white shadow-lg z-50 overflow-y-auto animate-fade-in"
//       >
//         <div className="p-4 text-white rounded-lg">
//           <div className="bg-gray-800 p-4 rounded-lg mb-6">
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center gap-3">
//                 <img
//                   src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
//                   alt="User Level"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <h2 className="text-lg font-bold">{t("header.username")}</h2>
//                   <p className="text-yellow-400 text-sm">{t("header.points")}</p>
//                 </div>
//               </div>
//               <Link
//                 href={`/${locale}/general-setting`}
//                 className="text-gray-400 hover:text-yellow-500 flex items-center gap-2"
//                 onClick={onClose}
//               >
//                 <span>{t("header.generalSetting")}</span>
//                 <FontAwesomeIcon icon={faCog} />
//               </Link>
//             </div>
//             <div className="mb-4">
//               <p className="text-sm text-gray-400">{t("header.progress.label")}</p>
//               <div className="bg-gray-700 rounded-full h-2 w-full overflow-hidden mt-1">
//                 <div className="bg-yellow-500 h-full" style={{ width: "0%" }} />
//               </div>
//               <div className="flex justify-between text-xs text-gray-400 mt-2">
//                 <span>{t("header.progress.bronze")}</span>
//                 <span>{t("header.progress.silver")}</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-800 p-4 rounded-lg">
//             <div className="grid grid-cols-2 gap-2 md:gap-4">
//               {[{
//                 icon: faUser,
//                 label: t("menu.myProfile"),
//                 link: `/${locale}/account-information`,
//               },
//               { icon: faCrown, label: t("menu.levels"), link: `/${locale}/member-level` },
//               { icon: faGift, label: t("menu.reward"), link: `/${locale}/Reward/random-card` },
//               { icon: faHistory, label: t("menu.history"), link: `/${locale}/account-information/transactions` },
//               { icon: faArrowCircleUp, label: t("menu.rebate"), link: `/${locale}/account-information/rebate` },
//               { icon: faDollarSign, label: t("menu.cashback"), link: `/${locale}/account-information/cashback` },
//               { icon: faBoxOpen, label: t("menu.referral"), link: `/${locale}/account-information/affiliate` },
//               { icon: faChartBar, label: t("menu.totalBet"), link: `/${locale}/account-information/total-bet` },
//               { icon: faStar, label: t("menu.pointHistory"), link: `/${locale}/account-information/current-point` },
//               { icon: faBolt, label: t("menu.quests"), link: "#" },
//               ].map((action, index) => (
//                 <Link
//                   href={action.link}
//                   key={index}
//                   className="flex items-center gap-3 px-2 py-2 rounded-lg transition w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-600"
//                   onClick={() => handleButtonClickModal(action.label)}
//                 >
//                   <FontAwesomeIcon icon={action.icon} className="text-lg text-gray-300" />
//                   <span>{action.label}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <button
//             ref={logoutRef}
//             onClick={() => setShowLogoutModal(true)}
//             className="flex items-center justify-start gap-2 mt-4 p-3 rounded-lg w-full hover:bg-gray-600 transition"
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} className="text-lg text-gray-400" />
//             <span className="text-sm text-gray-400">{t("logout")}</span>
//           </button>
//         </div>
//       </div>
//       {isQuestsModalOpen && (
//         <QuestsModal isOpen={isQuestsModalOpen} onClose={handleCloseQuestsModal} />
//       )}
//       <LogoutConfirmationModal
//         isOpen={showLogoutModal}
//         onCancel={() => setShowLogoutModal(false)}
//         onConfirm={handleLogout}
//       />
//     </>
//   );
// };

// export default ProfileModal;
