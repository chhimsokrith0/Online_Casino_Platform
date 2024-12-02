"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBank, faQrcode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw" | "transfer">("deposit");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-800 rounded-lg w-full max-w-4xl h-[800px] p-8 text-white relative shadow-lg flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Your Wallet</h2>
          <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition">
            <FontAwesomeIcon icon={faClock} />
            <span className="text-lg">History</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center mb-8">
          <button
            className={`flex-1 py-3 text-lg font-bold ${
              activeTab === "deposit"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-l-full"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab("deposit")}
          >
            Deposit
          </button>
          <button
            className={`flex-1 py-3 text-lg font-bold ${
              activeTab === "withdraw"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab("withdraw")}
          >
            Withdraw
          </button>
          <button
            className={`flex-1 py-3 text-lg font-bold ${
              activeTab === "transfer"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-r-full"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab("transfer")}
          >
            Transfer
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "deposit" && (
            <div>
              <h3 className="text-lg text-gray-400 mb-6">Select a Payment Method</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition">
                  <div className="flex items-center gap-6">
                    <FontAwesomeIcon icon={faBank} className="text-2xl" />
                    <span className="text-lg font-semibold">ฝากธนาคาร [LN]</span>
                  </div>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-600 transition">
                  <div className="flex items-center gap-6">
                    <FontAwesomeIcon icon={faQrcode} className="text-2xl" />
                    <span className="text-lg font-semibold">QR Thai Prompt [A]</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "withdraw" && (
            <div>
              <h3 className="text-lg text-gray-400 mb-6">Withdrawal Condition</h3>
              <div className="bg-gray-700 p-6 rounded-lg mb-6">
                <p>
                  Deposit Turnover: <span className="text-yellow-400">0.00฿ / 0.00฿</span>
                </p>
                <p>
                  Turnover: <span className="text-yellow-400">0.00฿ / 0.00฿</span>
                </p>
                <p>
                  Turn Winlose: <span className="text-yellow-400">0.00฿ / 0.00฿</span>
                </p>
              </div>
              <h3 className="text-lg text-gray-400 mb-4">Withdraw Amount</h3>
              <div className="flex items-center justify-between bg-gray-700 p-6 rounded-lg mb-6">
                <span className="text-lg">Your wallet: 0.00฿</span>
                <input
                  type="text"
                  placeholder="0"
                  className="bg-transparent text-yellow-400 text-right outline-none w-32 text-lg"
                />
              </div>
              <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-lg">
                Withdraw
              </button>
            </div>
          )}

          {activeTab === "transfer" && (
            <div>
              <h3 className="text-lg text-gray-400 mb-6">Transfer From</h3>
              <div className="bg-gray-700 p-6 rounded-lg mb-6 flex justify-between">
                <span className="text-lg">Your wallet: 0.00฿</span>
                <input
                  type="text"
                  placeholder="0"
                  className="bg-transparent text-yellow-400 text-right outline-none w-32 text-lg"
                />
              </div>
              <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-lg">
                Transfer to Main Wallet
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <button className="bg-gray-900 text-gray-400 px-6 py-3 rounded-full text-lg hover:text-white transition">
            Line
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
