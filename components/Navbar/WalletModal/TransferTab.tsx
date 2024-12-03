"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TransferTab: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const buttonRefs = useRef<HTMLButtonElement[]>([]);

    useEffect(() => {
        // Animate the container fade-in
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "power4.out" }
        );

        // Stagger animation for child elements
        gsap.fromTo(
            itemRefs.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power4.out", delay: 0.3 }
        );

        // Animate the button if needed
        gsap.fromTo(
            buttonRefs.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, delay: 0.8, ease: "power2.out" }
        );
    }, []);

    return (
        <div ref={containerRef}>
            <h3
                ref={(el) => {
                    if (el && !itemRefs.current.includes(el)) {
                        itemRefs.current.push(el); // Add unique refs
                    }
                }}
                className="text-sm text-gray-400 mb-4"
            >
                Transfer From
            </h3>
            <div
                ref={(el) => {
                    if (el && !itemRefs.current.includes(el)) {
                        itemRefs.current.push(el); // Add unique refs
                    }
                }}
                className="bg-gray-700 p-4 rounded-lg mb-4 flex justify-between"
            >
                <span className="text-sm">Your wallet: 0.00฿</span>
            </div>
            <button
                ref={(el) => {
                    if (el && !buttonRefs.current.includes(el)) {
                        buttonRefs.current.push(el); // Add unique refs
                    }
                }}
                className="w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-sm"
            >
                Transfer to Main Wallet
            </button>
        </div>
    );
};

export default TransferTab;
