"use client";

import React, { useState } from "react";
import Link from "next/link";

const TabButton = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  return (
    <div className="flex gap-4 mb-6">
      <Link
        href="/account-information/forum/inbox"
        onClick={() => setActiveTab("Inbox")}
        className={`px-4 py-2 font-semibold rounded-lg transition ${
          activeTab === "Inbox"
            ? "bg-yellow-500 text-black"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        Inbox
      </Link>
      <Link
        href="/account-information/forum/send"
        onClick={() => setActiveTab("Send")}
        className={`px-4 py-2 font-semibold rounded-lg transition ${
          activeTab === "Send"
            ? "bg-yellow-500 text-black"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        Send
      </Link>
    </div>
  );
};

export default TabButton;
