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
import BottomNavbar from "./BottomNavbar";
import Image from "next/image";
import ProfileModal from "./ProfileModal";

interface NavbarProps {
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const t = useTranslations("NavbarLinks");
  const { data: session } = useSession();
  const [isMobile, setIsMobile] = useState(false);
  const [modalType, setModalType] = useState<"signUp" | "signIn" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleModal = (type: "signUp" | "signIn") => setModalType(type);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial resize check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLoggedIn = !!session;

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  return (
    <nav
      className="w-full bg-gray-900 py-3 px-4 sm:px-6 flex items-center justify-between shadow-md sticky top-0"
      style={{
        background: "linear-gradient(90deg, #1E1E2C, #232334)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Logo */}
      <div className="hidden sm:block">
        <NavbarLogo locale={locale} />
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        {isMobile ? (
          isLoggedIn ? (
            <>
              <div>
                <div
                  className="grid grid-cols-4 gap-4 items-center"

                >
                  {/* Logo Section */}
                  <div className="flex items-center justify-start">
                    <NavbarLogo locale={locale} />
                  </div>

                  {/* Wallet Section */}
                  <div className="flex items-center justify-center">
                    <div className="ml-24">
                      <NavbarWallet locale={locale} />
                    </div>
                  </div>

                  {/* Bronze Level Icon Section */}
                  <div className="flex items-center justify-center">
                    <div className="mr-[-100px]" onClick={toggleProfileModal}>
                      <Image
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733035009/bronze_fleymy.png"
                        alt="Bronze Level"
                        width={30}
                        height={30}
                        className="rounded-full"

                      />
                    </div>
                  </div>

                  {/* Language Selector Section */}
                  <div className="flex items-center justify-end">
                    <NavbarLanguage locale={locale} />
                  </div>
                </div>




                <br />
                <br />
                <br />
                <BottomNavbar />
              </div>
            </>
          ) : (
            <>

              <div>
                <div
                  className="grid grid-cols-3 gap-4 items-center"

                >
                  {/* Logo Section */}
                  <div className="flex items-center justify-start">
                    <NavbarLogo locale={locale} />
                  </div>

                  {/* Wallet Section */}
                  <div className="flex items-center justify-center">
                    <div className="ml-16">
                      <NavbarMobile t={t} locale={locale} toggleModal={toggleModal} />
                    </div>
                  </div>

                  {/* Language Selector Section */}
                  <div className="flex items-center justify-end">
                    <NavbarLanguage locale={locale} />
                  </div>
                </div>

              </div>

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

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={toggleProfileModal}
        locale={locale}
      />
    </nav>
  );
};

export default Navbar;
