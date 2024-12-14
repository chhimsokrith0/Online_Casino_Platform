"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useScrollLock } from "@/components/useScrollLock";
import DailyCheckInTab from "./DailyCheckInTab";
import PlayQuestsTab from "./PlayQuestsTab";

const QuestsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"dailyCheckIn" | "playQuests">("dailyCheckIn");

  // Use the scroll-lock utility
  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power3.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 w-[95%] max-w-3xl h-[80%] overflow-auto rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-xl font-bold">Quests Hub</h2>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleClose}
            className="text-gray-400 cursor-pointer hover:text-white"
          />
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Challenges */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("dailyCheckIn")}
              className={`w-40 py-4 text-white font-bold rounded-lg shadow-md ${
                activeTab === "dailyCheckIn" ? "border-2 border-yellow-400" : ""
              }`}
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733235314/btn_bg1_feqt2p.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              Daily Check-In
            </button>
            <button
              onClick={() => setActiveTab("playQuests")}
              className={`w-40 py-4 text-white font-bold rounded-lg shadow-md ${
                activeTab === "playQuests" ? "border-2 border-yellow-400" : ""
              }`}
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733235315/btn_bg2_zsb5co.png')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              Play Quests
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "dailyCheckIn" && <DailyCheckInTab />}
          {activeTab === "playQuests" && <PlayQuestsTab />}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 text-center">
          <button className="text-blue-400 hover:underline">Claimed Rewards History</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QuestsModal;
