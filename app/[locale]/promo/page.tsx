"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import PromotionModal from "@/components/PromotionModal";

const promotions = [
  {
    title: "REBATE",
    description:
      "Get back a percentage of your bets on casino games (0.3-0.8%) and enjoy Member Level bonuses.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/hRMs6OA_1_flukkh.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "CASHBACK",
    description:
      "💸 Daily cashback bonus up to 7%! 💸 Maximize rewards with Member Level bonuses.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/EYPZsVb_xgxrfm.png",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "REFERRAL",
    description:
      "👥 Earn 3% commission daily! 💰 Withdrawable to your main wallet with rollover requirements.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/hRMs6OA_u8375i.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "REFERRAL",
    description:
      "👥 Earn 3% commission daily! 💰 Withdrawable to your main wallet with rollover requirements.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/yb2oH9M_azudtm.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
  {
    title: "REFERRAL",
    description:
      "👥 Earn 3% commission daily! 💰 Withdrawable to your main wallet with rollover requirements.",
    image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735817825/mYxNN7q_kcirme.jpg",
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1734926055/download_v6ymnb.svg",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PromotionsSection: React.FC = () => {
  const { isCollapsed } = useSidebar();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      className={`bg-cover bg-center bg-no-repeat py-12 px-4 transition-all ${isCollapsed ? "ml-[-17rem]" : ""
        }`}
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645518/bg_yauwy2.png')",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">PROMOTIONS</h1>
        <div className="flex justify-center mb-8">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition">
            All Promos
          </button>
        </div>
        <p className="text-gray-400 text-lg mb-8">
          Discover exciting rewards and bonuses at PlayGame168. Elevate your experience with exclusive promotions designed to maximize your enjoyment and earnings.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg overflow-hidden w-[320px] md:w-[360px] transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative"
              variants={cardVariants}
            >
              <div className="relative w-full h-[200px]">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <img
                onClick={openModal}
                src={promo.icon}
                alt="icon"
                className="absolute top-4 right-4 w-6 h-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-yellow-400">
                  {promo.title}
                </h2>
                <p className="text-gray-200 mt-2 text-sm">{promo.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <PromotionModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PromotionsSection;
