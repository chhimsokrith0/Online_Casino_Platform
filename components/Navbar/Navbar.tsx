// "use client";

// import React, { useState, useEffect } from "react";
// import { useTranslations } from "next-intl";
// import NavbarLogo from "./NavbarLogo";
// import NavbarButtons from "./NavbarButtons";
// import NavbarLanguage from "./NavbarLanguage";
// import NavbarMobile from "./NavbarMobile";
// import SignUpModal from "./SignUpModal";
// import NavbarWallet from "./NavbarWallet";


// interface NavbarProps {
//   locale: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ locale }) => {
//   const t = useTranslations("NavbarLinks");
//   const [isMobile, setIsMobile] = useState(false);
//   const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleModal = (type: "signUp" | "signIn") => setModalType(type);

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <nav className="w-full bg-gray-900 py-3 px-4 sm:px-6 flex items-center justify-between shadow-md sticky top-0 z-50"
//     style={{
//       background: "linear-gradient(90deg, #1E1E2C, #232334)",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
//     }}>
//       {/* Left Section: Logo */}
//       <div className="hidden sm:block flex items-center">
//         <NavbarLogo locale={locale} />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center">
//         {isMobile ? (
//           <div className="gird gird-cols-3 items-end gap-4">
//             {isLoggedIn ? (
//               <div className="grid grid-cols-3 items-center gap-4">
//                 {/* Logo Section */}
//                 <div className="mr-6">
//                   <NavbarLogo locale={locale} />
//                 </div>

//                 {/* Wallet Section */}
//                 <div className="flex justify-center ml-4">
//                   <NavbarWallet locale={locale} />
//                 </div>

//                 {/* Language Selector Section */}
//                 <div className="flex justify-end">
//                   <NavbarLanguage locale={locale} />
//                 </div>
//               </div>

//             ) : (
//               <div className="flex items-center justify-between w-full">
//                 <div className="pr-2">
//                   <NavbarLogo locale={locale} />
//                 </div>
//                 {/* Navbar Mobile */}
//                 <div className="flex items-center gap-3 mr-2">
//                   <NavbarMobile t={t} locale={locale} toggleModal={toggleModal} />
//                 </div>

//                 {/* Navbar Language */}
//                 <div className="flex items-center">
//                   <NavbarLanguage locale={locale} />
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="flex items-center gap-4">
//             {/* Desktop View */}
//             {isLoggedIn ? (
//               <NavbarWallet locale={locale} />
//             ) : (
//               <NavbarButtons t={t} toggleModal={toggleModal} />
//             )}
//             <NavbarLanguage locale={locale} />
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {modalType && (
//         <SignUpModal
//           activeTab={modalType}
//           onClose={() => setModalType(null)}
//           setIsLoggedIn={setIsLoggedIn}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;




"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  const [isMobile, setIsMobile] = useState(false);
  const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);

  const toggleModal = (type: "signUp" | "signIn") => setModalType(type);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial resize check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLoggedIn = !!session;

  return (
    <nav
      className="w-full bg-gray-900 py-3 px-4 sm:px-6 flex items-center justify-between shadow-md sticky top-0 z-100"
      style={{
        background: "linear-gradient(90deg, #1E1E2C, #232334)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Logo */}
      <NavbarLogo locale={locale} />

      {/* Right Section */}
      <div className="flex items-center">
        {isMobile ? (
          isLoggedIn ? (
            <>
              <NavbarWallet locale={locale} />
              <NavbarLanguage locale={locale} />
            </>
          ) : (
            <>
              <NavbarMobile t={t} locale={locale} toggleModal={toggleModal} />
              <NavbarLanguage locale={locale} />
            </>
          )
        ) : (
          isLoggedIn ? (
            <>
              <NavbarWallet locale={locale} />
              <NavbarLanguage locale={locale} />
            </>
          ) : (
            <>
              <NavbarButtons t={t} toggleModal={toggleModal} />
              <NavbarLanguage locale={locale} />
            </>
          )
        )}
      </div>

      {/* Modal for Sign-Up / Sign-In */}
      {modalType && (
        <SignUpModal
          activeTab={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </nav>
  );
};

export default Navbar;
