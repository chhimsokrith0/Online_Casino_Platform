"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavbarLanguageProps {
  locale: string;
  isCollapsed: boolean;
}

const LanguageSelector: React.FC<NavbarLanguageProps> = ({ locale, isCollapsed }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null); // Ref for GSAP animation
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/en_kthtlc.png" },
    { code: "zh", name: "Chinese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/chinese_dxrdpn.png" },
    { code: "kh", name: "Khmer", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/kh_ed3tmn.jpg" },
    { code: "th", name: "Thai", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/th_byfrmv.png" },
    { code: "id", name: "Indonesian", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/indo_nh6l9k.png" },
    { code: "ms", name: "Malay", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/malay_ov7mho.svg" },
    { code: "sg", name: "Singapore", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/singapore_hk6sy3.png" },
    { code: "vi", name: "Vietnamese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/vietnamese_j0rykn.jpg" },
    { code: "ph", name: "Filipino", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/philippines_uifhos.png" },
    { code: "mm", name: "Myanmar", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/myammar_tf4xwq.webp" },
    { code: "lo", name: "Lao", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/lao_r5l6yz.png" },
    { code: "hi", name: "Hindi", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hindi_fw5lqd.webp" },
    { code: "ur", name: "Urdu", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/urdu_l7ptk8.jpg" },
    { code: "bn", name: "Bengali", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/bengali_bzgmaw.png" },
    { code: "tw", name: "Taiwanese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/Taiwan_iv5pjf.webp" },
    { code: "hk", name: "Hong Kong", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hongkong_kycia1.png" },
    { code: "ko", name: "Korean", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/korea_s08db8.webp" },
    { code: "pt", name: "Portuguese", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/portugal_lep9my.png" },
    { code: "au", name: "Australia", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/australia_qh975e.webp" },
    { code: "ca", name: "Canada", flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/canada_rrkhgu.webp" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    // const path = pathname.split("/").slice(2).join("/");
    const path = (pathname || "").split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    if (!isDropdownOpen && dropdownMenuRef.current) {
      gsap.fromTo(
        dropdownMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${isCollapsed ? "text-center" : ""}`}>
      {!isCollapsed &&
        <>
          <div className="border-t border-gray-700 my-4"></div>
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-yellow-500 hover:text-black transition"
          >

            < Image
              src={currentLanguage?.flag || "/language/en.png"}
              alt={currentLanguage?.name || "English"}
              width={20}
              height={20}
              className="rounded-full mr-2"
            />

            <span className="hidden md:block">{currentLanguage?.name || "English"}</span>
            <span className="ml-2 text-yellow-500 hidden md:block">▼</span>


            {/* Hide text on small screens, show on medium+ screens */}
            {/* Hide text if sidebar is collapsed */}


          </button>
        </>
      }

      {isDropdownOpen && (
        <div
          ref={dropdownMenuRef}
          className="absolute right-0 mt-2 bg-gray-900 border border-yellow-500 text-white rounded-lg shadow-lg z-10 w-40 max-h-60 overflow-y-auto scrollbar-hide"
        >
          <ul className="py-2">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center w-full px-4 py-2 hover:bg-yellow-500 hover:text-black transition"
                >
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={20}
                    height={20}
                    className="rounded-full mr-2"
                  />
                  <span className="text-sm">{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

      )}
    </div>
  );
};

export default LanguageSelector;
