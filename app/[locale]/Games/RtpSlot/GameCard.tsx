// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useSession } from "next-auth/react";
// import SignupModal from "@/components/Navbar/SignUpModal";

// interface GameCardProps {
//   title: string;
//   provider: string;
//   image: string;
//   percentage: string;
// }

// const GameCard: React.FC<GameCardProps> = ({ title, provider, image, percentage }) => {
//   const cardRef = useRef<HTMLDivElement | null>(null);
//   const buttonRef = useRef<HTMLDivElement | null>(null);
//   const { data: session } = useSession();
//   const [showSignUpModal, setShowSignUpModal] = React.useState(false);

//   useEffect(() => {
//     if (cardRef.current) {
//       // Initial animation for the card when the component is mounted
//       gsap.fromTo(
//         cardRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
//       );
//     }
//   }, []);

//   const handleHover = () => {
//     if (cardRef.current) {
//       gsap.to(cardRef.current, { scale: 1.05, duration: 0.3, ease: "power2.out" });
//     }
//     if (buttonRef.current) {
//       gsap.to(buttonRef.current, { scale: 1.2, duration: 0.3, ease: "power2.out" });
//     }
//   };

//   const handleLeave = () => {
//     if (cardRef.current) {
//       gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
//     }
//     if (buttonRef.current) {
//       gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
//     }
//   };

//   const handleClick = () => {
//     if (buttonRef.current) {
//       gsap.fromTo(
//         buttonRef.current,
//         { scale: 1 },
//         { scale: 0.9, duration: 0.1, yoyo: true, ease: "power2.out" }
//       );
//     }
//     console.log("Play button clicked!");
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="rounded-lg shadow-lg overflow-hidden bg-gray-900 relative group hover:shadow-xl transition-shadow duration-300"
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//     >
//       {/* Game Image */}
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-45 object-cover transition-transform duration-300 group-hover:scale-105"
//       />

//       {/* Play Button */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         {session ? (
//           <div
//             ref={buttonRef}
//             className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-yellow-500 transition transform hover:scale-110 cursor-pointer shadow-lg"
//             onClick={handleClick}
//           >
//             <img
//               src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
//               alt="Play"
//               className="w-16 h-16"
//             />
//           </div>
//         ) : (
//           <div
//             className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-red-500 transition transform hover:scale-110 cursor-pointer shadow-lg"
//             onClick={() => setShowSignUpModal(true)} // Show the modal when clicked
//           >
//             <img
//               src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
//               alt="Sign Up"
//               className="w-16 h-16"
//             />
//           </div>
//         )}
//       </div>

//       {/* Game Details */}
//       <div className="p-3">
//         <h3 className="text-sm font-medium text-white truncate">{title}</h3>
//         <p className="text-xs text-gray-400 truncate">{provider}</p>
//         <div className="flex items-center mt-2 space-x-2">
//           {/* Percentage Badge */}
//           <div
//             className={`flex items-center text-xs font-bold rounded-full px-2 py-1 ${parseFloat(percentage) > 50
//               ? "bg-green-600 text-white"
//               : "bg-yellow-500 text-white"
//               }`}
//           >
//             {percentage}
//           </div>

//           {/* Matching Icon */}
//           <div
//             className={`flex items-center justify-center w-6 h-6 rounded-full ${parseFloat(percentage) > 50 ? "bg-green-600" : "bg-yellow-500"
//               }`}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-3.5 h-3.5 text-white"
//               fill="currentColor"
//             >
//               {parseFloat(percentage) > 50 ? (
//                 <path d="M12 2l6 6-1.4 1.4L13 5.8V20h-2V5.8L7.4 9.4 6 8z" /> // Upward arrow
//               ) : (
//                 <path d="M12 22l-6-6 1.4-1.4L11 18.2V4h2v14.2l4.6-4.6L18 16z" /> // Downward arrow
//               )}
//             </svg>
//           </div>
//         </div>

//       </div>
//       {showSignUpModal && (
//         <SignupModal activeTab="signIn" onClose={() => setShowSignUpModal(false)} />
//       )}
//     </div>

//   );
// };

// export default GameCard;




"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import SignupModal from "@/components/Navbar/SignUpModal";
import './style.css'

interface GameCardProps {
  title: string;
  provider: string;
  image: string;
  percentage: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, provider, image, percentage }) => {
  const { data: session } = useSession();
  const [showSignUpModal, setShowSignUpModal] = React.useState(false);

  // Motion variants
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className={`rounded-lg shadow-lg overflow-hidden bg-gray-900 relative group hover:shadow-2xl transition-shadow duration-300 ${parseFloat(percentage) >= 90 ? "animate-bounce" : ""}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={cardVariants}
    >
      {/* Game Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-45 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Play Button */}
      <motion.div
        className="absolute top-[-150px] inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {session ? (
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center bg-yellow-500 shadow-lg cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => console.log("Play button clicked!")}
          >
            <img
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
              alt="Play"
              className="w-8 h-8"
            />
          </motion.div>
        ) : (
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center bg-red-500 shadow-lg cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setShowSignUpModal(true)} // Show the modal when clicked
          >
            <img
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733994091/play-button-svgrepo-com_n1u2ih.svg"
              alt="Sign Up"
              className="w-8 h-8"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Game Details */}
      <div className="p-4 rounded-b-lg bg-opacity-80">
        <motion.h3
          className="text-md font-semibold text-white truncate hover:text-yellow-400 transition duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-gray-400 truncate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {provider}
        </motion.p>
        <motion.div
          className="flex items-center mt-3 space-x-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {/* Percentage Badge */}
          <motion.div
            className={`rtp w-full flex justify-between items-center gap-1 md:gap-2 ${parseFloat(percentage) >= 90 ? "" : ""}`}
          >
            <div
              className={`w-[68px] md:w-[86px] px-1.5 py-0.5 rounded-md justify-start items-center gap-1 md:gap-2.5 flex ${parseFloat(percentage) >= 90 ? "bg-purple-600" : parseFloat(percentage) > 50 ? "bg-green-600" : "bg-yellow-500"}`}
            >
              <div
                className="text-t-secondary text-[10px] md:text-xs font-semibold"
              >
                {percentage}
              </div>
              <img
                className="w-2.5 md:w-4 h-auto object-contain"
                src={parseFloat(percentage) >= 90 ? "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1460_250981)'%3e%3cpath%20d='M15.3307%204L8.9974%2010.3333L5.66406%207L0.664062%2012M15.3307%204H11.3307M15.3307%204V8'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1460_250981'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" : parseFloat(percentage) > 50 ? "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1460_250981)'%3e%3cpath%20d='M15.3307%204L8.9974%2010.3333L5.66406%207L0.664062%2012M15.3307%204H11.3307M15.3307%204V8'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1460_250981'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" : "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1460_250981)'%3e%3cpath%20d='M12%2022l-6-6%201.4-1.4L11%2018.2V4h2v14.2l4.6-4.6L18%2016z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1460_250981'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"}
                alt="trend-icon"
              />
            </div>
            <div
              className="text-t-secondary text-[10px] md:text-xs font-semibold"
            >
              {percentage}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <SignupModal activeTab="signIn" onClose={() => setShowSignUpModal(false)} />
      )}
    </motion.div>
    
  );
};

export default GameCard;
