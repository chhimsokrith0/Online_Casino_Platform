"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import NavbarLogo from "./NavbarLogo";
import NavbarButtons from "./NavbarButtons";
import NavbarLanguage from "./NavbarLanguage";
import NavbarMobile from "./NavbarMobile";
import SignUpModal from "./SignUpModal"; // Import the modal component
import NavbarWallet from "./NavbarWallet";

interface NavbarProps {
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("NavbarLinks");
  const [isMobile, setIsMobile] = useState(false);
  const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const toggleModal = (type: "signUp" | "signIn") => setModalType(type);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full bg-gray-900 py-3 px-4 sm:px-6 flex items-center justify-between shadow-md sticky top-0">
      {/* Left Section */}
      <NavbarLogo locale={locale} />

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {isMobile ? (
          <NavbarMobile t={t} locale={locale} toggleModal={toggleModal} />
        ) : (
          <>
            {isLoggedIn && <NavbarWallet locale={locale} />}
            {!isLoggedIn && <NavbarButtons t={t} toggleModal={toggleModal} />} {/* Hide if logged in */}
            <NavbarLanguage locale={locale} />
          </>
        )}
      </div>

      {/* Modal */}
      {modalType && (
        <SignUpModal
          activeTab={modalType}
          onClose={() => setModalType(null)}
          setIsLoggedIn={setIsLoggedIn} // Pass down to update login state
        />
      )}
    </nav>
  );
};

export default Navbar;
