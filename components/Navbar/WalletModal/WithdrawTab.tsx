"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const WithdrawTab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Animate container fade-in
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power4.out" }
    );

    // Animate child elements staggered
    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power4.out", delay: 0.3 }
    );

    // Animate button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, delay: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={containerRef}>
      <h3
        ref={(el) => {
          if (el) itemRefs.current.push(el);
        }}
        className="text-sm text-gray-400 mb-4"
      >
        Withdrawal Condition
      </h3>
      <div
        ref={(el) => {
          if (el) itemRefs.current.push(el);
        }}
        className="bg-gray-700 p-4 rounded-lg mb-4"
      >
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">Deposit Turnover:</p>
          <span className="text-yellow-400">0.00฿ / 0.00฿</span>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">Turnover:</p>
          <span className="text-yellow-400">0.00฿ / 0.00฿</span>
        </div>
      </div>
      <button
        ref={buttonRef}
        className="w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-sm"
      >
        Withdraw
      </button>
    </div>
  );
};

export default WithdrawTab;
