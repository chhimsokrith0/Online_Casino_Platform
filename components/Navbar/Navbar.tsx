"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import NavbarLogo from "./NavbarLogo";
import NavbarButtons from "./NavbarButtons";
import NavbarLanguage from "./NavbarLanguage";
import NavbarMobile from "./NavbarMobile";
import SignUpModal from "./SignUpModal";
import NavbarWallet from "./NavbarWallet";

interface NavbarProps {
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("NavbarLinks");
  const [isMobile, setIsMobile] = useState(false);
  const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <nav className="w-full bg-gray-900 py-3 px-4 sm:px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <NavbarLogo locale={locale} />
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        {isMobile ? (
          <div className="flex flex-col items-end gap-4">
            {isLoggedIn ? (
              <>
                {/* Show Wallet and Language for logged-in mobile users */}
                <NavbarWallet locale={locale} />
                <NavbarLanguage locale={locale} />
              </>
            ) : (
              <div className="flex items-center justify-between w-full">
                {/* Navbar Mobile */}
                <div className="flex items-center gap-3 mr-2">
                  <NavbarMobile t={t} locale={locale} toggleModal={toggleModal} />
                </div>

                {/* Navbar Language */}
                <div className="flex items-center">
                  <NavbarLanguage locale={locale} />
                </div>
              </div>

            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {/* Desktop View */}
            {isLoggedIn ? (
              <NavbarWallet locale={locale} />
            ) : (
              <NavbarButtons t={t} toggleModal={toggleModal} />
            )}
            <NavbarLanguage locale={locale} />
          </div>
        )}
      </div>


      {/* Modal */}
      {modalType && (
        <SignUpModal
          activeTab={modalType}
          onClose={() => setModalType(null)}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </nav>
  );
};

export default Navbar;
