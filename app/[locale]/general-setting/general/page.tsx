"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import LanguageModal from "./LanguageModal"; // Import the modal component
import { useTranslations } from "next-intl";

const SettingsGeneral = () => {
    const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Eng");
    const t = useTranslations("settings");

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        setModalOpen(false); // Close the modal after selection
    };

    useEffect(() => {
        if (containerRef.current) {
            // GSAP animation for container entrance
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
            );
        }
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-white"
            >
                {/* General Section Header */}
                <div>
                    <h2 className="text-lg font-bold mb-4"> { t("title")} </h2>
                    <hr className="border-gray-700" />
                </div>

                {/* Language Setting */}
                <div className="mt-6">
                    <p className="text-sm text-gray-400 mb-2">{ t("general.language")}</p>
                    <button
                        className="flex items-center max-w-md justify-between w-full bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition"
                        onClick={toggleModal}
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                                alt="English"
                                className="w-6 h-4 rounded-sm"
                            />
                            <span className="text-white text-sm">{selectedLanguage}</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
                    </button>
                </div>


            </div>
            {/* Modal */}
            <LanguageModal
                isOpen={isModalOpen}
                selectedLanguage={selectedLanguage}
                onClose={toggleModal}
                onSelectLanguage={selectLanguage}
            />
        </>
    );
};

export default SettingsGeneral;
