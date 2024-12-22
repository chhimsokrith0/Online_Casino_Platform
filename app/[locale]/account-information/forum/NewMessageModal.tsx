"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import Image from "next/image";

interface NewMessageModalProps {
  isOpen: boolean; // Controls the visibility of the modal
  onClose: () => void; // Function to close the modal
}

const NewMessageModal: React.FC<NewMessageModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      // Animate overlay
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power4.out" }
        );
      }

      // Animate modal container
      if (modalRef.current) {
        gsap.fromTo(
          modalRef.current,
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
        );
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    } else {
      // Animate modal container dismissal
      if (modalRef.current) {
        gsap.to(modalRef.current, {
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          ease: "power4.in",
          onComplete: () => onClose(), // Trigger onClose after animation
        });
      }

      // Animate overlay dismissal
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power4.in",
        });
      }
    }
  }, [isOpen, onClose]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);

        // Animate image appearance
        if (modalRef.current) {
          gsap.fromTo(
            modalRef.current.querySelector("img"),
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeSelectedImage = () => {
    if (selectedImage) {
      const imageElement = modalRef.current?.querySelector("img");

      if (imageElement) {
        gsap.to(imageElement, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power4.in",
          onComplete: () => setSelectedImage(null),
        });
      } else {
        setSelectedImage(null);
      }
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[200]"
    >
      <div
        ref={modalRef}
        className="bg-gray-900 p-6 rounded-lg w-[400px] shadow-lg"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-white">New Message</h2>
          <button
            onClick={() => onClose()}
            className="text-gray-400 hover:text-white"
            aria-label="Close Modal"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Form */}
        <form>
          {/* Send To Field */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Send To</label>
            <input
              type="text"
              value="Admin"
              disabled
              className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* Title Field */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Message</label>
            <textarea
              placeholder="Type Something here ..."
              maxLength={300}
              className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg focus:outline-none resize-none h-24"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="text-gray-500 text-sm text-right">
              {message.length}/300
            </div>
          </div>

          {/* Image Attachment Field */}
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">
              Attach an Image (Optional)
            </label>
            <div
              className={`border border-dashed border-gray-600 rounded-lg p-4 text-center ${selectedImage ? "relative" : "flex flex-col items-center"
                }`}
            >
              {selectedImage ? (
                <div className="relative">
                  <Image
                    src={selectedImage}
                    alt="Selected attachment"
                    className="w-full rounded-lg mb-4"
                  />
                  <button
                    onClick={removeSelectedImage}
                    type="button"
                    className="absolute top-2 right-2 bg-gray-700 text-red-500 rounded-full p-2 hover:bg-gray-600 hover:text-red-400"
                    aria-label="Remove attached image"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-500 text-2xl mb-2"
                  />
                  <p className="text-yellow-500 text-sm mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-gray-500 text-xs mb-4">
                    Supported: WEBP, PNG, JPG (Max 3MB)
                  </p>
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    Upload Image
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-gray-500 font-semibold px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default NewMessageModal;
