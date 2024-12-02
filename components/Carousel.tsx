"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";

const Carousel: React.FC = () => {
  const t = useTranslations("Carousel");

  const swiperRef = useRef<HTMLDivElement | null>(null);

  const carouselItems = [
    { image: t("banner1"), alt: "Slide 1" },
    { image: t("banner2"), alt: "Slide 2" },
    { image: t("banner3"), alt: "Slide 3" },
    { image: t("banner1"), alt: "Slide 4" },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      // GSAP animation for fade-in effect on mount
      gsap.fromTo(
        swiperRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div
      ref={swiperRef} // Reference for GSAP animation
      className="relative w-full overflow-hidden rounded-xl shadow-lg z-50"
    >
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="swiper-container"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {/* Mobile View */}
            <div className="block md:hidden relative w-[90%] h-[150px] mx-auto">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative w-[90%] h-[450px] mx-auto">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
