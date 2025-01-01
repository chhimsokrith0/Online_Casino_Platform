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
    { image: t("banner4"), alt: "Slide 4" },
    { image: t("banner5"), alt: "Slide 5" },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      gsap.fromTo(
        swiperRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div
      ref={swiperRef}
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
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
            {/* Unified Responsive Block */}
            <div
              className="relative mx-auto w-full h-[160px] sm:h-[250px] md:h-[350px] lg:h-[450px]"
            >
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




