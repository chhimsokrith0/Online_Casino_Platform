"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Section with Icon and Title */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUser} className="text-yellow-500" />
        <h1 className="text-white font-semibold text-lg">Account Information</h1>
      </div>
      {/* Close Button */}
      <Link href="/" className="text-gray-400 hover:text-white transition">
        <FontAwesomeIcon icon={faTimes} />
      </Link>
    </header>
  );
};

export default Header;
