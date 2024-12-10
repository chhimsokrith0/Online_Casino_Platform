"use client";

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

interface LanguageModalProps {
  isOpen: boolean;
  selectedLanguage: string;
  onClose: () => void;
  onSelectLanguage: (language: string) => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  selectedLanguage,
  onClose,
  onSelectLanguage,
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-gray-800 rounded-lg p-6 shadow-lg w-96">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white">Language</h3>
          <button onClick={onClose}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="text-gray-400 hover:text-gray-300 text-xl"
            />
          </button>
        </div>

        {/* Language Options */}
        <div className="flex gap-6 items-center">
          {/* English */}
          <div
            className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer ${
              selectedLanguage === "Eng" ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={() => onSelectLanguage("Eng")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English"
              className="w-6 h-4 rounded-sm"
            />
            <span className="text-white text-sm">Eng</span>
            {selectedLanguage === "Eng" && (
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg ml-2" />
            )}
          </div>

          {/* Thai */}
          <div
            className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer ${
              selectedLanguage === "Thai" ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={() => onSelectLanguage("Thai")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"
              alt="Thai"
              className="w-6 h-4 rounded-sm"
            />
            <span className="text-white text-sm">Thai</span>
            {selectedLanguage === "Thai" && (
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-lg ml-2" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
