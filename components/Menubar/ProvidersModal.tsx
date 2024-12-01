import React, { useEffect } from "react";
import ProvidersIcons from "./ProvidersIcons";

const ProvidersModal = ({ setIsModalOpen }: { setIsModalOpen: Function }) => {
  const providers = ProvidersIcons; // Import the array from ProvidersIcons.ts

  useEffect(() => {
    // Disable scrolling on the rest of the page when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling again when modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div
        className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow-lg w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-[90%] overflow-y-auto animate-fade-in"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white animate-slide-down">
            All Providers
          </h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-scale-up">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-gray-700 p-3 rounded-full cursor-pointer hover:bg-gray-600 transition"
            >
              <img
                src={provider.icon.src}
                alt={provider.name}
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-xs sm:text-sm md:text-base truncate">
                {provider.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvidersModal;
