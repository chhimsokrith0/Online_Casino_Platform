"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const TransactionsPage = () => {
  const [activeTab, setActiveTab] = useState("Deposit");

  const tabs = [
    "Deposit",
    "Withdraw",
    "Bet",
    "Receive Promotion",
    "Receive Rebate",
    "Receive Cashback",
    "Receive Referral",
  ];

  return (
    <div className="p-6 bg-gray-900 text-gray-300 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-white">History</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>26/10/2024 - 09/12/2024</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-semibold text-sm ${
              activeTab === tab
                ? "border-b-2 border-yellow-500 text-yellow-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="grid grid-cols-6 text-gray-400 text-sm mb-4">
          <span>Amount</span>
          <span>Channel</span>
          <span>Bank Account</span>
          <span>Deposit Date - Time</span>
          <span>Status</span>
          <span>Success Date - Time</span>
        </div>
        <div className="flex flex-col items-center justify-center py-16">
          <img
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
            alt="Empty State"
            className="w-16 h-16 mb-4"
          />
          <p className="text-gray-500">There's nothing here yet!</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-gray-700 rounded-lg">&lt;</button>
          <span>1</span>
          <button className="px-2 py-1 bg-gray-700 rounded-lg">&gt;</button>
        </div>
        <div>Total Deposit: <span className="text-yellow-500">0.00฿</span></div>
      </div>
    </div>
  );
};

export default TransactionsPage;
