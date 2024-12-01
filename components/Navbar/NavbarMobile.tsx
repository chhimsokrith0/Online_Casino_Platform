import React from "react";

interface NavbarMobileProps {
  t: any;
  locale: string;
  toggleModal: (type: "signUp" | "signIn") => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ t, toggleModal }) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => toggleModal("signUp")}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-1 px-4 rounded-full hover:opacity-90 transition text-sm w-full mb-2"
      >
        {t("signUp")}
      </button>
      <button
        onClick={() => toggleModal("signIn")}
        className="border border-yellow-500 text-yellow-500 font-semibold py-1 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition text-sm w-full"
      >
        {t("signIn")}
      </button>
    </div>
  );
};

export default NavbarMobile;
