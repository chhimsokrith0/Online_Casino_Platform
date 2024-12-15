"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBalanceScale  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative shadow-md  flex items-center justify-between">
      {/* Left Section with Icon and Title */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faBalanceScale } className="text-yellow-500"  size="2x"/>
        <h1 className="text-white font-semibold text-lg">Security and Policy</h1>
      </div>
      {/* Close Button */}
      <Link href="/" className="text-gray-400 hover:text-white transition">
        <FontAwesomeIcon icon={faTimes} size="2x"/>
      </Link>
    </header>
  );
};

export default Header;