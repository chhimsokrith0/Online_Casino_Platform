"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

interface NavbarButtonsProps {
  t: any;
  toggleModal: (type: "signUp" | "signIn") => void;
}

const NavbarButtons: React.FC<NavbarButtonsProps> = ({ t, toggleModal }) => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current.children,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div ref={buttonsRef} className="flex items-center space-x-4">
      <button
        onClick={() => toggleModal("signUp")}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-transform transform hover:scale-105"
      >
        {t("signUp")}
      </button>
      <button
        onClick={() => toggleModal("signIn")}
        className="border border-yellow-500 text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 hover:text-black transition-transform transform hover:scale-105"
      >
        {t("signIn")}
      </button>
      <button className="text-white text-xl hover:text-yellow-500 transition-transform transform hover:scale-105">
        <FontAwesomeIcon icon={faHeadset} />
      </button>
    </div>
  );
};

export default NavbarButtons;
