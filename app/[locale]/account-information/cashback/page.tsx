"use client";

import React, { useRef, useEffect,useState  } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CashbackPage = () => {



  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);


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

  const toggleDatePicker = () => {
    setIsDatePickerVisible((prev) => !prev);
};


  return (
    <div ref={containerRef} className="p-6 bg-gray-900 rounded-lg">
      <h2 className="text-lg font-bold text-white mb-4">Cashback</h2>

      {/* Date Filter */}
      <div className="flex justify-end mb-4 relative">
        <button
          onClick={toggleDatePicker}
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-gray-300"
        >
          <FontAwesomeIcon icon={faCalendar} />
          <span>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </span>
        </button>
        {isDatePickerVisible && (
          <div className="absolute right-0 mt-10 bg-gray-800 rounded-lg shadow-lg p-4 z-10">
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

      {/* Table Headers */}
      <div className="grid grid-cols-2 text-gray-400 text-sm font-semibold mb-3">
        <span>Transaction Date-Time</span>
        <span className="text-right">Cashback Amount</span>
      </div>

      {/* Empty State */}
      <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-gray-400">
        <Image
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
          alt="Empty State"
          width={48}
          height={48}
          className="mb-3"
        />
        <p>There&apos;s nothing here yet!</p>
      </div>

      {/* Pagination and Total */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center text-sm text-gray-400">
          <button className="px-3 py-1 bg-gray-700 rounded-l-lg hover:bg-gray-600">
            &lt;
          </button>
          <span className="px-4 py-1 bg-gray-700">1</span>
          <button className="px-3 py-1 bg-gray-700 rounded-r-lg hover:bg-gray-600">
            &gt;
          </button>
        </div>
        <div className="text-sm font-bold text-yellow-500">
          Total Cashback Amount: <span>0.00฿</span>
        </div>
      </div>
    </div>
  );
};

export default CashbackPage;
