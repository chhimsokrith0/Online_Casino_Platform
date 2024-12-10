"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const RebatePage = () => {
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
    return (
        <div  ref={containerRef} className="p-6 bg-gray-900 rounded-lg">
            <h2 className="text-lg font-bold text-white mb-4">Rebate</h2>

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
                <span className="text-right">Rebate Amount</span>
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
                    Total Rebate Amount: <span>0.00฿</span>
                </div>
            </div>
        </div>
    );
};

export default RebatePage;
