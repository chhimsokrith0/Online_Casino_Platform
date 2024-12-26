"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { gsap } from "gsap";

import Link from "next/link";

type Provider = {
    id: number;
    name: string;
    logo: string;
    bgImage: string;
};

const GameProviders: React.FC = () => {
    const [gameProviders, setGameProviders] = useState<Provider[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const fetchProviders = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch("/api/providerHome");

                if (!response.ok) {
                    throw new Error("Failed to fetch providers");
                }

                const data = await response.json();

                if (data && Array.isArray(data.providers)) {
                    setGameProviders(data.providers);
                } else {
                    throw new Error("Unexpected API response format");
                }
            } catch (err: any) {
                setError(err.message || "An error occurred while fetching providers");
            } finally {
                setLoading(false);
            }
        };

        fetchProviders();
    }, []);

    useEffect(() => {
        // GSAP entrance animation for slides
        if (gameProviders.length > 0) {
            gsap.fromTo(
                slideRefs.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
            );
        }
    }, [gameProviders]);

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
                        Game Providers
                    </h2>
                </div>
                <Link
                    href="/Games/providers"
                    className="flex items-center space-x-2 bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition"
                >
                    <span>See All</span>
                    <span className="font-bold">➤</span>
                </Link>
            </div>

            {/* Loading and Error Handling */}
            {loading && <p className="text-center text-gray-400">Loading providers...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Swiper Container */}
            {!loading && !error && gameProviders.length > 0 && (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    navigation
                    modules={[Navigation]}
                    className="w-full p-4"
                >
                    {gameProviders.map((provider, index) => (
                        <SwiperSlide key={provider.id}>
                            <div
                                ref={(el) => {
                                    if (el) slideRefs.current[index] = el;
                                }}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleLeave(index)}
                                className="relative cursor-grab flex-shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                                style={{
                                    backgroundImage: `url(${provider.bgImage})`,
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
            )}
        </div>
    );
};

export default GameProviders;
