



// "use client";

// import React, { useEffect, useState } from "react";
// import { useSidebar } from "./SidebarContext";
// import LanguageSelector from "./LanguageSelector";
// import NavigationMenu from "./NavigationMenu";
// import PrivilegesSection from "./PrivilegesSection";
// import OtherSections from "./OtherSections";
// import SocialMedia from "./SocialMedia";
// import Logo_ICG from "@/assets/Logo/logo-icg.png";

// const Sidebar = ({ locale }: { locale: string }) => {
//   const { isSidebarOpen, isCollapsed, toggleSidebar } = useSidebar();
//   const [activeItem, setActiveItem] = useState<string>("home");
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   const handleSetActiveItem = (item: string) => {
//     setActiveItem(item);
//     localStorage.setItem("activeMenuItem", item);
//   };

//   // Responsive check for mobile view
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {isSidebarOpen && (
//         <aside
//           style={{
//             background: "linear-gradient(90deg, #1E1E2C, #232334)",
//             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
//           }}
//           className={`bg-gray-900 text-white 
//             ${isCollapsed ? "w-20" : "w-64"} 
//             ${!isMobile ? "top-[66px]" : ""} 
//             h-[calc(100vh-64px)] 
//             fixed top-0 lg:mt-0 
//             px-4 py-6 
//             flex flex-col justify-between 
//             overflow-y-scroll scrollbar-hide 
//             z-50 shadow-md transition-all`}
//         >
//           {/* Sidebar Content */}
//           <div>
//             {isMobile && (
//               <div className="flex justify-between items-center mb-4">
//                 <img src={Logo_ICG.src} alt="Logo" className="w-40 h-auto" />
//                 <button
//                   onClick={toggleSidebar}
//                   className="text-white text-2xl focus:outline-none"
//                 >
//                   ✕
//                 </button>
//               </div>
//             )}
//             <ul className="space-y-4">
//               <NavigationMenu
//                 locale={locale}
//                 activeItem={activeItem}
//                 setActiveItem={handleSetActiveItem}
//                 isCollapsed={isCollapsed}
//               />
//               <PrivilegesSection locale={locale} isCollapsed={isCollapsed} />
//               <OtherSections
//                 locale={locale}
//                 activeItem={activeItem}
//                 setActiveItem={handleSetActiveItem}
//                 isCollapsed={isCollapsed}
//               />
//               <LanguageSelector locale={locale} isCollapsed={isCollapsed} />
//               <SocialMedia isCollapsed={isCollapsed}/>
//             </ul>
//           </div>
//         </aside>
//       )}

//       {/* Mobile Toggle Button */}
//       {isMobile && !isSidebarOpen && (
//         <button
//           onClick={toggleSidebar}
//           className="fixed top-4 left-4 bg-yellow-500 text-black px-3 py-2 rounded-full shadow-md focus:outline-none z-50"
//         >
//           ☰
//         </button>
//       )}
//     </>
//   );
// };

// export default Sidebar;




"use client";

import React, { useEffect, useState } from "react";
import { useSidebar } from "./SidebarContext";
import LanguageSelector from "./LanguageSelector";
import NavigationMenu from "./NavigationMenu";
import PrivilegesSection from "./PrivilegesSection";
import OtherSections from "./OtherSections";
import SocialMedia from "./SocialMedia";
import Logo_ICG from "@/assets/Logo/logo-icg.png";

const Sidebar = ({ locale }: { locale: string }) => {
  const { isSidebarOpen, isCollapsed, toggleSidebar } = useSidebar();
  const [activeItem, setActiveItem] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeMenuItem", item);
    }
  };

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically set active menu item based on the current route
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;

      if (currentPath === `/${locale}` || currentPath === `/${locale}/`) {
        handleSetActiveItem("home");
      } else if (currentPath.includes("/Games/slots")) {
        handleSetActiveItem("slots");
      } else if (currentPath.includes("/Games/LiveCasino")) {
        handleSetActiveItem("liveCasino");
      } else if (currentPath.includes("/Privileges")) {
        handleSetActiveItem("privileges");
      } else {
        handleSetActiveItem(""); // Default to no active item if path doesn't match
      }
    }
  }, [locale]);

  return (
    <>
      {isSidebarOpen && (
        <aside
          style={{
            background: "linear-gradient(90deg, #1E1E2C, #232334)",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          }}
          className={`bg-gray-900 text-white 
            ${isCollapsed ? "w-20" : "w-64"} 
            ${!isMobile ? "top-[66px]" : ""} 
            h-[calc(100vh-64px)] 
            fixed top-0 lg:mt-0 
            px-4 py-6 
            flex flex-col justify-between 
            overflow-y-scroll scrollbar-hide 
            z-50 shadow-md transition-all`}
        >
          {/* Sidebar Content */}
          <div>
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <img src={Logo_ICG.src} alt="Logo" className="w-40 h-auto" />
                <button
                  onClick={toggleSidebar}
                  className="text-white text-2xl focus:outline-none"
                >
                  ✕
                </button>
              </div>
            )}
            <ul className="space-y-4">
              <NavigationMenu
                locale={locale}
                activeItem={activeItem}
                setActiveItem={handleSetActiveItem}
                isCollapsed={isCollapsed}
              />
              <PrivilegesSection locale={locale} isCollapsed={isCollapsed} />
              <OtherSections
                locale={locale}
                activeItem={activeItem}
                setActiveItem={handleSetActiveItem}
                isCollapsed={isCollapsed}
              />
              <LanguageSelector locale={locale} isCollapsed={isCollapsed} />
              <SocialMedia isCollapsed={isCollapsed} />
            </ul>
          </div>
        </aside>
      )}

      {/* Mobile Toggle Button */}
      {isMobile && !isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 bg-yellow-500 text-black px-3 py-2 rounded-full shadow-md focus:outline-none z-50"
        >
          ☰
        </button>
      )}
    </>
  );
};

export default Sidebar;
