"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslations } from "next-intl";
const PointHistoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const t = useTranslations("accountInformation.pointHistory");

  const toggleDatePicker = () => {
    setIsDatePickerVisible((prev) => !prev);
  };

  const pointData = [
    { dateTime: "09/12/2024", type: "Daily Check-In", turnover: "-", currentPoint: "200.00" },
    { dateTime: "03/12/2024", type: "Daily Check-In", turnover: "-", currentPoint: "200.00" },
    { dateTime: "01/12/2024", type: "Daily Check-In", turnover: "-", currentPoint: "200.00" },
    { dateTime: "25/11/2024", type: "Daily Check-In", turnover: "-", currentPoint: "200.00" },
  ];

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }
      );
    }
  }, []);

  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start || undefined);
    setEndDate(end || undefined);
  };

  return (
    <div ref={containerRef} className="p-6 bg-gray-900 rounded-lg">
      <h2 className="text-lg font-bold text-white mb-4">{t("title")}</h2>

      {/* Filters */}
      <div className="flex justify-end mb-4 relative">
        <button
          onClick={toggleDatePicker}
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-gray-300"
        >
          <FontAwesomeIcon icon={faCalendar} />
          <span>
            {startDate
              ? startDate.toLocaleDateString()
              : "Start Date"}{" "}
            -{" "}
            {endDate ? endDate.toLocaleDateString() : "End Date"}
          </span>
        </button>
        {isDatePickerVisible && (
          <div className="absolute right-0 mt-10 bg-gray-800 rounded-lg shadow-lg p-4 z-10">
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

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="py-3 px-4 text-left whitespace-nowrap">{t("columns.transactionDateTime")}</th>
              <th className="py-3 px-4 text-left whitespace-nowrap">{t("columns.type")}</th>
              <th className="py-3 px-4 text-left whitespace-nowrap">{t("columns.turnover")}</th>
              <th className="py-3 px-4 text-right whitespace-nowrap">{t("columns.currentPoint")}</th>
            </tr>
          </thead>
          <tbody>
            {pointData.map((data, index) => (
              <tr
                key={index}
                className="text-gray-300 text-sm border-t border-gray-700"
              >
                <td className="py-3 px-4 whitespace-nowrap">{data.dateTime}</td>
                <td className="py-3 px-4 whitespace-nowrap">{data.type}</td>
                <td className="py-3 px-4 whitespace-nowrap">{data.turnover}</td>
                <td className="py-3 px-4 text-right whitespace-nowrap text-yellow-500">
                  {data.currentPoint}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between text-sm text-gray-400">
          <span>{t("totalPoints")}</span>
          <span className="text-yellow-500">800.00</span>
        </div>
      </div>
    </div>
  );
};

export default PointHistoryPage;
