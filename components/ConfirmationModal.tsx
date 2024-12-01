"use client";

import React from "react";

interface ConfirmationModalProps {
  message: string;
  subMessage: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  subMessage,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 text-gray-200 w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-yellow-500 text-black rounded-full flex items-center justify-center text-3xl font-bold">
            !
          </div>
        </div>

        {/* Messages */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">{message}</h2>
          <p className="text-gray-400 mt-2">{subMessage}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            NO
          </button>
          <button
            onClick={onConfirm}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
