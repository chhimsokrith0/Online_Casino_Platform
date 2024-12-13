"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const DataOverview = () => {
  const [activeTab, setActiveTab] = useState("Total Revenue");

  const tabs = ["Total Revenue", "Members", "Receive Referral"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Data Overview</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition">
          <FontAwesomeIcon icon={faCalendar} />
          <span>29/10/2024 - 12/12/2024</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-2 font-semibold transition ${
              activeTab === tab
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
            <tr className="text-gray-400 text-sm">
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-right">Referral</th>
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
                <p>There&apos;s nothing here yet!</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-gray-400 text-sm">
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
          <span>Total Revenue: </span>
          <span className="font-bold text-yellow-500">0.00฿</span>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;
