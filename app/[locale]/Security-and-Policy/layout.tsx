"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const SecutityAndPolicyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="max-w-[1200px] hidden md:block mx-auto flex flex-col ">
        {/* Header */}
        <Header />

        <div className="flex flex-1 mt-2">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 pl-6">{children}</div>
        </div>
      </div>


      <div className="max-w-[1200px] block md:hidden mx-auto flex flex-col md:flex-row">
        {/* Header */}
        <div className="p-4">
        <Header />
        </div>

        <div className="flex flex-1 mt-2 flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/4 p-4">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:pl-6">
            {children}
          </div>
        </div>
      </div>
    </>

  );
};

export default SecutityAndPolicyLayout;
