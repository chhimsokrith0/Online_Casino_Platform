"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslations } from "next-intl";
const RedeemHistoryPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const t = useTranslations("accountInformation.redeemHistory");
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

    const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start || undefined);
        setEndDate(end || undefined);
    };

    return (
        <div ref={containerRef} className="p-4 md:p-6 bg-gray-900 rounded-lg">
            <h2 className="text-base md:text-lg font-bold text-white mb-4">{t("title")}</h2>

            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-end mb-4 gap-2 relative">
                <button
                    onClick={toggleDatePicker}
                    className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-gray-300"
                >
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>
                        {startDate
                            ? startDate.toLocaleDateString()
                            : "Start Date"} {" "}
                        - {" "}
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

            {/* Table Headers */}
            <div className="grid grid-cols-2 md:grid-cols-7 text-gray-400 text-xs md:text-sm font-semibold mb-3">
                <span className="whitespace-nowrap">{t("columns.no")}</span>
                <span className="whitespace-nowrap ml-[-50px]">{t("columns.transactionDateTime")}</span>
                <span className="whitespace-nowrap hidden md:block">{t("columns.typeOfReward")}</span>
                <span className="whitespace-nowrap hidden md:block">{t("columns.reward")}</span>
                <span className="whitespace-nowrap hidden md:block">{t("columns.status")}</span>
                <span className="whitespace-nowrap hidden md:block">{t("columns.usedPoints")}</span>
                <span className="whitespace-nowrap hidden md:block">{t("columns.freeSpins")}</span>
            </div>

            {/* Empty State */}
            <div className="bg-gray-700 p-4 md:p-6 rounded-lg flex flex-col items-center justify-center text-gray-400">
                <Image
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
                    alt="Empty State"
                    width={64}
                    height={64}
                    className="mb-4"
                />
                <p className="text-sm md:text-base">{t("emptyState.message")}</p>
            </div>

            {/* Footer */}
            <div className="mt-6">
                {/* Pagination */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
                    <div className="flex items-center">
                        <button className="px-3 py-1 bg-gray-700 rounded-l-lg hover:bg-gray-600">
                            &lt;
                        </button>
                        <span className="px-4 py-1 bg-gray-700">1</span>
                        <button className="px-3 py-1 bg-gray-700 rounded-r-lg hover:bg-gray-600">
                            &gt;
                        </button>
                    </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-800 p-4 rounded-lg mt-4">
                    <div className="grid grid-cols-2 text-gray-400 text-xs md:text-sm mb-2">
                        <span>{t("totals.allRewards")}</span>
                        <span className="text-right text-yellow-500">0</span>
                    </div>
                    <div className="grid grid-cols-2 text-gray-400 text-xs md:text-sm mb-2">
                        <span>{t("totals.totalUsedPoints")}</span>
                        <span className="text-right text-yellow-500">0</span>
                    </div>
                    <div className="grid grid-cols-2 text-gray-400 text-xs md:text-sm mb-2">
                        <span>{t("totals.totalFreeSpins")}</span>
                        <span className="text-right text-yellow-500">0</span>
                    </div>
                    <div className="grid grid-cols-2 text-gray-400 text-xs md:text-sm">
                        <span>{t("totals.totalAmountPerRound")}</span>
                        <span className="text-right text-yellow-500">0.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedeemHistoryPage;
