"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";

const Notification = () => {
  const t = useTranslations("Notification");
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    // Animate the closing of the modal
    if (modalRef.current && backdropRef.current) {
      const timeline = gsap.timeline({
        onComplete: () => setIsNotificationOpen(false),
      });

      timeline
        .to(modalRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(
          backdropRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        );
    } else {
      setIsNotificationOpen(false);
    }
  };

  useEffect(() => {
    if (isNotificationOpen && modalRef.current && backdropRef.current) {
      // Animate modal opening
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        )
        .fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" },
          "<"
        );
    }

    if (isNotificationOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isNotificationOpen]);

  return (
    <>
      {isNotificationOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[150]"
        >
          {/* Notification Modal */}
          <div
            ref={modalRef}
            className="relative bg-gray-800 text-white rounded-lg shadow-lg w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
              <h2 className="text-md font-semibold">{t("title")}</h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition duration-300 text-lg"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-4 py-3">
              <img
                src={t("image")}
                alt="Notification Banner"
                className="rounded-lg mb-3 w-full h-auto"
              />
              <p className="text-yellow-500 text-md font-bold">{t("header")}</p>
              <p className="text-gray-300 text-sm">{t("description")}</p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-center items-center px-4 py-3 border-t border-gray-700">
              <button
                onClick={handleClose}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-1 px-4 rounded-full hover:opacity-90 transition duration-300 text-sm"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
