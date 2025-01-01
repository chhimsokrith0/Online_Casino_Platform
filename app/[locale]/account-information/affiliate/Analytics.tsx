"use client";

import React from "react";
import { useTranslations } from "next-intl";
const Analytics = () => {
  const t = useTranslations("accountInformation.referral.analytics");
  const data = [
    {
      title: t("metrics.income.title"),
      metrics: [
        { label: t("metrics.income.today"), value: "0.00฿" },
        { label: t("metrics.income.yesterday"), value: "0.00฿" },
      ],
    },
    {
      title: t("metrics.turnover.title"),
      metrics: [
        { label: t("metrics.turnover.today"), value: "0.00฿" },
        { label: t("metrics.turnover.yesterday"), value: "0.00฿" },
      ],
    },
    {
      title: t("metrics.cashback.title"),
      metrics: [
        { label: t("metrics.cashback.today"), value: "0.00฿" },
        { label: t("metrics.cashback.yesterday"), value: "0.00฿" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-bold mb-6 text-center md:text-left">{t("title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
            <div className="w-full">
              {item.metrics.map((metric, i) => (
                <div key={i} className="mb-4">
                  <div className="text-sm text-gray-400">{metric.label}</div>
                  <div className="text-xl font-bold text-yellow-500">{metric.value}</div>
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
