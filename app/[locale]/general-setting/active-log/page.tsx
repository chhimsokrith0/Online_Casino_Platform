"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";

const ActivityLog = () => {
    const t = useTranslations("settings");
    const [logs] = useState([
        { dateTime: "10/12/2024 11:50:49", activity: "Login" },
        { dateTime: "09/12/2024 19:02:36", activity: "Login" },
        { dateTime: "09/12/2024 11:24:18", activity: "Daily Check-In from Quest" },
        { dateTime: "09/12/2024 11:22:05", activity: "Enter Game" },
        { dateTime: "09/12/2024 11:21:50", activity: "Enter Game" },
        { dateTime: "09/12/2024 11:21:42", activity: "Enter Game" },
        { dateTime: "09/12/2024 11:21:40", activity: "Login" },
        { dateTime: "07/12/2024 21:09:26", activity: "Enter Game" },
        { dateTime: "07/12/2024 21:09:23", activity: "Login" },
        { dateTime: "05/12/2024 12:07:08", activity: "Login" },
    ]);

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
        <div ref={containerRef} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-white">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0"> {t("activityLog.title")} </h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    {/* Dropdown */}
                    <select className="bg-gray-700 text-gray-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-auto">
                        <option value="all">{t("activityLog.filters.all")}</option>
                        <option value="login">{t("activityLog.filters.login")}</option>
                        <option value="game">{t("activityLog.filters.game")}</option>
                        <option value="quest">{t("activityLog.filters.quest")}</option>
                    </select>
                    {/* Date Filter */}
                    <div className="flex items-center bg-gray-700 text-gray-400 p-3 rounded-lg">
                        <span className="material-icons mr-2">calendar_today</span>
                        <span>27/10/2024 - 10/12/2024</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400 border-collapse border border-gray-700">
                    <thead className="bg-gray-700 text-gray-300 uppercase text-xs">
                        <tr>
                            <th className="p-2 sm:p-4 border-b border-gray-600">{t("activityLog.columns.dateTime")}</th>
                            <th className="p-2 sm:p-4 border-b border-gray-600">{t("activityLog.columns.activity")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => (
                            <tr
                                key={index}
                                className="odd:bg-gray-800 even:bg-gray-700 hover:bg-gray-600 transition-all duration-200"
                            >
                                <td className="p-2 sm:p-4 border-b border-gray-700">{log.dateTime}</td>
                                <td className="p-2 sm:p-4 border-b border-gray-700">{log.activity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                <div className="flex gap-2">
                    <button className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-lg text-gray-400 hover:bg-gray-600">
                        1
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-lg text-gray-400 hover:bg-gray-600">
                        2
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-lg text-gray-400 hover:bg-gray-600">
                        3
                    </button>
                    <button className="w-8 h-8 flex justify-center items-center bg-gray-700 rounded-lg text-gray-400 hover:bg-gray-600">
                        4
                    </button>
                </div>
                <div className="text-center sm:text-right">
                    <span className="text-gray-400">
                    {/* {t("activityLog.total")} */}
                    {t("activityLog.totalActivities")} 36
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ActivityLog;
