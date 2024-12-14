import React from "react";

interface NavbarMobileProps {
  t: any;
  locale: string;
  toggleModal: (type: "signUp" | "signIn") => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ t, toggleModal }) => {
  return (
    <div className="flex gap-2 justify-end items-center w-full ">
      {/* Sign Up Button */}
      <button
        onClick={() => toggleModal("signUp")}
        className="whitespace-nowrap bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-medium py-1.5 px-4 rounded-full hover:opacity-90 transition shadow-md text-xs sm:py-2 sm:px-5 sm:text-sm"
      >
        {t("signUp")}
      </button>

      {/* Sign In Button */}
      <button
        onClick={() => toggleModal("signIn")}
        className="whitespace-nowrap border border-yellow-500 text-yellow-500 font-medium py-1.5 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition shadow-md text-xs sm:py-2 sm:px-5 sm:text-sm"
      >
        {t("signIn")}
      </button>
    </div>
  );
};

export default NavbarMobile;
