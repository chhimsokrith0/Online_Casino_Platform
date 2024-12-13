"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TabButton from "./Tab";
import Header from "./header";
import gsap from "gsap";

const PersonalMessagePage = () => {
  const [activeTab, setActiveTab] = useState("Inbox");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // GSAP animation for the container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power4.out" }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-6 bg-gray-900 rounded-lg"
    >
      <Header />

      {/* Tabs */}
      <TabButton activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Table Placeholder */}
      <div className="overflow-x-auto">
        <div className="py-6 text-center text-gray-400">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733752217/nothing_box_sn6zu5.webp"
            alt="No Result"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <p>No Result Found</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center">
          <button className="px-3 py-1 bg-gray-700 rounded-l-lg hover:bg-gray-600">
            &lt;
          </button>
          <span className="px-4 py-1 bg-gray-700">1</span>
          <button className="px-3 py-1 bg-gray-700 rounded-r-lg hover:bg-gray-600">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalMessagePage;
