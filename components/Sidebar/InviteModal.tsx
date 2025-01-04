"use client";

import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import {
  faFacebook,
  faTwitter,
  faTelegram,
  faWhatsapp,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import ReactDOM from "react-dom";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralLink: string;
  referralCode: string;
}

const InviteModal: React.FC<InviteModalProps> = ({
  isOpen,
  onClose,
  referralLink,
  referralCode,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("inviteAndBenefits");

  // Copy to clipboard functionality with toast
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
  };

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Return null if not open
  if (!isOpen) return null;

  // ReactDOM Portal
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999] backdrop-blur-sm">
        <div
          ref={modalRef}
          className="bg-gray-900 rounded-lg w-[90%] sm:w-[500px] p-6 shadow-lg text-white relative animate-fade-in"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">{t("title")}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-red-500">
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>

          {/* Image Banner */}
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src="https://storage.googleapis.com/cdn.i-gamingplatform.com/global_config/invite_and_benefits_banner.png"
              alt="Invite Benefits"
              className="w-full h-auto"
            />
          </div>

          {/* Referral Link */}
          <div className="mb-4">
            <p className="text-sm mb-2">{t("referralLinkTitle")}</p>
            <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="bg-transparent text-sm text-gray-300 w-full"
              />
              <button
                onClick={() => copyToClipboard(referralLink)}
                className="text-gray-400 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </div>

          {/* Referral Code */}
          <div className="mb-4">
            <p className="text-sm mb-2">{t("referralCodeTitle")}</p>
            <div className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg">
              <input
                type="text"
                value={referralCode}
                readOnly
                className="bg-transparent text-sm text-gray-300 w-full"
              />
              <button
                onClick={() => copyToClipboard(referralCode)}
                className="text-gray-400 hover:text-yellow-500"
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </div>

          {/* Share Instructions */}
          <p className="text-sm text-gray-400 mb-4">{t("description")}</p>

          {/* Social Media Sharing */}
          <div className="flex gap-4 justify-center mt-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
              className="text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/?lang=en&mx=2"
              className="text-blue-400"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://login.live.com/"
              className="text-blue-300"
            >
              <FontAwesomeIcon icon={faSkype} className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.whatsapp.com/"
              className="text-green-500"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://telegram.org/"
              className="text-blue-400"
            >
              <FontAwesomeIcon icon={faTelegram} className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </>,
    document.body
  );
};

export default InviteModal;
