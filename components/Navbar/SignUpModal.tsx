// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import ConfirmationModal from "../ConfirmationModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// interface SignupModalProps {
//   activeTab: "signUp" | "signIn";
//   onClose: () => void;
//   setIsLoggedIn: (value: boolean) => void;
// }

// const SignupModal: React.FC<SignupModalProps> = ({
//   activeTab,
//   onClose,
//   setIsLoggedIn,
// }) => {
//   const [tab, setTab] = useState(activeTab);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [hideSignupModal, setHideSignupModal] = useState(false); // State to hide SignupModal
//   const [showPassword, setShowPassword] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const formFieldsRef = useRef<HTMLDivElement[]>([]);

//   // Prevent page scrolling while modal is open
//   useEffect(() => {
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     // GSAP animation for modal entrance
//     if (modalRef.current) {
//       gsap.fromTo(
//         modalRef.current,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
//       );
//     }

//     // GSAP animation for form fields staggered appearance
//     gsap.fromTo(
//       formFieldsRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
//     );

//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, []);

//   const handleClose = () => {
//     // GSAP animation for modal exit
//     if (modalRef.current) {
//       gsap.to(modalRef.current, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.4,
//         ease: "power2.inOut",
//         onComplete: onClose,
//       });
//     } else {
//       onClose();
//     }
//   };

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simulate login validation
//     if (username === "admin" && password === "123") {
//       localStorage.setItem("isLoggedIn", "true"); // Save login state to localStorage
//       setHideSignupModal(true); // Hide SignupModal
//       setIsLoginModalOpen(true); // Show confirmation modal
//     } else {
//       setErrorMessage("Invalid username or password.");
//     }
//   };

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }

//     setErrorMessage("");
//     setIsLoginModalOpen(true);
//   };

//   const confirmLogin = () => {
//     setIsLoggedIn(true); // Update parent state
//     setIsLoginModalOpen(false); // Close confirmation modal
//     onClose(); // Close the Signup/Login modal
//   };

//   return (
//     <>
//       {!hideSignupModal && (
//         <div
//           className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-70"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div
//             ref={modalRef}
//             className="relative flex flex-col md:flex-row bg-transparent w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden"
//           >
//             {/* Left Side: Welcome Banner */}
//             <div className="hidden md:block flex-1 relative h-full">
//               <Image
//                 src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1732969641/Signup_Banner_vf87rn.png"
//                 alt="Welcome Banner"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-l-lg"
//                 priority
//               />
//             </div>

//             {/* Right Side: Form */}
//             <div className="flex flex-col bg-gray-900 text-gray-300 w-full md:w-[400px] lg:w-[450px] h-full p-6 md:rounded-r-lg">
//               {/* Close Button */}
//               <button
//                 onClick={handleClose}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
//                 aria-label="Close"
//               >
//                 &times;
//               </button>

//               {/* Tab Switcher */}
//               <div className="flex font-bold border-b border-gray-700">
//                 <button
//                   onClick={() => setTab("signUp")}
//                   className={`w-1/2 py-3 text-center text-base font-bold ${
//                     tab === "signUp"
//                       ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//                       : "bg-gray-900 text-gray-300"
//                   }`}
//                 >
//                   Sign Up
//                 </button>
//                 <button
//                   onClick={() => setTab("signIn")}
//                   className={`w-1/2 py-3 text-center text-base font-bold ${
//                     tab === "signIn"
//                       ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
//                       : "bg-gray-900 text-gray-300"
//                   }`}
//                 >
//                   Sign In
//                 </button>
//               </div>

//               {/* Form Header */}
//               <div className="text-center my-6">
//                 <h2 className="text-white text-lg md:text-xl font-bold">
//                   Welcome to
//                 </h2>
//                 <h3 className="text-yellow-500 text-2xl md:text-3xl font-bold uppercase tracking-wider">
//                   ICG Gaming
//                 </h3>
//               </div>

//               {/* Form */}
//               <form
//                 className="flex flex-col gap-4"
//                 onSubmit={tab === "signIn" ? handleLogin : handleSignUp}
//               >
//                 {/* Mobile Phone */}
//                 <div
//                   className="flex items-center gap-2"
//                   ref={(el) => {
//                     if (el) formFieldsRef.current.push(el);
//                   }}
//                 >
//                   <select
//                     className="bg-gray-700 text-white rounded-full h-12 px-4 text-sm font-medium focus:ring-2 focus:ring-yellow-500 focus:outline-none"
//                     defaultValue="+66"
//                   >
//                     <option value="+66">+66</option>
//                     <option value="+1">+1</option>
//                     <option value="+44">+44</option>
//                   </select>
//                   <input
//                     type="text"
//                     placeholder="Mobile Phone *"
//                     className="flex-1 bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </div>

//                 {/* Password */}
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password *"
//                     className="w-full bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
//                     aria-label="Toggle Password Visibility"
//                   >
//                     <FontAwesomeIcon
//                       icon={showPassword ? faEyeSlash : faEye}
//                     />
//                   </button>
//                 </div>

//                 {/* Confirm Password (Sign Up Only) */}
//                 {tab === "signUp" && (
//                   <div className="relative">
//                     <input
//                       type="password"
//                       placeholder="Confirm Password *"
//                       className="w-full bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       required
//                     />
//                   </div>
//                 )}

//                 {/* Error Message */}
//                 {errorMessage && (
//                   <p className="text-red-500 text-sm text-center">
//                     {errorMessage}
//                   </p>
//                 )}

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:opacity-90 transition"
//                 >
//                   {tab === "signUp" ? "Sign Up" : "Sign In"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Confirmation Modal */}
//       {isLoginModalOpen && (
//         <ConfirmationModal
//           message="Action successful!"
//           subMessage={`Welcome to ICG Gaming! ${
//             tab === "signIn" ? "Enjoy your login." : "Your account is now created!"
//           }`}
//           onConfirm={confirmLogin}
//           onCancel={() => {
//             setIsLoginModalOpen(false);
//             setHideSignupModal(false); // Show the modal again if canceled
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default SignupModal;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { gsap } from "gsap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface SignupModalProps {
  activeTab: "signIn" | "signUp";
  onClose: () => void;
  zIndex?: number; // Add zIndex as an optional prop
}

const countries = [
  { code: "+66", flag: "/language/th.png", name: "Thailand" },
  { code: "+1", flag: "/language/en.png", name: "United States" },
  { code: "+44", flag: "/language/en.png", name: "United Kingdom" },
  { code: "+91", flag: "/language/hindi.webp", name: "India" },
  { code: "+86", flag: "/language/chinese.png", name: "China" },
];

const SignupModal: React.FC<SignupModalProps> = ({ activeTab = "signIn", onClose, zIndex = 150 }) => {
  const [tab, setTab] = useState(activeTab);
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling on background when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = "auto"; // Enable scroll
    };
  }, []);

  // GSAP Animation on Modal Mount
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
      setErrorMessage("Invalid username or password.");
    } else {
      alert("Login successful!");
      handleClose();
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    alert("Sign-up successful!");
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      role="dialog"
      aria-modal="true"
      style={{ zIndex }} // Apply dynamic zIndex
    >
      <div
        ref={modalRef}
        className="relative flex flex-col md:flex-row bg-transparent w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden"
      >
        {/* Left Side: Welcome Banner */}
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

        {/* Right Side: Form */}
        <div className="flex flex-col mr-2 bg-gray-900 text-gray-300 w-full md:w-[400px] lg:w-[450px] h-full p-6 md:rounded-r-lg">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Close"
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

          {/* Tab Switcher */}
          <div className="flex font-bold border-b border-gray-700">
            <button
              onClick={() => setTab("signUp")}
              className={`w-1/2 py-3 text-center text-base font-bold ${tab === "signUp"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "bg-gray-900 text-gray-300"
                }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setTab("signIn")}
              className={`w-1/2 py-3 text-center text-base font-bold ${tab === "signIn"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                : "bg-gray-900 text-gray-300"
                }`}
            >
              Sign In
            </button>
          </div>

          {/* Form */}
          <form
            className="flex flex-col gap-4 mt-6"
            onSubmit={tab === "signIn" ? handleLogin : handleSignUp}
          >
            {/* Country Selector */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  className="bg-gray-700 text-white rounded-full h-12 pl-10 pr-4 text-sm font-medium focus:ring-2 focus:ring-yellow-500 focus:outline-none appearance-none"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Image
                    src={countries.find((c) => c.code === selectedCountry)?.flag || "/flags/thailand.png"}
                    alt="flag"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Mobile Phone *"
                className="flex-1 bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password *"
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

            {/* Confirm Password (Sign Up Only) */}
            {tab === "signUp" && (
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  className="w-full bg-gray-700 text-white rounded-full h-12 px-5 text-sm font-medium placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:opacity-90 transition"
            >
              {tab === "signUp" ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
