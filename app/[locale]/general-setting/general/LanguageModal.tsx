"use client";

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import Image from "next/image";

interface LanguageModalProps {
  isOpen: boolean;
  selectedLanguage: string;
  onClose: () => void;
  onSelectLanguage: (language: string) => void;
  languages: Array<{ code: string; name: string; flag: string }>;
}

const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  selectedLanguage,
  onClose,
  onSelectLanguage,
  languages,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power4.out" }
      );
    } else if (!isOpen && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power4.in",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
      <div ref={modalRef} className="bg-gray-800 rounded-lg p-6 shadow-lg w-96">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white">Select Language</h3>
          <button onClick={onClose}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="text-gray-400 hover:text-gray-300 text-xl"
            />
          </button>
        </div>

        {/* Language Options */}
        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                selectedLanguage === lang.code
                  ? "bg-gray-700 border border-yellow-500"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
              onClick={() => onSelectLanguage(lang.code)}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-6 h-4 rounded-sm"
              />
              <span className="text-white text-sm">{lang.name}</span>
              {selectedLanguage === lang.code && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 text-lg ml-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
