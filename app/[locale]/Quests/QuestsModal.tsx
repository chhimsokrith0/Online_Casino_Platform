"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollLock } from "@/components/useScrollLock";
import buttonG from "@/assets/img_QuestsModal/button.svg";
import img_Dim from "@/assets/img_QuestsModal/Dim.webp";
import img_gite from "@/assets/img_QuestsModal/gite.png";
import img_winmore from "@/assets/img_QuestsModal/winmore.png";
import img_bg from "@/assets/img_QuestsModal/bg.png";
import PlayQuestsTab from "./PlayQuestsTab";
import DailyCheckInTab from "./DailyCheckInTab";
import { useTranslations } from "next-intl";
import "./style.css";

interface QuestsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestsModal: React.FC<QuestsModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"dailyCheckIn" | "playQuests">("dailyCheckIn");
  const [alerts, setAlerts] = useState<number[]>([]);
  const t = useTranslations("questsHub");

  useScrollLock(isOpen);

  const handleClaim = () => {
    setAlerts((prev) => [...prev, Date.now()]);
  };

  const handleCloneAlert = () => {
    setAlerts((prev) => [...prev, Date.now()]);
  };

  const handleCloseAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alertId) => alertId !== id));
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200] backdrop-blur-sm overflow-y-auto scrollbar-hide"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Main Modal Container */}
        <motion.div
          ref={modalRef}
          className="relative bg-gray-900 w-[95%] max-w-7xl h-[80%] sm:h-[95%] overflow-hidden rounded-lg shadow-lg"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Header (Sticky) */}
          <motion.div
            className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900 sticky top-0 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-white text-xl font-bold">{t("title")}</h2>
            <div className="flex items-center gap-4">
              {/* Diamond Icon Section */}
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg shadow-md">
                <img
                  className="w-4 h-4"
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733034979/eec3c896-fc98-4ed7-a4b1-c0c4d6e63e42_y0p6uo.webp"
                  alt="Diamond Icon"
                />
                <span className="text-yellow-400 font-bold">{t("stats.points")}</span>
              </div>
              {/* Quests Completed Section */}
              <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg shadow-md">
                <span className="text-white font-bold">🎯 {t("stats.questsCompleted")}</span>
              </div>
              {/* Close Icon */}
              <FontAwesomeIcon
                icon={faTimes}
                onClick={onClose}
                className="text-gray-400 cursor-pointer hover:text-white transition duration-300"
              />
            </div>
          </motion.div>

          {/* Body: Sidebar & Tab Content */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Sidebar (Sticky) */}
            <motion.div
              className="
                p-4
                sm:w-1/6
                text-white
                rounded-lg
                shadow-md
                bg-gray-900
                flex-shrink-0
                sm:sticky
                sm:top-[72px]  /* Adjust if needed to avoid overlapping the header */
                h-auto
                sm:h-[calc(100%-72px)]
                overflow-auto
              "
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h3 className="text-lg font-bold mb-6">{t("challenges")}</h3>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setActiveTab("dailyCheckIn")}
                  className={`py-4 text-white font-bold rounded-lg shadow-md transition-all ${
                    activeTab === "dailyCheckIn" ? "border-2 border-yellow-400" : ""
                  }`}
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733235314/btn_bg1_feqt2p.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {t("dailyCheckIn")}
                </button>
                <button
                  onClick={() => setActiveTab("playQuests")}
                  className={`py-4 text-white font-bold rounded-lg shadow-md transition-all ${
                    activeTab === "playQuests" ? "border-2 border-yellow-400" : ""
                  }`}
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733235315/btn_bg2_zsb5co.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {t("playQuests")}
                </button>
              </div>
            </motion.div>

            {/* Tab Content (Scrollable) */}
            <motion.div
              className="flex-grow overflow-auto p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {activeTab === "dailyCheckIn" && <DailyCheckInTab onClaim={handleClaim} />}
              {activeTab === "playQuests" && <PlayQuestsTab />}
            </motion.div>
          </motion.div>

          {/* Alerts */}
          <AnimatePresence>
            {alerts.map((alertId) => (
              <motion.div
                key={alertId}
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000]"
                style={{
                  backgroundImage: `url('${img_bg.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-labelledby="reward-modal-title"
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="rounded-lg p-8 text-center max-w-lg w-[90%] shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Header Image */}
                  <div className="relative">
                    <img
                      src={img_winmore.src}
                      alt="Play More, Win More"
                      className="w-64 mx-auto mb-6"
                    />
                  </div>

                  {/* Reward Image */}
                  <img src={img_gite.src} alt="Reward Box" className="w-40 mx-auto mb-4" />

                  {/* Reward Text */}
                  <p id="reward-modal-title" className="text-white text-xl mb-4 font-bold">
                    You have received 200 Points!
                  </p>

                  {/* Decorative Box Image */}
                  <img src={img_Dim.src} alt="Decorative" className="w-32 mx-auto mb-6" />

                  {/* Collect Button */}
                  <button
                    onClick={handleCloneAlert}
                    className="relative w-52 h-14 mx-auto flex items-center justify-center bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
                    style={{
                      backgroundImage: `url('${buttonG.src}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "70px",
                    }}
                  >
                    <span className="text-white font-bold text-lg">Collect</span>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => handleCloseAlert(alertId)}
                    className="mt-4 text-gray-300 hover:text-white underline"
                  >
                    Close Alert
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default QuestsModal;
