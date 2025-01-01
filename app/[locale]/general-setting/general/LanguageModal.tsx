"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface LanguageModalProps {
  isOpen: boolean;
  selectedLanguage: string;
  onClose: () => void;
  onSelectLanguage: (code: string) => void;
  languages: Array<{ code: string; name: string; flag: string }>;
}

const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  selectedLanguage,
  onClose,
  onSelectLanguage,
  languages,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;

    // Adjust the path to include the selected language code
    const pathSegments = pathname.split("/").slice(2); // Remove the current locale from the path
    const newPath = `/${newLocale}/${pathSegments.join("/")}`;
    
    // Update the router path
    router.push(newPath);

    // Call the parent-provided handler to update state
    onSelectLanguage(newLocale);

    // Close the modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 rounded-lg p-4 shadow-lg w-[90vw] max-w-2xl sm:p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Select Language</h3>
              <button onClick={onClose} aria-label="Close Language Modal">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="text-gray-400 hover:text-gray-300 text-xl"
                />
              </button>
            </div>

            {/* Language Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <motion.div
                  key={lang.code}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                    selectedLanguage === lang.code
                      ? "bg-gray-700 border border-yellow-500"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                  onClick={() => handleLanguageChange(lang.code)} // Use the new handler
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                  }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageModal;
