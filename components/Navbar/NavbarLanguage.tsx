import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface NavbarLanguageProps {
    locale: string;
}

const NavbarLanguage: React.FC<NavbarLanguageProps> = ({ locale }) => {
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", flag: "/language/en.png" },
        { code: "zh", name: "Chinese", flag: "/language/chinese.png" },
        { code: "kh", name: "Khmer", flag: "/language/kh.jpg" },
        { code: "th", name: "Thai", flag: "/language/th.png" },
        { code: "id", name: "Indonesian", flag: "/language/indo.png" },
        { code: "ms", name: "Malay", flag: "/language/malay.svg" },
        { code: "sg", name: "Singapore", flag: "/language/singapore.png" },
        { code: "vi", name: "Vietnamese", flag: "/language/vietnamese.jpg" },
        { code: "ph", name: "Filipino", flag: "/language/philippines.png" },
        { code: "mm", name: "Myanmar", flag: "/language/myammar.webp" },
        { code: "lo", name: "Lao", flag: "/language/lao.png" },
        { code: "hi", name: "Hindi", flag: "/language/hindi.webp" },
        { code: "ur", name: "Urdu", flag: "/language/urdu.jpg" },
        { code: "bn", name: "Bengali", flag: "/language/bengali.png" },
        { code: "tw", name: "Taiwanese", flag: "/language/Taiwan.webp" },
        { code: "hk", name: "Hong Kong", flag: "/language/hongkong.png" },
        { code: "ko", name: "Korean", flag: "/language/korea.webp" },
        { code: "pt", name: "Portuguese", flag: "/language/portugal.png" },
        { code: "au", name: "Australia", flag: "/language/australia.webp" },
        { code: "ca", name: "Canada", flag: "/language/canada.webp" },
    ];

    const currentLanguage = languages.find((lang) => lang.code === locale);

    const handleLanguageChange = (newLocale: string) => {
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
                <Image
                    src={currentLanguage?.flag || "/language/en.png"}
                    alt={currentLanguage?.name || "English"}
                    width={20}
                    height={20}
                    className="rounded-full mr-2"
                />
                <span>{currentLanguage?.name || "English"}</span>
                <span className="ml-2 text-yellow-500">▼</span>
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gray-900 border border-yellow-500 text-white rounded-lg shadow-lg z-10 w-40">
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

export default NavbarLanguage;
