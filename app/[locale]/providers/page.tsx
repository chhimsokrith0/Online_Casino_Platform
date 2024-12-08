"use client";

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faSearch, faSlidersH, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import Link from "next/link";

const providerData = [
    {
        id: 1,
        name: "Pocket Games Soft",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658618/33_vcxs69.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658486/4_f0lfcu.webp", // Replace with the actual path to your background image
    },
    {
        id: 2,
        name: "Joker",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658617/32_xzivzf.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658498/32_c3um9v.webp", // Replace with the actual path to your background image
    },
    {
        id: 3,
        name: "JILI",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658617/31_k7wnn3.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658497/30_usqbvj.webp", // Replace with the actual path to your background image
    },
    {
        id: 4,
        name: "Pragmatic Play",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658615/30_cqhp6w.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658493/23_ywfkwj.webp", // Replace with the actual path to your background image
    },
    {
        id: 5,
        name: "Habanero",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658612/28_vsuioj.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658496/29_izpqf9.webp", // Replace with the actual path to your background image
    },
    {
        id: 6,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658493/24_d9x0wc.webp", // Replace with the actual path to your background image
    },
    {
        id: 7,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658492/21_kyhfei.webp", // Replace with the actual path to your background image
    },
    {
        id: 8,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658491/20_kdriue.webp", // Replace with the actual path to your background image
    },
    {
        id: 9,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658491/19_b7ktl7.webp", // Replace with the actual path to your background image
    },
    {
        id: 10,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658490/18_yvfisi.webp", // Replace with the actual path to your background image
    },
    
    {
        id: 11,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658490/17_e0jxnj.webp", // Replace with the actual path to your background image
    },
    {
        id: 12,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658489/16_wt4gjb.webp", // Replace with the actual path to your background image
    },
    {
        id: 13,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658489/15_skhqdj.webp", // Replace with the actual path to your background image
    },
    {
        id: 14,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658488/14_nyynxi.webp", // Replace with the actual path to your background image
    },
    {
        id: 15,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658488/13_oc1ctv.webp", // Replace with the actual path to your background image
    },
    {
        id: 16,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658488/12_irkrxb.webp", // Replace with the actual path to your background image
    },
    {
        id: 17,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658488/9_ibz6em.webp", // Replace with the actual path to your background image
    },
    {
        id: 18,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658488/10_ltklfo.webp", // Replace with the actual path to your background image
    },
    {
        id: 19,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658488/11_xsteom.webp", // Replace with the actual path to your background image
    },
    {
        id: 20,
        name: "SA Gaming",
        logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658611/27_lid2jq.png",
        bgImage: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733658487/8_isptnw.webp", // Replace with the actual path to your background image
    },
];

const Providers = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // GSAP animation for card entrance
        gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    const handleHover = (index: number) => {
        const card = cardRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleLeave = (index: number) => {
        const card = cardRefs.current[index];
        if (card) {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-8 text-white">
            {/* Breadcrumb */}
            <nav className="text-gray-400 text-sm mb-4">
                <span>
                    <Link href="/">Home</Link>
                </span>{" "}
                <span className="text-gray-500">/</span>{" "}
                <span className="text-white font-semibold">Providers</span>
            </nav>

            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                {/* Title Section */}
                <div>
                    <h1 className="text-3xl font-bold flex items-center">
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                        Providers
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">33 Providers</p>
                </div>

                {/* Search Section */}
                <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full max-w-[300px]">
                    <input
                        type="text"
                        placeholder="Find your provider"
                        className="flex-1 bg-transparent text-gray-300 placeholder-gray-500 outline-none"
                    />
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
                    <FontAwesomeIcon icon={faSlidersH} className="text-gray-400 ml-4 cursor-pointer" />
                </div>
            </div>

            {/* Providers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {providerData.map((provider, index) => (
                    <div
                        key={provider.id}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleLeave(index)}
                        className="relative p-6 rounded-lg shadow-lg transition-transform flex flex-col justify-between items-start overflow-hidden"
                        style={{
                            backgroundImage: `url(${provider.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "340px",
                            height: "190px",
                        }}
                    >
                        {/* Top Section: Logo & Labels */}
                        <div className="absolute top-4 left-4 flex flex-col items-start space-y-2">
                            <img src={provider.logo} alt={provider.name} className="w-[150px] h-auto" />
                            <div
                                ref={(el) => {
                                    if (el) gsap.fromTo(
                                        el,
                                        { opacity: 0, y: -20 },
                                        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: index * 0.2 }
                                    );
                                }}
                                className="flex space-x-2"
                            >
                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                    NEW
                                </span>
                                <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                                    HOT
                                </span>
                            </div>
                        </div>

                        {/* Bottom Section: Button */}
                        <div className="w-full absolute bottom-4 left-4 flex items-center justify-start">
                            <button className="flex items-center gap-2 bg-white text-black font-bold py-2 px-6 rounded-full transition hover:bg-yellow-500 hover:text-black">
                                <FontAwesomeIcon icon={faGamepad} />
                                PLAY
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Providers;
