"use client";

import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import { useTranslations } from "next-intl";
interface LogoutConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const LogoutConfirmationModal: React.FC<LogoutConfirmationModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
}) => {
  const logoutModalRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("logoutConfirmation");
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        logoutModalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      ref={logoutModalRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[500] backdrop-blur-sm"
    >
      <div className="bg-gray-900 w-[94vw] md:w-[500px] h-auto rounded-2xl text-center text-white py-6 px-5 shadow-lg">
        <div className="flex flex-col justify-center items-center gap-7">
          {/* Warning Icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[80px] w-[80px]"
          >
            <g clipPath="url(#clip0_4407_449983)">
              <path
                d="M40 0C17.8902 0 0 17.8917 0 40C0 62.1098 17.8917 80 40 80C62.1098 80 80 62.1083 80 40C80 17.8902 62.1083 0 40 0ZM40 73.75C21.3448 73.75 6.25 58.6539 6.25 40C6.25 21.3448 21.3461 6.25 40 6.25C58.6552 6.25 73.75 21.3461 73.75 40C73.75 58.6552 58.6539 73.75 40 73.75Z"
                fill="#FFC700"
              ></path>
              <path
                d="M40 20.1406C38.2741 20.1406 36.875 21.5397 36.875 23.2656V43.3895C36.875 45.1155 38.2741 46.5145 40 46.5145C41.7259 46.5145 43.125 45.1155 43.125 43.3895V23.2656C43.125 21.5397 41.7259 20.1406 40 20.1406Z"
                fill="#FFC700"
              ></path>
              <path
                d="M40 58.7734C42.33 58.7734 44.2188 56.8846 44.2188 54.5547C44.2188 52.2247 42.33 50.3359 40 50.3359C37.67 50.3359 35.7812 52.2247 35.7812 54.5547C35.7812 56.8846 37.67 58.7734 40 58.7734Z"
                fill="#FFC700"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_4407_449983">
                <rect width="80" height="80" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          {/* Text Content */}
          <div className="flex flex-col gap-3 w-full px-4">
            <h2 className="font-bold text-lg md:text-xl">
              {t("title")}
            </h2>
            <p className="font-normal text-sm md:text-base text-gray-300">
              {t("message")}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 w-full text-base md:text-base">
            <button
              onClick={onCancel}
              className="w-full max-w-[40%] h-11 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              {t("buttons.no")}
            </button>
            <button
              onClick={onConfirm}
              className="w-full max-w-[40%] h-11 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-600 hover:to-yellow-700 transition"
            >
              {t("buttons.yes")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default LogoutConfirmationModal;
