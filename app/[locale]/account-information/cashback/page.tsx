"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const CashbackPage = () => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-lg font-bold text-white mb-4">Cashback</h2>

      {/* Date Filter */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
          <FontAwesomeIcon icon={faCalendar} />
          <span>26/10/2024 - 09/12/2024</span>
        </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-2 text-gray-400 text-sm font-semibold mb-3">
        <span>Transaction Date-Time</span>
        <span className="text-right">Cashback Amount</span>
      </div>

      {/* Empty State */}
      <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-gray-400">
        <img
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
          alt="Empty State"
          className="w-12 h-12 mb-3"
        />
        <p>There's nothing here yet!</p>
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
