"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Tabs from "./Tabs";
import DepositTab from "./DepositTab";
import WithdrawTab from "./WithdrawTab";
import TransferTab from "./TransferTab";
import Footer from "./footer";
import { faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw" | "transfer">("deposit");
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animate modal entrance
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power4.out", delay: 0.2 }
      );

      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Restore scrolling on body when modal is closed
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    // Animate modal exit
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  // Render modal using React Portal to avoid stacking context issues
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="bg-gray-800 rounded-lg w-full max-w-lg h-[650px] p-6 text-white relative shadow-lg flex flex-col"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl focus:outline-none"
          onClick={handleClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Your Wallet</h2>
          <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition">
            <FontAwesomeIcon icon={faClock} />
            <span className="text-sm">History</span>
          </button>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto">
          {activeTab === "deposit" && <DepositTab />}
          {activeTab === "withdraw" && <WithdrawTab />}
          {activeTab === "transfer" && <TransferTab />}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>,
    document.body // Portal renders outside of any stacking context
  );
};

export default WalletModal;
