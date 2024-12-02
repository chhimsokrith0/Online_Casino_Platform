"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faGem } from "@fortawesome/free-solid-svg-icons";

const QuestsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Lock scrolling on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isOpen]);

  // Handle Escape key to close the modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleAction = (rewardStatus: string) => {
    if (rewardStatus === "Claim") {
      setAlertMessage("Do you want to claim this reward?");
      setShowAlert(true);
    } else if (rewardStatus === "Unclaimed") {
      setAlertMessage("This reward is not available yet!");
      setShowAlert(true);
    }
  };

  const handleConfirmAlert = () => {
    console.log("Reward claimed!");
    setShowAlert(false);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
      onClick={onClose} // Close modal when clicking outside the content
    >
      <div
        className="bg-gray-800 w-[90%] max-w-4xl rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={{ zIndex: 1051 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">Quests Hub</h2>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose}
            className="text-gray-400 cursor-pointer hover:text-white"
          />
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Challenges */}
          <div className="flex gap-4 mb-6">
            <button className="w-40 py-2 bg-purple-700 text-white font-bold rounded-lg shadow-md hover:bg-purple-800">
              Daily Check-In
            </button>
            <button className="w-40 py-2 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-800">
              Play Quests
            </button>
          </div>

          {/* Check-In Rewards */}
          <div>
            <div className="text-gray-400 text-sm mb-4">
              Accumulated check-in: <span className="text-yellow-400">1 Days</span>
            </div>
            <div className="flex justify-between items-center">
              {/* Rewards for Each Day */}
              {[{ points: 200, status: "Claimed", bg: "bg-gray-700", text: "text-gray-500" },
                { points: 300, status: "Claim", bg: "bg-yellow-500", text: "text-black" },
                { points: 500, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
                { points: 1000, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" },
                { points: 3000, status: "Unclaimed", bg: "bg-gray-700", text: "text-gray-500" }].map(
                (reward, index) => (
                  <div
                    key={index}
                    className={`w-1/5 p-4 rounded-lg flex flex-col items-center ${reward.bg} ${reward.text}`}
                  >
                    <FontAwesomeIcon icon={faGem} className="text-2xl" />
                    <div>{reward.points} Points</div>
                    <button
                      onClick={() => handleAction(reward.status)}
                      className={`mt-2 px-4 py-1 text-xs rounded-lg ${
                        reward.status === "Claimed"
                          ? "cursor-not-allowed"
                          : reward.status === "Claim"
                          ? "bg-black text-yellow-400 hover:bg-gray-800"
                          : "cursor-not-allowed"
                      }`}
                    >
                      {reward.status}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 text-center">
          <button className="text-blue-400 hover:underline">Claimed Rewards History</button>
        </div>
      </div>

      {/* Alert Dialog */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[1052]">
          <div className="bg-gray-700 w-[80%] max-w-md p-6 rounded-lg">
            <h3 className="text-white text-lg font-semibold mb-4">Alert</h3>
            <p className="text-gray-300 mb-4">{alertMessage}</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCloseAlert}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAlert}
                className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestsModal;
