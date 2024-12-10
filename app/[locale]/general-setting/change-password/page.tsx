"use client"; // Add this at the top of the file to make it a client component

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const togglePasswordVisibility = (
        setter: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setter((prev) => !prev);
    };

    return (
        <div ref={containerRef} className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-white">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-8">Change Password</h2>

            <div className="max-w-md">
                {/* Current Password */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">
                        Current Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showCurrentPassword ? "text" : "password"}
                            placeholder="Enter current password"
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-300"
                            onClick={() => togglePasswordVisibility(setShowCurrentPassword)}
                        >
                            <FontAwesomeIcon icon={showCurrentPassword ? faEye : faEyeSlash} />
                        </button>
                    </div>
                </div>

                {/* New Password */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">
                        New Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-300"
                            onClick={() => togglePasswordVisibility(setShowNewPassword)}
                        >
                            <FontAwesomeIcon icon={showNewPassword ? faEye : faEyeSlash} />
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">
                        Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Enter confirm password"
                            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-300"
                            onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
                        >
                            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                        </button>
                    </div>
                </div>

                {/* Password Change Note */}
                <p className="text-sm text-yellow-500 flex items-center mb-6">
                    <span className="mr-2">⚠</span> Re-login will be required after changing the password.
                </p>

                {/* Password Strength */}
                <div className="mb-8">
                    <h3 className="text-sm font-semibold text-white mb-3">Password Strength</h3>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span> Must be at least 8 characters.
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span> Must contain at least 1 uppercase letter (A-Z).
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span> Must contain at least 1 lowercase letter (a-z).
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 mr-2">✔</span> Must contain at least 1 numeric digit (0-9).
                        </li>
                    </ul>
                </div>

                {/* Save Changes Button */}
                <button
                    className="w-full bg-gray-700 text-gray-500 p-3 rounded-lg cursor-not-allowed"
                    disabled
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default ChangePassword;
