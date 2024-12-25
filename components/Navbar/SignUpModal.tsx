"use client";

import React, { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { gsap } from "gsap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useTranslations } from "next-intl";

interface SignupModalProps {
  activeTab: "signIn" | "signUp";
  onClose: () => void;
  zIndex?: number;
}

const countries = [
  { code: "+66", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/th_byfrmv.png", name: "Thailand" },
  { code: "+1", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1735113043/Flag-United-States-of-America_z7oztm.webp", name: "United States" },
  { code: "+44", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/en_kthtlc.png", name: "United Kingdom" },
  { code: "+91", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hindi_fw5lqd.webp", name: "India" },
  { code: "+86", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/chinese_dxrdpn.png", name: "China" },
];

const SignupModal: React.FC<SignupModalProps> = ({ activeTab = "signIn", onClose, zIndex = 150 }) => {
  const t = useTranslations("signupModal"); // Translation namespace
  const [tab, setTab] = useState(activeTab);
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -50,
        duration: 0.4,
        ease: "power2.in",
        onComplete: onClose,
      });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setErrorMessage(t("invalidCredentialsError"));
    } else {
      alert(t("signInSuccess"));
      handleClose();
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage(t("passwordsMismatchError"));
      return;
    }

    alert(t("signUpSuccess"));
    handleClose();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code: string) => {
    setSelectedCountry(code);
    setIsOpen(false);
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      role="dialog"
      aria-modal="true"
      style={{ zIndex }}
    >
      <div
        ref={modalRef}
        className="relative flex flex-col md:flex-row bg-transparent w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden"
      >
        <div className="hidden md:block flex-1 relative h-full">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1732969641/Signup_Banner_vf87rn.png"
            alt="Welcome Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
            priority
          />
        </div>

        <div className="flex flex-col mr-2 bg-gray-900 text-gray-300 w-full md:w-[400px] lg:w-[450px] h-full p-6 md:rounded-r-lg">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label={t("close")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex font-bold border-b border-gray-700">
            <button
              onClick={() => setTab("signUp")}
              className={`w-1/2 py-3 text-center text-base font-bold ${tab === "signUp"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "bg-gray-900 text-gray-300"
                }`}
            >
              {t("signUpTab")}
            </button>
            <button
              onClick={() => setTab("signIn")}
              className={`w-1/2 py-3 text-center text-base font-bold ${tab === "signIn"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "bg-gray-900 text-gray-300"
                }`}
            >
              {t("signInTab")}
            </button>
          </div>

          <form
            className="flex flex-col gap-4 mt-6"
            onSubmit={tab === "signIn" ? handleLogin : handleSignUp}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                {/* Selected Country */}
                <div
                  className="flex items-center bg-gray-700 text-white rounded-full h-12 pl-3 pr-4 cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Image
                    src={countries.find((c) => c.code === selectedCountry)?.flag || "/flags/thailand.png"}
                    alt="flag"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-sm font-medium">{selectedCountry}</span>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute bg-gray-800 rounded-lg shadow-lg mt-2 z-10 w-full">
                    {countries.map((country) => (
                      <div
                        key={country.code}
                        className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
                        onClick={() => handleSelect(country.code)}
                      >
                        <Image
                          src={country.flag}
                          alt={`${country.code} flag`}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <span className="ml-2 text-sm font-medium text-white">{country.code}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder={t("mobilePlaceholder")}
                className="flex-1 bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("passwordPlaceholder")}
                className="w-full bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
                aria-label="Toggle Password Visibility"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            {tab === "signUp" && (
              <div className="relative">
                <input
                  type="password"
                  placeholder={t("confirmPasswordPlaceholder")}
                  className="w-full bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:opacity-90 transition"
            >
              {tab === "signUp" ? t("submitSignUp") : t("submitSignIn")}
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SignupModal;
