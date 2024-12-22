"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";

const VerificationSetup = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("settings");

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
        <div ref={containerRef} className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl">
            {/* Header */}
            <h2 className="text-2xl font-extrabold mb-8 text-white">
                {t("verification.title")}
            </h2>

            {/* Tab Navigation */}
            <div className="flex items-center border-b border-gray-700 pb-4 mb-8">
                <button className="text-yellow-500 font-bold px-4 py-2 border-b-4 border-yellow-500 focus:outline-none">
                    {t("verification.AccountDetails")}
                </button>
            </div>

            {/* Personal Information Section */}
            <div className="mb-10">
                <h3 className="text-lg font-semibold mb-6 text-yellow-400">
                    {t("verification.PersonalInformation")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            {t("verification.Firstname")} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder={t("verification.Firstname")}
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
                            value="rith"
                            disabled
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            {t("verification.Lastname")} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder={t("verification.Lastname")}
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
                            value="sok"
                            disabled
                        />
                    </div>
                </div>

                {/* Mobile Phone */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                    {/* Country Code */}
                    <div className="col-span-1">
                        <label className="block text-sm text-gray-400 mb-2">
                            {t("verification.MobilePhone")} <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center bg-gray-700 rounded-lg h-12 px-4 w-full">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png"
                                alt="Flag"
                                className="w-6 h-4 rounded-sm mr-2"
                            />
                            <span className="text-white">+855</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 ml-auto text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-2">
                        <label className="block text-sm text-gray-400 mb-2 invisible">
                            Placeholder
                        </label>
                        <input
                            type="text"
                            placeholder={t("verification.PhonePlaceholder")}
                            className="w-full bg-gray-700 text-white h-12 px-4 rounded-lg focus:outline-none"
                            value="0964143284"
                            disabled
                        />
                    </div>
                </div>


            </div>

            {/* Banking Information Section */}
            <div className="mb-10">
                <h3 className="text-lg font-semibold mb-6 text-yellow-400">
                    {t("verification.BankingInformation")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Bank Name */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            {t("verification.Bankname")} <span className="text-red-500">*</span>
                        </label>
                        <select
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
                            defaultValue="Government Housing Bank"
                            disabled
                        >
                            <option>Government Housing Bank</option>
                            <option>Bank 2</option>
                            <option>Bank 3</option>
                        </select>
                    </div>

                    {/* Bank Account Number */}
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            {t("verification.Bankaccountnumber")} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder={t("verification.AccountNumberPlaceholder")}
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
                            value="123456789"
                            disabled
                        />
                    </div>
                </div>
            </div>

            {/* Save Changes Button */}
            <div className="text-center">
                <button
                    className="w-full bg-gray-700 text-gray-500 p-3 rounded-lg cursor-not-allowed font-bold"
                    disabled
                >
                    {t("verification.SaveChanges")}
                </button>
            </div>
        </div>
    );
};

export default VerificationSetup;
