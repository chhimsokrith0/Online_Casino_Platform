import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

interface NavbarButtonsProps {
  t: any;
  toggleModal: (type: "signUp" | "signIn") => void;
}

const NavbarButtons: React.FC<NavbarButtonsProps> = ({ t, toggleModal }) => {
  return (
    <>
      <button
        onClick={() => toggleModal("signUp")}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-2 px-6 rounded-full hover:opacity-90 transition"
      >
        {t("signUp")}
      </button>
      <button
        onClick={() => toggleModal("signIn")}
        className="border border-yellow-500 text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition"
      >
        {t("signIn")}
      </button>
      <button className="text-white text-xl hover:text-yellow-500 transition">
        <FontAwesomeIcon icon={faHeadset} />
      </button>
    </>
  );
};

export default NavbarButtons;
