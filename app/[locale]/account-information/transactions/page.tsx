"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import gsap from "gsap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslations } from "next-intl";
const TransactionsPage = () => {
  const [activeTab, setActiveTab] = useState("Deposit");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const t = useTranslations("accountInformation.history");


  const tabs = [
    t("tabs.deposit"),
    t("tabs.withdraw"),
    t("tabs.bet"),
    t("tabs.receivePromotion"),
    t("tabs.receiveRebate"),
    t("tabs.receiveCashback"),
    t("tabs.receiveReferral"),
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
        <div className="grid grid-cols-2 md:grid-cols-6 text-gray-400 text-sm mb-4">
          <span className="whitespace-nowrap">{t("columns.amount")}</span>
          <span className="whitespace-nowrap">{t("columns.channel")}</span>
          <span className="hidden md:block whitespace-nowrap">{t("columns.bankAccount")}</span>
          <span className="whitespace-nowrap">{t("columns.depositDateTime")}</span>
          <span className="hidden md:block whitespace-nowrap">{t("columns.status")}</span>
          <span className="hidden md:block whitespace-nowrap">{t("columns.successDateTime")}</span>
        </div>
      );
    }
    return <p className="text-gray-500">{t("columns.nodata")} {activeTab}.</p>;
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
    <div
      ref={containerRef}
      className="p-4 md:p-6 bg-gray-900 text-gray-300 rounded-lg"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
          {t("title")}
        </h1>
        <div className="relative w-full md:w-auto">
          <button
            onClick={toggleDatePicker}
            className="flex items-center gap-2 w-full md:w-auto px-4 py-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="whitespace-nowrap">
              {startDate ? startDate.toLocaleDateString() : "Start Date"} - {" "}
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
            className={`px-4 md:px-6 py-2 font-semibold text-sm whitespace-nowrap relative ${activeTab === tab
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
      <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
        {getTableContent()}
        <div className="flex flex-col items-center justify-center py-8 md:py-16">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
            alt="Empty State"
            width={64}
            height={64}
            className="mb-4"
          />
          <p className="text-gray-500 whitespace-nowrap">
            {t("emptyState.message")}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 gap-4">
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 bg-gray-700 rounded-lg">&lt;</button>
          <span className="whitespace-nowrap">1</span>
          <button className="px-2 py-1 bg-gray-700 rounded-lg">&gt;</button>
        </div>
        <div className="whitespace-nowrap">
          {t("total")} {activeTab}: <span className="text-yellow-500">0.00฿</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
