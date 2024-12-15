"use client";

import React, { useEffect, useRef, useState } from "react";
import { faQrcode, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import Image from "next/image";

const DepositTab: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    // Animate the container fade-in
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" }
    );

    // Animate each payment method with a stagger effect
    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power4.out", delay: 0.3 }
    );

    // Lock body scroll when a method is selected
    if (selectedMethod) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollPositionRef.current}px`;
    } else {
      // Restore scroll when back button is clicked
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      // Cleanup scroll lock when component is unmounted
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [selectedMethod]);

  const handleBackButtonClick = () => {
    // Animate the back button with GSAP
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => setSelectedMethod(null),
    });
  };

  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll h-full scrollbar-hide"
    >
      <h3 className="text-sm p-2">Payment Method</h3>
      <div className="space-y-4 p-4">
        {/* Option 1: Bank Deposit */}
        {selectedMethod === null || selectedMethod === "ABA Bank" ? (
          <div
            onClick={() => setSelectedMethod("ABA Bank")}
            ref={(el) => {
              el && itemRefs.current.push(el);
            }}
            className={`bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition ${selectedMethod === "ABA Bank" ? "ring-2 ring-yellow-500" : ""
              }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734270594/aba_cu3ptz.png" // Replace with the actual path to your image
                alt="ABA Bank"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold">ABA Bank</span>
            </div>

          </div>
        ) : null}

        {/* Option 2: QR Thai Prompt [S] */}
        {selectedMethod === null || selectedMethod === "ACLADA" ? (
          <div
            onClick={() => setSelectedMethod("ACLADA")}
            ref={(el) => {
              el && itemRefs.current.push(el);
            }}
            className={`bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition ${selectedMethod === "ACLADA" ? "ring-2 ring-yellow-500" : ""
              }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734270672/ac_bnshyj.jpg" // Replace with the actual path to your image
                alt="ABA Bank"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-semibold">Acleda Bank</span>
            </div>
          </div>
        ) : null}

        {/* Option 3: QR Thai Prompt [A] */}
        {selectedMethod === null || selectedMethod === "QR ABA Dynamic" ? (
          <div
            onClick={() => setSelectedMethod("QR ABA Dynamic")}
            ref={(el) => {
              el && itemRefs.current.push(el);
            }}
            className={`bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition ${selectedMethod === "QR ABA Dynamic" ? "ring-2 ring-yellow-500" : ""
              }`}
          >
            <div className="flex items-center gap-4">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1734270674/qr_bkvg2k.jpg" // Replace with the actual path to your image
                alt="ABA Bank"
                width={40}
                height={40}
                className="rounded-full" // Optional: Add rounded-full for circular icons
              />
              <span className="text-sm font-semibold">QR Code ABA Bank</span>
            </div>
          </div>
        ) : null}
      </div>

      {/* Details Section */}
      {selectedMethod && (
        <div className="mt-6">
          <h3 className="text-sm text-gray-400 mb-2">Deposit Amount</h3>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Your wallet:</span>
              <span>0.00฿</span>
            </div>
            <input
              type="text"
              value="100"
              className="bg-gray-800 w-full p-2 rounded-md text-white focus:ring-2 focus:ring-yellow-500"
              readOnly
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Min 100.00฿ ~ Max 50.00K฿</span>
              <span>Balance: 100.00฿</span>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              100฿
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              300฿
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              500฿
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              1,000฿
            </button>
          </div>

          <div className="border border-red-500 text-xs text-white p-4 rounded-lg">
            <p>กรุณาอ่าน เพื่อความรวดเร็วของการทำรายการ</p>
            <ul className="list-disc ml-4 mt-2">
              <li>สร้างรายการใหม่ทุกครั้ง ก่อนโอนเงิน</li>
              <li>QR Code ใช้ได้ครั้งเดียว</li>
              <li>ห้ามใช้ QR Code ซ้ำ</li>
              <li>ทำรายการในเวลาที่กำหนด</li>
            </ul>
          </div>


          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleBackButtonClick}
              className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
            >
              Back
            </button>
            <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-600">
              Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositTab;
