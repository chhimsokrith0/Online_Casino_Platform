"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AccountInformationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col ">
      {/* Header */}
      <Header />

      <div className="flex flex-1 mt-2">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 pl-6">{children}</div>
      </div>
    </div>
  );
};

export default AccountInformationLayout;
