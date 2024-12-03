"use client";

import React, { useEffect, useRef } from "react";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";

const DepositTab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate the container fade-in
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power4.out" }
    );

    // Animate each item with a stagger effect
    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power4.out", delay: 0.3 }
    );
  }, []);

  return (
    <div ref={containerRef}>
      <h3 className="text-sm text-gray-400 mb-4">Select a Payment Method</h3>
      <div className="space-y-4">
        <div
          ref={(el) => {
            if (el) {
              itemRefs.current.push(el);
            }
          }}
          className="bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition"
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faQrcode} className="text-xl text-white" />
            <span className="text-sm font-semibold">QR Thai Prompt [V]</span>
          </div>
        </div>
        <div
          ref={(el) => {
            if (el) {
              itemRefs.current.push(el);
            }
          }}
          className="bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition"
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faQrcode} className="text-xl text-white" />
            <span className="text-sm font-semibold">QR Thai Prompt [A]</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositTab;
