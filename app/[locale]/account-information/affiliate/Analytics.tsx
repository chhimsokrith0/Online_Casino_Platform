"use client";

import React from "react";

const Analytics = () => {
  const data = [
    {
      title: "Income",
      metrics: [
        { label: "Income Today", value: "0.00฿" },
        { label: "Yesterday", value: "0.00฿" },
      ],
    },
    {
      title: "Turnover",
      metrics: [
        { label: "Turnover Today", value: "0.00฿" },
        { label: "Yesterday", value: "0.00฿" },
      ],
    },
    {
      title: "Cashback",
      metrics: [
        { label: "Cashback Today", value: "0.00฿" },
        { label: "Yesterday", value: "0.00฿" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-bold mb-6">Analytics - Measure your Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg shadow-md text-center"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
            <div>
              {item.metrics.map((metric, i) => (
                <div key={i} className="mb-4">
                  <div className="text-sm text-gray-400">{metric.label}</div>
                  <div className="text-xl font-bold text-yellow-500">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
