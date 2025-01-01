"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslations } from "next-intl";
const DataOverview = () => {
  const [activeTab, setActiveTab] = useState("Total Revenue");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const t = useTranslations("accountInformation.referral.dataOverview");
  const tabs = [t("tabs.totalRevenue"), t("tabs.members"), t("tabs.receiveReferral")];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleDatePicker = () => {
    setIsDatePickerVisible((prev) => !prev);
  };

  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-base md:text-lg font-bold">{t("title")}</h2>
        <div className="relative w-full md:w-auto">
          <button
            onClick={toggleDatePicker}
            className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-600 transition w-full md:w-auto"
          >
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {startDate ? startDate.toLocaleDateString() : "Start Date"} -{" "}
              {endDate ? endDate.toLocaleDateString() : "End Date"}
            </span>
          </button>
          {isDatePickerVisible && (
            <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-4 z-10 overflow-auto max-h-[300px]">
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
      <div className="flex gap-2 md:gap-6 border-b border-gray-700 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-2 font-semibold whitespace-nowrap transition ${activeTab === tab
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "text-gray-400 hover:text-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg p-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-gray-400 text-xs md:text-sm">
              <th className="py-3 px-4 text-left">{t("table.columns.date")}</th>
              <th className="py-3 px-4 text-right">{t("table.columns.referral")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={2}
                className="py-10 text-center text-gray-400 bg-gray-800 rounded-lg"
              >
                <Image
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
                  alt="Empty State"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <p className="text-sm md:text-base">{t("table.emptyState.message")}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-xs md:text-sm gap-4">
        {/* Pagination */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-gray-700 rounded-l-lg hover:bg-gray-600 transition">
            &lt;
          </button>
          <span className="px-4 py-1 bg-gray-700 rounded-lg">1</span>
          <button className="px-3 py-1 bg-gray-700 rounded-r-lg hover:bg-gray-600 transition">
            &gt;
          </button>
        </div>

        {/* Total Revenue */}
        <div>
          <span>{t("table.totals.totalRevenue")}</span>
          <span className="font-bold text-yellow-500">0.00฿</span>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;