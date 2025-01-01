"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TotalBetPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("accountInformation.totalBet");
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
      <h2 className="text-lg font-bold text-white mb-4">{t("title")}</h2>

      {/* Table Headers */}
      <div className="grid grid-cols-3 text-gray-400 text-sm font-semibold mb-3">
        <span>{t("columns.transactionDateTime")}</span>
        <span className="text-center">{t("columns.totalWinLose")}</span>
        <span className="text-right">{t("columns.totalBets")}</span>
      </div>

      {/* Empty State */}
      <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-gray-400">
        <Image
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
          alt="Empty State"
          width={64}
          height={64}
          className="mb-4"
        />
        <p>{t("emptyState.message")}</p>
      </div>

      {/* Footer */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg flex justify-between items-center">
        <span className="text-sm font-bold text-gray-400">{t("totalBetAmount")}</span>
        <span className="text-lg font-bold text-yellow-500">0.00฿</span>
      </div>
    </div>
  );
};

export default TotalBetPage;
