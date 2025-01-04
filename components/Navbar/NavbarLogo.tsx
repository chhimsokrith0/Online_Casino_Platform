"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "@/components/Sidebar/SidebarContext";
import Logo_ICG from "@/assets/Logo/logo-icg.png";

interface NavbarLogoProps {
  locale: string;
  setActiveItem?: (item: string) => void; // Optional prop to set active menu item
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ locale, setActiveItem }) => {
  const { toggleCollapse } = useSidebar();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked((prev) => !prev);
    toggleCollapse();
  };

  const handleLogoClick = () => {
    if (setActiveItem) {
      setActiveItem("home"); // Dynamically activate the "home" menu item
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Menu Icon */}
      <button
        ref={menuButtonRef}
        onClick={handleMenuClick}
        className={`relative hidden md:block text-white text-2xl transition-transform ${
          isClicked ? "text-yellow-400" : "hover:text-yellow-400"
        }`}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`transition-transform duration-300 ${
            isClicked ? "rotate-90" : "rotate-0"
          }`}
        />
        <span
          className={`absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full transform transition-transform duration-300 ${
            isClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </button>

      {/* Logo */}
      <Link href={`/${locale}/`} onClick={handleLogoClick}>
        <Image
          src={Logo_ICG}
          alt="PlayGame168 Logo"
          width={130}
          height={30}
          className="w-[80px] h-[20px] sm:w-[80px] sm:h-[20px] md:w-[150px] md:h-[30px] transition-all"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
