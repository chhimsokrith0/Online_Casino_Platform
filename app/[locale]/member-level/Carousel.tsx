"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = ({ t }: { t: any }) => {
  const levels = [
    {
      level: t("carousel.levels.bronze"),
      cashback: "2",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/bronze.png",
    },
    {
      level: t("carousel.levels.silver"),
      cashback: "3",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/silver.png",
    },
    {
      level: t("carousel.levels.gold"),
      cashback: "4",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/gold.png",
    },
    {
      level: t("carousel.levels.diamond"),
      cashback: "5",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/diamond.png",
    },
    {
      level: t("carousel.levels.platinum"),
      cashback: "6",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/platinum.png",
    },
    {
      level: t("carousel.levels.black"),
      cashback: "7",
      image: "https://storage.googleapis.com/luxino-pub/icon/member_lv/black.png",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto text-center py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        // navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="swiper-container"
      >
        {levels.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md flex flex-col items-center">
              
              {/* Image */}
              <img
                src={item.image}
                alt={`${item.level} Icon`}
                className="w-auto h-[129px] mx-auto mb-3"
              />
              {/* Details */}
              <h3 className="font-bold text-[24px] text-center mt-2">
                {item.level}
              </h3>
              <div className="text-center px-7">
                <div className="flex justify-between items-center text-md mt-4 mb-1">
                  <span>{t("carousel.cashback")}</span>
                  <span className="text-yellow-400">{item.cashback}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
