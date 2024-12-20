"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DailyCheckInTabProps {
  onClaim?: (index: number) => void;
}

const DailyCheckInTab: React.FC<DailyCheckInTabProps> = ({ onClaim }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [claimedIndex, setClaimedIndex] = useState<number | null>(null);

  const handleClaim = (index: number) => {
    setClaimedIndex(index);
    setShowAlert(true);
    if (onClaim) {
      onClaim(index);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const rewards = [
    { label: "Today", points: 200, status: "Claim" },
    { label: "Tomorrow", points: 300, status: "Unclaimed" },
    { label: "Day 3", points: 500, status: "Unclaimed" },
    { label: "Day 4", points: 1000, status: "Unclaimed" },
    { label: "Day 5", points: 3000, status: "Unclaimed" },
  ];

  return (
    <>
      <motion.div
        className="p-4 text-white rounded-lg shadow-lg w-full"
        style={{
          backgroundImage: "url('https://cdn.i-gamingplatform.com/member_assets/ContainerQuestBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Header */}
        <section id="header" className="text-center">
          <span className="relative">
            <img
              className="w-[450px] inline-block"
              src="https://cdn.i-gamingplatform.com/member_assets/ribbon.png"
              alt="Ribbon"
            />
            <div className="absolute inset-0 px-12 font-semibold">
              5 Days <span className="text-yellow-400">Check-In</span> Reward
            </div>
          </span>
          <div className="text-sm text-none-select mt-1">Don&apos;t miss out on your daily bonuses~!</div>
        </section>

        {/* Time Section */}
        <section id="time" className="mt-4" >
          <div className="flex justify-between items-center w-full ">
            <div className="inline-block backdrop-blur-xl bg-white/10 px-[20px] py-[8px] text-white rounded-full text-[14px]">
              Accumulated check-in: {" "}
              <span className="text-gradient font-semibold text-[16px]">0 Days</span>
            </div>
            <svg
              onClick={handleOpenModal}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="cursor-pointer icon ml-2 text-none-select hover:text-white clickable"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-12.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m2 5.5h-1v-4.5h-3v2h1V15h-1v2h4z"
              />
            </svg>
          </div>
        </section>

        {/* Rewards List */}
        <section id="list" className="mt-4">
          <motion.div
            className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4 p-4 bg-[#1a1a2e] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center justify-between p-4 rounded-lg ${claimedIndex === index
                  ? "bg-green-500 shadow-lg"
                  : reward.status === "Claim"
                    ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 shadow-md"
                    : "bg-[#2e2e4d]"
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center font-bold text-lg text-white">{reward.label}</div>
                <div className="my-4">
                  <img
                    className="w-16 h-16"
                    src="https://storage.googleapis.com/playgame168/quest_images/628b008b-c3ab-4222-8426-81574d8a628a.webp"
                    alt={`${reward.label} Reward`}
                  />
                  <div className="text-center text-white text-sm mt-2">{reward.points} Points</div>
                </div>
                <button
                  className={`px-4 py-2 w-full rounded-full text-sm font-semibold shadow-md transform transition-transform duration-300 ${reward.status === "Claim" && claimedIndex !== index
                    ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black hover:shadow-lg hover:scale-105"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                  disabled={reward.status !== "Claim" || claimedIndex === index}
                  onClick={() => handleClaim(index)}
                >
                  {claimedIndex === index ? "🎉 Claimed!" : reward.status}
                </button>

              </motion.div>
            ))}
          </motion.div>
        </section>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="bg-[#1a1a2e] text-white rounded-lg shadow-lg p-6 w-[90%] max-w-[800px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-4">
                <h2 className="text-lg font-bold">Login for 5 Consecutive Days to Receive up to 5000 Gems</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  &times;
                </button>
              </div>
              <div className="text-sm leading-relaxed">
                <p>
                  💎 Log in for 5 consecutive days to receive up to 5000 gems 💎
                  <br />
                  Simply participate in the consecutive login activity to receive gems instantly.
                </p>
                <p className="mt-2">
                  💰 Gems can be exchanged for free spins.
                  <br />
                  Participate in the activity to accumulate gems easily. Just log in and claim gems every day
                  for 5 days to be eligible to receive up to 5000 gems 💎.
                </p>
              </div>
            </motion.div>
          </motion.div>

        )}
      </AnimatePresence>
    </>
  );
};

export default DailyCheckInTab;
