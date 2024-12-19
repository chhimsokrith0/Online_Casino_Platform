"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

const Referal = () => {
  const t = useTranslations("referal"); // Translation namespace
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
          alt={t("imageAlt")}
          className="w-full h-[500px] max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <h2
        ref={textRef}
        className="text-2xl font-bold mb-4 text-yellow-500"
      >
        {t("heading")}
      </h2>

      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
        {t("subheading")}
      </p>

      <ul
        ref={listRef}
        className="text-left mx-auto max-w-lg text-sm sm:text-base text-gray-300 space-y-3 mb-6"
      >
        <li>{t("list.item1")}</li>
        <li>{t("list.item2")}</li>
        <li>{t("list.item3")}</li>
        <li>{t("list.item4")}</li>
      </ul>

      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        {t("footer")}
      </p>
    </div>
  );
};

export default Referal;
