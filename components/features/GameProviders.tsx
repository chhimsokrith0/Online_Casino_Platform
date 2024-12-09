"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { gsap } from "gsap";

import img1 from "@/assets/img-gameprovider/PG.png";
import img2 from "@/assets/img-gameprovider/JOKER.png";
import img3 from "@/assets/img-gameprovider/JILI.png";
import img4 from "@/assets/img-gameprovider/PRAGMATICPLAY.png";
import img5 from "@/assets/img-gameprovider/HABANERO.png";
import img6 from "@/assets/img-gameprovider/PEGASUS.png";
import img7 from "@/assets/img-gameprovider/NAGA.png";
import img8 from "@/assets/img-gameprovider/NOLIMIT.png";

import bg1 from "@/assets/img-gameprovider/1.webp";
import bg2 from "@/assets/img-gameprovider/2.webp";
import bg3 from "@/assets/img-gameprovider/3.webp";
import bg4 from "@/assets/img-gameprovider/4.webp";
import bg5 from "@/assets/img-gameprovider/5.webp";
import bg6 from "@/assets/img-gameprovider/6.webp";
import bg7 from "@/assets/img-gameprovider/7.webp";
import bg8 from "@/assets/img-gameprovider/8.webp";

import { useTranslations } from "next-intl";

const GameProviders: React.FC = () => {
    const t = useTranslations("gameProviders");

    const gameProviders = [
        {
            id: 1,
            name: t("providers.pg.name"),
            logo: img1,
            bg: bg1,
        },
        {
            id: 2,
            name: "Joker",
            logo: img2,
            bg: bg2,
        },
        {
            id: 3,
            name: "JILI",
            logo: img3,
            bg: bg3,
        },
        {
            id: 4,
            name: "PRAGMATICPLAY",
            logo: img4,
            bg: bg4,
        },
        {
            id: 5,
            name: "HABANERO",
            logo: img5,
            bg: bg5,
        },
        {
            id: 6,
            name: "PEGASUS",
            logo: img6,
            bg: bg6,
        },
        {
            id: 7,
            name: "NAGA",
            logo: img7,
            bg: bg7,
        },
        {
            id: 8,
            name: "NOLIMIT",
            logo: img8,
            bg: bg8,
        },
    ];

    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // GSAP entrance animation for slides
        gsap.fromTo(
            slideRefs.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    const handleHover = (index: number) => {
        const slide = slideRefs.current[index];
        if (slide) {
            gsap.to(slide, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleLeave = (index: number) => {
        const slide = slideRefs.current[index];
        if (slide) {
            gsap.to(slide, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl lg:text-2xl text-yellow-500">🏢</span>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                        {t("title")}
                    </h2>
                </div>
                <button className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition">
                    <span>{t("seeAll")}</span>
                    <span className="font-bold">➤</span>
                </button>
            </div>

            {/* Swiper Container */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                // navigation
                modules={[Navigation]}
                className="w-full p-4"
            >
                {gameProviders.map((provider, index) => (
                    <SwiperSlide key={provider.id}>
                        <div
                            ref={(el) => {
                                if (el) slideRefs.current[index] = el;
                            }}  // Assign ref to each slide
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleLeave(index)}
                            className="relative cursor-grab flex-shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                            style={{
                                backgroundImage: `url(${provider.bg.src})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "105%",
                                height: "190px",
                            }}
                        >
                            {/* Content Wrapper */}
                            <div className="relative flex flex-col justify-between p-4 h-full text-white">
                                {/* Logo */}
                                <Image
                                    src={provider.logo}
                                    alt={provider.name}
                                    width={120}
                                    height={60}
                                    className="object-contain"
                                />

                                {/* Play Button */}
                                <div className="w-full flex justify-start">
                                    <button
                                        className="mt-4 flex items-center space-x-2 bg-transparent border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition"
                                        aria-label={`Play games from ${provider.name}`}
                                    >
                                        <span className="text-base">🎮</span>
                                        <span>Play</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default GameProviders;
