"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import gsap from "gsap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TransactionsPage = () => {
  const [activeTab, setActiveTab] = useState("Deposit");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const tabs = [
    "Deposit",
    "Withdraw",
    "Bet",
    "Receive Promotion",
    "Receive Rebate",
    "Receive Cashback",
    "Receive Referral",
  ];

  const toggleDatePicker = () => {
    setIsDatePickerVisible((prev) => !prev);
  };

  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  const getTableContent = () => {
    if (activeTab === "Deposit") {
      return (
        <div className="grid grid-cols-6 text-gray-400 text-sm mb-4">
          <span className="whitespace-nowrap">Amount</span>
          <span className="whitespace-nowrap">Channel</span>
          <span className="whitespace-nowrap">Bank Account</span>
          <span className="whitespace-nowrap">Deposit Date - Time</span>
          <span className="whitespace-nowrap">Status</span>
          <span className="whitespace-nowrap">Success Date - Time</span>
        </div>
      );
    }
    return <p className="text-gray-500">No data available for {activeTab}.</p>;
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="p-6 bg-gray-900 text-gray-300 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-white whitespace-nowrap">History</h1>
        <div className="relative">
          <button
            onClick={toggleDatePicker}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="whitespace-nowrap">
              {startDate ? startDate.toLocaleDateString() : "Start Date"} -{" "}
              {endDate ? endDate.toLocaleDateString() : "End Date"}
            </span>
          </button>
          {isDatePickerVisible && (
            <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-4 z-10">
              <DatePicker
                selected={startDate}
                onChange={handleDateRangeChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date Range"
              />
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-semibold text-sm whitespace-nowrap relative ${
              activeTab === tab
                ? "text-yellow-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-gray-800 p-6 rounded-lg">
        {getTableContent()}
        <div className="flex flex-col items-center justify-center py-16">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
            alt="Empty State"
            width={64}
            height={64}
            className="mb-4"
          />
          <p className="text-gray-500 whitespace-nowrap">There&apos;s nothing here yet!</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-gray-700 rounded-lg">&lt;</button>
          <span className="whitespace-nowrap">1</span>
          <button className="px-2 py-1 bg-gray-700 rounded-lg">&gt;</button>
        </div>
        <div className="whitespace-nowrap">
          Total {activeTab}: <span className="text-yellow-500">0.00฿</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
