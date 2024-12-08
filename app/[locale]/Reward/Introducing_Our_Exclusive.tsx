

"use client";

import React from "react";
import Image from "next/image";

const introducingOurExclusive = ({ t }: { t: any }) => {
  const features = [
    {
      id: 1,
      title: t("introducingExclusive.features.activation.title"),
      description: t("introducingExclusive.features.activation.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644738/cashback1.iBfsM5Qu_usyjlp.png",
    },
    {
      id: 2,
      title: t("introducingExclusive.features.bonus.title"),
      description: t("introducingExclusive.features.bonus.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644739/cashback2.iAzhN3sC_wqoihr.png",
    },
    {
      id: 3,
      title: t("introducingExclusive.features.rewardTier.title"),
      description: t("introducingExclusive.features.rewardTier.description"),
      icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644739/cashback3.Cqv5f9E6_gdgcmt.png",
    },
  ];

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="max-w-[1200px] mx-auto rounded-lg overflow-hidden text-white">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-6 p-4 sm:p-8">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733644739/cashback.DxM8kuXg_dntguc.png"
              alt="Rocket"
              width={1000}
              height={1000}
              className="object-contain w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
              {t("introducingExclusive.title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6 text-gray-300">
              {t("introducingExclusive.description")}
            </p>
            <a
              href="#"
              className="inline-block text-green-400 font-semibold hover:text-green-500 transition"
            >
              {t("introducingExclusive.joinButton")}
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div
          className="bg-gradient-to-r bg-gray-900/90 via-gray-900 to-gray-800 rounded-lg flex flex-col sm:flex-row sm:justify-center sm:space-x-6 items-center space-y-6 sm:space-y-0 px-4 sm:px-6 py-6"
          style={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)",
            marginTop: "-50px",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-md"
            >
              {/* Icon */}
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mb-4"
              />
              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm max-w-[200px] sm:max-w-[250px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default introducingOurExclusive;
