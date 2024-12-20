"use client";

import React from "react";
import { motion } from "framer-motion";

const PlayQuestsTab: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage:
          "url('https://cdn.i-gamingplatform.com/member_assets/ContainerQuestBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "700px",
      }}
    >
      <motion.img
        src="https://storage.googleapis.com/playgame168/promotion_images/25473cba-fbcf-43c2-a71b-22bff5b1ae6d.webp"
        alt="Play Quests Promotion"
        className="rounded-lg shadow-md mb-6 w-[95%] max-w-[800px] h-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.button
        className="w-60 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      >
        Join In
      </motion.button>
    </motion.div>
  );
};

export default PlayQuestsTab;
