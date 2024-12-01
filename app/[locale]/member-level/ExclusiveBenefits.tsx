"use client";

import React from "react";

const ExclusiveBenefits = ({t}: {t: any}) => {
  const benefits = [
    {
      title: t("exclusiveBenefits.benefits.levelsRewards.title"),
      description: t("exclusiveBenefits.benefits.levelsRewards.description"),
      icon: "/img-member-level/trophy-star.svg", // Replace with the actual path for the icon
    },
    {
      title: t("exclusiveBenefits.benefits.exclusivePromotions.title"),
      description: t("exclusiveBenefits.benefits.exclusivePromotions.description"),
      icon: "/img-member-level/bonus.svg", // Replace with the actual path for the icon
    },
    {
      title: t("exclusiveBenefits.benefits.higherCashback.title"),
      description: t("exclusiveBenefits.benefits.higherCashback.description"),
      icon: "/img-member-level/nofee.svg", // Replace with the actual path for the icon
    },
    {
      title: t("exclusiveBenefits.benefits.royaltyClub.title"),
      description: t("exclusiveBenefits.benefits.royaltyClub.description"),
      icon: "/img-member-level/vip.svg", // Replace with the actual path for the icon
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-8">
          {t("exclusiveBenefits.title")}
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
            >
              {/* Icon */}
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-25 h-25 mb-4"
              />
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;
