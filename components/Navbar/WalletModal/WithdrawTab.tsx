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
    <div ref={containerRef} className="overflow-y-scroll h-full scrollbar-hide">
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
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">Turn Winlose:</p>
          <span className="text-yellow-400">0.00฿ / 0.00฿</span>
        </div>
      </div>

      <h3
        ref={(el) => {
          if (el) itemRefs.current.push(el);
        }}
        className="text-sm text-gray-400 mb-4"
      >
        Withdraw Amount
      </h3>
      <div
        ref={(el) => {
          if (el) itemRefs.current.push(el);
        }}
        className="bg-gray-700 p-4 rounded-lg mb-4"
      >
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-300">Your wallet:</p>
          <span className="text-gray-300">0.00฿</span>
        </div>
        <input
          type="text"
          value="0"
          className="bg-gray-800 w-full p-2 rounded-md text-white focus:ring-2 focus:ring-yellow-500"
          readOnly
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Min 500.00฿ ~ Max 10.00K฿</span>
          <span>Balance: 0.00฿</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          Min
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          25%
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          50%
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          Max
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-400 mb-2">Note</h3>
        <div className="relative bg-gray-700 p-4 rounded-lg">
          <textarea
            className="bg-gray-800 w-full h-24 p-3 text-sm text-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Type Something here ..."
            maxLength={300}
          ></textarea>
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
            <span>0</span> / 300
          </div>
        </div>
      </div>
      <br />
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
