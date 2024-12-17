// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import menu icon
// import Logo_ICG from "@/assets/Logo/logo-icg.png";

// interface NavbarLogoProps {
//   locale: string;
// }

// const NavbarLogo: React.FC<NavbarLogoProps> = ({ locale }) => {
//   return (
//     <div className="flex items-center gap-4">
//       {/* Menu Icon */}
//       <button className="hidden md:block text-white text-2xl hover:text-yellow-400 transition">
//         <FontAwesomeIcon icon={faBars} />
//       </button>

//       {/* Logo */}
//       <Link href={`/${locale}/`}>
//         <Image
//           src={Logo_ICG}
//           alt="PlayGame168 Logo"
//           width={130}
//           height={30}
//           className="w-[80px] h-[20px] sm:w-[80px] sm:h-[20px] md:w-[150px] md:h-[30px] transition-all"
//         />
//       </Link>
//     </div>
//   );
// };

// export default NavbarLogo;




"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "@/components/Sidebar/SidebarContext"; // SidebarContext to collapse/expand
import Logo_ICG from "@/assets/Logo/logo-icg.png";
import gsap from "gsap";

interface NavbarLogoProps {
  locale: string;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ locale }) => {
  const { toggleCollapse } = useSidebar(); // Sidebar toggle function
  const menuButtonRef = useRef<HTMLButtonElement | null>(null); // Ref for menu button

  // GSAP Spin Animation Function
  const spinMenuButton = () => {
    if (menuButtonRef.current) {
      gsap.to(menuButtonRef.current, {
        rotation: "+=360", // Rotate 360 degrees
        duration: 0.5, // Duration in seconds
        ease: "power2.out",
      });
    }
  };

  const handleMenuClick = () => {
    spinMenuButton(); // Trigger the spin animation
    toggleCollapse(); // Collapse or expand the sidebar
  };

  return (
    <div className="flex items-center gap-4">
      {/* Menu Icon */}
      <button
        ref={menuButtonRef}
        onClick={handleMenuClick}
        className="hidden md:block text-white text-2xl hover:text-yellow-400 transition-transform"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Logo */}
      <Link href={`/${locale}/`}>
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
