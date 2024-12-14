"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TabRandomCard = () => {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // GSAP Entry Animation for Cards
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power4.out",
            }
        );
    }, []);

    const handleHover = (index: number) => {
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        }
    };

    const handleLeave = (index: number) => {
        const card = cardsRef.current[index];
        if (card) {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        }
    };

    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4 md:gap-6 md:px-16 lg:px-20">
            {[...Array(5)].map((_, index) => (
                <div
                    key={index}
                    ref={(el) => {
                        if (el) cardsRef.current[index] = el;
                    }}
                    className="relative cursor-pointer w-[110px] md:w-40 h-[172.86px] md:h-[251.43px] rounded-2xl shadow-lg overflow-hidden"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleLeave(index)}
                >
                    <button
                        id={`card${index + 1}`}
                        className="relative w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center rounded-2xl z-[1]"
                    >
                        <img
                            id={`item${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
                            src={`https://res.cloudinary.com/dfxqagrkk/image/upload/v1734009127/1_vb2tye.webp`}
                            alt={`Reward ${index + 1}`}
                        />
                    </button>
                </div>
            ))}
        </div>


    );
};

export default TabRandomCard;