"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useScrollLock } from "@/components/useScrollLock";
import buttonG from "@/assets/img_QuestsModal/button.svg";
import img_Dim from "@/assets/img_QuestsModal/Dim.webp";
import img_gite from "@/assets/img_QuestsModal/gite.png";
import img_winmore from "@/assets/img_QuestsModal/winmore.png";
import img_bg from "@/assets/img_QuestsModal/bg.png";

const QuestsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<"dailyCheckIn" | "playQuests">("dailyCheckIn");
  const rewardRefs = useRef<HTMLDivElement[]>([]);
  const [alerts, setAlerts] = useState<number[]>([]); // To handle multiple alerts

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

  useEffect(() => {
    gsap.fromTo(
      rewardRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

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

  const handleClaim = () => {
    setAlerts((prev) => [...prev, Date.now()]); // Use timestamp to create unique alert IDs
  };

  const handleCloseAlert = (id: number) => {
    setAlerts((prev) => prev.filter((alertId) => alertId !== id));
  };

  const rewards = [
    { label: "Today", points: 200, status: "Claim", bg: "bg-yellow-500", text: "text-black" },
    { label: "Tomorrow", points: 300, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
    { label: "Day 3", points: 500, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
    { label: "Day 4", points: 1000, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
    { label: "Day 5", points: 3000, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
  ];

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
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h2 className="text-white text-xl font-bold">Quests Hub</h2>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleClose}
            className="text-gray-400 cursor-pointer hover:text-white"
          />
        </div>
        <div className="p-6">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("dailyCheckIn")}
              className={`w-40 py-4 text-white font-bold rounded-lg shadow-md ${activeTab === "dailyCheckIn" ? "border-2 border-yellow-400" : ""
                }`}
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733235314/btn_bg1_feqt2p.png')`,
                backgroundSize: "cover",
              }}
            >
              Daily Check-In
            </button>
            <button
              onClick={() => setActiveTab("playQuests")}
              className={`w-40 py-4 text-white font-bold rounded-lg shadow-md ${activeTab === "playQuests" ? "border-2 border-yellow-400" : ""
                }`}
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733235315/btn_bg2_zsb5co.png')`,
                backgroundSize: "cover",
              }}
            >
              Play Quests
            </button>
          </div>

          {/* Daily Check-In Tab */}
          {activeTab === "dailyCheckIn" && (
            <div>
              <div className="text-gray-400 text-sm mb-4">
                Accumulated check-in: <span className="text-yellow-400">1 Days</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    ref={(el: HTMLDivElement) => {
                      if (el) rewardRefs.current.push(el);
                    }}
                    className={`flex flex-col items-center justify-center p-4 w-1/5 rounded-lg ${reward.bg} ${reward.text}`}
                  >
                    <span className="text-xs font-bold">{reward.label}</span>
                    <div className="text-4xl my-2">💎</div>
                    <span className="text-sm">{reward.points} Points</span>
                    <button
                      onClick={reward.status === "Claim" ? handleClaim : undefined}
                      disabled={reward.status !== "Claim"}
                      className={`mt-2 px-4 py-1 text-sm rounded-lg ${reward.status === "Claim"
                        ? "bg-black text-yellow-400 hover:bg-gray-800"
                        : "cursor-not-allowed opacity-50"
                        }`}
                    >
                      {reward.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Play Quests Tab Placeholder */}
          {activeTab === "playQuests" && <div className="text-gray-400">Play Quests content goes here.</div>}
        </div>
      </div>

      {alerts.map((alertId) => (
        <div
          key={alertId}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]"
          style={{
            backgroundImage: `url('${img_bg.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-labelledby="reward-modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full h-full flex items-center justify-center p-6">
            {/* Modal Content */}
            <div className="rounded-lg p-8 text-center max-w-lg w-[90%] shadow-lg">
              {/* Header Image */}
              <div className="relative">
                <img
                  src={img_winmore.src}
                  alt="Play More, Win More"
                  className="w-64 mx-auto mb-6"
                />
              </div>

              {/* Reward Image */}
              <img
                src={img_gite.src}
                alt="Reward Box"
                className="w-40 mx-auto mb-4"
              />

              {/* Reward Text */}
              <p
                id="reward-modal-title"
                className="text-white text-xl mb-4 font-bold"
              >
                You have received 200 Points!
              </p>

              {/* Decorative Box Image */}
              <img
                src={img_Dim.src}
                alt="Decorative"
                className="w-32 mx-auto mb-6"
              />

              {/* Collect Button */}
              <button
                onClick={() => handleCloseAlert(alertId)}
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
            </div>
          </div>
        </div>
      ))}
    </div>,
    document.body
  );
};

export default QuestsModal;
