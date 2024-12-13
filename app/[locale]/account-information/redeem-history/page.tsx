"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RedeemHistoryPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

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
            <h2 className="text-lg font-bold text-white mb-4">Redeem History</h2>

            {/* Filters */}
            <div className="flex justify-between items-center mb-4">
                {/* Dropdown Filter */}
                <select className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none">
                    <option value="all">All</option>
                    <option value="points">Points</option>
                    <option value="free-spins">Free Spins</option>
                    <option value="cashback">Cashback</option>
                </select>

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

            {/* Table Headers */}
            <div className="grid grid-cols-7 text-gray-400 text-sm font-semibold mb-3">
                <span className="whitespace-nowrap">No.</span>
                <span className="whitespace-nowrap" >Transaction Date-Time</span>
                <span className="whitespace-nowrap">Type of Reward</span>
                <span className="whitespace-nowrap">Reward</span>
                <span className="whitespace-nowrap">Status</span>
                <span className="whitespace-nowrap">Used Points</span>
                <span className="whitespace-nowrap">Free Spins</span>
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
                <p>There&apos;s nothing here yet!</p>
            </div>

            {/* Footer */}
            <div className="mt-6">
                {/* Pagination */}
                <div className="flex justify-between items-center text-sm text-gray-400">
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
                    <div className="grid grid-cols-2 text-gray-400 text-sm mb-2">
                        <span>All Rewards:</span>
                        <span className="text-right text-yellow-500">0</span>
                    </div>
                    <div className="grid grid-cols-2 text-gray-400 text-sm mb-2">
                        <span>Total Used Points:</span>
                        <span className="text-right text-yellow-500">0</span>
                    </div>
                    <div className="grid grid-cols-2 text-gray-400 text-sm mb-2">
                        <span>Total Free Spins:</span>
                        <span className="text-right text-yellow-500">0</span>
                    </div>
                    <div className="grid grid-cols-2 text-gray-400 text-sm">
                        <span>Total Amount per Round:</span>
                        <span className="text-right text-yellow-500">0.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedeemHistoryPage;
