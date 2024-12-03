"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBank, faQrcode, faTimes } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import "./style.css"

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw" | "transfer">("deposit");
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power4.out", delay: 0.2 }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onClose,
    });
  };

  const handleTabChange = (tab: "deposit" | "withdraw" | "transfer") => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    setActiveTab(tab);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-gray-800 rounded-lg w-full max-w-xl h-[600px] p-6 text-white relative shadow-lg flex flex-col"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl focus:outline-none"
          onClick={handleClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 mr-4">
          <h2 className="text-lg font-bold">Your Wallet</h2>
          <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition">
            <FontAwesomeIcon icon={faClock} />
            <span className="text-sm">History</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center mb-6">
          <button
            className={`flex-1 py-2 text-sm font-bold ${activeTab === "deposit"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-l-full"
              : "bg-gray-700 text-white"
              }`}
            onClick={() => handleTabChange("deposit")}
          >
            Deposit
          </button>
          <button
            className={`flex-1 py-2 text-sm font-bold ${activeTab === "withdraw"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
              : "bg-gray-700 text-white"
              }`}
            onClick={() => handleTabChange("withdraw")}
          >
            Withdraw
          </button>
          <button
            className={`flex-1 py-2 text-sm font-bold ${activeTab === "transfer"
              ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-r-full"
              : "bg-gray-700 text-white"
              }`}
            onClick={() => handleTabChange("transfer")}
          >
            Transfer
          </button>
        </div>

        {/* Tab Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto">
          {activeTab === "deposit" && (
            <div>
              <h3 className="text-sm text-gray-400 mb-4">Select a Payment Method</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faBank} className="text-xl" />
                    <span className="text-sm font-semibold">Bank Deposit [LN]</span>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition">
                  <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faQrcode} className="text-xl" />
                    <span className="text-sm font-semibold">QR Thai Prompt [A]</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "withdraw" && (
            <div className="overflow-y-scroll scrollbar-hide h-full">
              <h3 className="text-sm text-gray-400 mb-4">Withdrawal Condition</h3>
              {/* Withdrawal Condition Section */}
              <div className="bg-gray-700 p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-gray-300">Deposit Turnover:</p>
                  <span className="text-yellow-400">0.00฿ / 0.00฿</span>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-gray-300">Turnover:</p>
                  <span className="text-yellow-400">0.00฿ / 0.00฿</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-300">Turn Winlose:</p>
                  <span className="text-yellow-400">0.00฿ / 0.00฿</span>
                </div>
              </div>

              {/* Withdrawal Amount Section */}
              <div className="bg-gray-700 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm text-gray-300">Withdraw Amount</label>
                  <span className="text-sm text-gray-400">Your wallet: 0.00฿</span>
                </div>
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
                  <span className="text-sm text-gray-400 mr-3">THB</span>
                  <input
                    type="number"
                    placeholder="0"
                    className="flex-1 bg-transparent text-yellow-400 outline-none text-right"
                  />
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  Min 500.00฿ ~ Max 10,000.00฿ &nbsp;&nbsp; | &nbsp;&nbsp; Balance: 0.00฿
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="flex justify-between gap-2 mb-4">
                {["Min", "25%", "50%", "Max"].map((label) => (
                  <button
                    key={label}
                    className="flex-1 py-2 bg-gray-800 text-gray-400 text-sm font-bold rounded-md hover:bg-gray-700 hover:text-yellow-400 transition"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Note Section */}
              <div className="bg-gray-700 p-4 rounded-lg mb-4">
                <textarea
                  placeholder="Type Something here ..."
                  className="w-full bg-transparent text-sm text-gray-400 outline-none resize-none h-12"
                />
              </div>

              {/* Withdraw Button */}
              <button className="w-full py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-400 transition text-sm">
                Withdraw
              </button>
            </div>
          )}



          {activeTab === "transfer" && (
            <div>
              <h3 className="text-sm text-gray-400 mb-4">Transfer From</h3>
              <div className="bg-gray-700 p-4 rounded-lg mb-4 flex justify-between">
                <span className="text-sm">Your wallet: 0.00฿</span>
              </div>
              <button className="w-full py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-sm">
                Transfer to Main Wallet
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <button className="bg-gray-900 text-gray-400 px-4 py-2 rounded-lg text-sm hover:text-white transition">
            Line
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
