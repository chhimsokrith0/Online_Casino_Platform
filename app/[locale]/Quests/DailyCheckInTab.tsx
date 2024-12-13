"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import RewardItem from "./RewardItem";
import RewardModal from "./RewardModal";

const DailyCheckInTab: React.FC = () => {
  const rewardRefs = useRef<HTMLDivElement[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      rewardRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const handleClaim = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const rewards = [
    { label: "Today", points: 200, status: "Claim", bg: "bg-yellow-500", text: "text-black" },
    { label: "Tomorrow", points: 300, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
    { label: "Day 3", points: 500, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
    { label: "Day 4", points: 1000, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
    { label: "Day 5", points: 3000, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
  ];

  return (
    <>
      <div>
        <div className="text-gray-400 text-sm mb-4">
          Accumulated check-in: <span className="text-yellow-400">1 Days</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          {rewards.map((reward, index) => (
            <RewardItem
              key={index}
              ref={(el: HTMLDivElement) => {
                if (el) rewardRefs.current.push(el);
              }}
              {...reward}
              onClaim={reward.status === "Claim" ? handleClaim : undefined}
            />
          ))}
        </div>
       
      </div>
      {showAlert && <RewardModal onClose={handleCloseAlert} />}
    </>
  );
};

export default DailyCheckInTab;
