"use client";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PointHistoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

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

  return (
    <div ref={containerRef} className="p-6 bg-gray-900 rounded-lg">
      <h2 className="text-lg font-bold text-white mb-4">Point History</h2>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        {/* Date Filter */}
        <div className="relative">
          <button
            onClick={toggleDatePicker}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300"
          >
            <FontAwesomeIcon icon={faCalendar} />
            <span>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </span>
          </button>
          {isDatePickerVisible && (
            <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-4 z-10">
              <DatePicker
                selected={startDate}
                // onChange={(date: Date) => setStartDate(date)}
                startDate={startDate}
                endDate={endDate}
                selectsStart
                inline
              />
              
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="py-3 px-4 text-left whitespace-nowrap">Transaction Date-Time</th>
              <th className="py-3 px-4 text-left whitespace-nowrap">Type</th>
              <th className="py-3 px-4 text-left whitespace-nowrap">Turnover</th>
              <th className="py-3 px-4 text-right whitespace-nowrap">Current Point</th>
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
          <span>Total Points:</span>
          <span className="text-yellow-500">800.00</span>
        </div>
      </div>
    </div>
  );
};

export default PointHistoryPage;
