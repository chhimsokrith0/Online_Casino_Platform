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
import Link from "next/link";
import { useTranslations } from "next-intl";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw" | "transfer">("deposit");
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const t = useTranslations("wallet");

  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      scrollPositionRef.current = window.scrollY;

      // Lock the body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";

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
    } else {
      // Ensure scrolling is restored if the modal is not open
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    }

    return () => {
      if (!isOpen) return;

      // Restore body scroll when modal is closed
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";

      // Restore the saved scroll position
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, [isOpen]);

  const handleClose = () => {
    // Animate modal exit
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Restore the body scroll after modal is closed
        onClose();
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";

        // Restore scroll position
        window.scrollTo(0, scrollPositionRef.current);
      },
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
          <h2 className="text-lg font-bold">{ t("title") }</h2>
          <Link
            href="/account-information/transactions"
            onClick={() => {
              // Call onClose to hide the modal when "History" is clicked
              onClose();
            }}
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
          >
            <FontAwesomeIcon icon={faClock} />
            <span className="text-sm">History</span>
          </Link>
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
