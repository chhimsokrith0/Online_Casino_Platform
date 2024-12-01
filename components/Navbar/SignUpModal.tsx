"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ConfirmationModal from "../ConfirmationModal";

interface SignupModalProps {
  activeTab: "signUp" | "signIn";
  onClose: () => void;
  setIsLoggedIn: (value: boolean) => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
  activeTab,
  onClose,
  setIsLoggedIn,
}) => {
  const [tab, setTab] = useState(activeTab);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [hideSignupModal, setHideSignupModal] = useState(false); // State to hide SignupModal

  // Prevent page scrolling while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      setHideSignupModal(true); // Hide SignupModal
      setIsLoginModalOpen(true); // Show confirmation modal
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  const confirmLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false); // Close confirmation modal
    onClose(); // Close the Signup/Login modal
  };

  return (
    <>
      {!hideSignupModal && ( // Hide the SignupModal when `hideSignupModal` is true
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex h-full md:flex-row w-full max-w-lg md:max-w-6xl bg-transparent justify-center rounded-lg overflow-hidden animate-scale-up">
            {/* Left Side: Full Image */}
            <div className="hidden md:block relative flex-1 h-full max-w-[60vw] animate-slide-down">
              <Image
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1732969641/Signup_Banner_vf87rn.png"
                alt="Welcome Banner"
                className="object-cover h-full w-full rounded-l-lg"
                fill
                priority
              />
            </div>

            {/* Right Side: Form */}
            <div className="flex flex-col w-full bg-gray-800 lg:w-[450px] lg:min-w-[450px] h-full rounded-none md:rounded-r-lg relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-300 hover:text-white text-2xl focus:outline-none"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Tab Switcher */}
              <div className="flex font-bold w-full border-b border-gray-700">
                <button
                  onClick={() => setTab("signUp")}
                  className={`w-1/2 py-4 text-center text-base font-bold ${
                    tab === "signUp"
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black animate-pulse"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setTab("signIn")}
                  className={`w-1/2 py-4 text-center text-base font-bold ${
                    tab === "signIn"
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black animate-pulse"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  Sign In
                </button>
              </div>

              {/* Form Header */}
              <div className="text-center py-6">
                <h2 className="text-white text-lg md:text-xl font-bold animate-fade-in">
                  Welcome to
                </h2>
                <h3 className="text-yellow-500 text-2xl md:text-3xl font-bold tracking-wide uppercase animate-scale-up">
                  PLAYGAME168
                </h3>
              </div>

              {/* Form */}
              <form
                className="flex flex-col gap-4 px-6 md:px-10"
                onSubmit={tab === "signIn" ? handleLogin : undefined}
              >
                {/* Username Input */}
                {tab === "signIn" && (
                  <>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Username"
                        className="w-full h-12 bg-gray-700 rounded-full px-5 text-sm font-medium text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 bg-gray-700 rounded-full px-5 text-sm font-medium text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                      <p className="text-red-500 text-sm text-center">
                        {errorMessage}
                      </p>
                    )}

                    {/* Login Button */}
                    <button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:opacity-90 transition"
                    >
                      Sign In
                    </button>
                  </>
                )}

                {/* Sign Up (Placeholder) */}
                {tab === "signUp" && (
                  <>
                    <p className="text-white text-center">
                      Sign Up form is under construction.
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Login Confirmation Modal */}
      {isLoginModalOpen && (
        <ConfirmationModal
          message="Login successful!"
          subMessage="Welcome to PLAYGAME168! Enjoy your experience."
          onConfirm={confirmLogin}
          onCancel={() => {
            setIsLoginModalOpen(false);
            setHideSignupModal(false); // Show the signup modal again if canceled
          }}
        />
      )}
    </>
  );
};

export default SignupModal;
