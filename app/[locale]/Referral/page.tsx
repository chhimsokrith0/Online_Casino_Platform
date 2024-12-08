"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Referal = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate the container
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Animate the image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    // Animate the heading and text
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    );

    // Animate the list items
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-[1200px] mx-auto px-4 py-8 text-center text-white rounded-lg shadow-md"
    >
      {/* Image Section */}
      <div className="mb-6">
        <img
          ref={imageRef}
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733645517/3_l7zimp.webp"
          alt="Referal Banner"
          className="w-full h-[500px] max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <h2
        ref={textRef}
        className="text-2xl font-bold mb-4 text-yellow-500"
      >
        ชวนเพื่อนรับ 3% ทุกวัน
      </h2>

      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
        💰 รับคอมมิชชั่น 3% ทุกวัน 💰
      </p>

      <ul
        ref={listRef}
        className="text-left mx-auto max-w-lg text-sm sm:text-base text-gray-300 space-y-3 mb-6"
      >
        <li>
          ✅ เงินค่าคอมสามารถโอนเข้ากระเป๋าหลัก ทำเทิร์นโอเวอร์ 4 เท่า
          จึงจะสามารถถอนได้
        </li>
        <li>
          ✅ คอมมิชชั่นขั้นต่ำ 5 บาท ถึงถอนเข้ากระเป๋าหลักได้
        </li>
        <li>
          ✅ คอมมิชชั่น แนะนำเพื่อน สูงสุด 3,000 บาท ทุกวัน
        </li>
        <li>
          ✅ นับเฉพาะ ยอดฝากเพื่อน ไม่รับโปรโมชั่น เท่านั้น
        </li>
      </ul>

      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        💵 ระบบจะคำนวณยอดเล่นเสียของเพื่อนทุกวัน ตั้งแต่ 0:00 - 23:59 น. และคำนวณรายได้
        ทุกวัน เวลา 8:00 น.
      </p>
    </div>
  );
};

export default Referal;
