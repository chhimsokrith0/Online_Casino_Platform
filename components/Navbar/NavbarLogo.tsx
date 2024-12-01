import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo_ICG from "@/assets/Logo/logo-icg.png";

interface NavbarLogoProps {
  locale: string;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ locale }) => {
  return (
    <div className="flex items-center gap-4">
      <Link href={`/${locale}/`}>
        <Image
          src={Logo_ICG}
          alt="PlayGame168 Logo"
          width={120}
          height={40}
          className="h-auto w-auto"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
