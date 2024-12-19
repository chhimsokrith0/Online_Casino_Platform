
// import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import Footer from "@/components/Footer";
// import "../globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import MobileNavBar from "@/components/MobileNavBar";
// import fonts from "../../messages/fonts.json";
// import SessionProviderWrapper from "@/components/SessionProviderWrapper";
// import "./style.css"

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   // Fetch messages server-side
//   const messages = await getMessages({ locale });

//   const selectedFont = (fonts.fonts as any)[locale]?.fontFamily || "Arial, sans-serif";

//   return (
//     <html lang={locale} style={{ fontFamily: selectedFont }}>
//       <body className="body bg-[#020617] text-white min-h-screen">
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <SessionProviderWrapper>
//             <header className="sticky top-0 z-50 shadow-md">
//               <Navbar locale={locale} />
//             </header>
//             <div className="flex flex-col lg:flex-row">
//               <aside className="hidden lg:block lg:w-64 z-[100]">
//                 <Sidebar locale={locale} />
//               </aside>
//               <main className="flex-1 pt-4 lg:px-8 bg-[#020617]">{children}</main>
//             </div>
//             <footer className="max-w-[1200px] mx-auto lg:ml-auto lg:mr-64 p-4">
//               <Footer locale={locale} />
//             </footer>
//             <br /><br /><br />
//             <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617] z-50 shadow-lg">
//               <MobileNavBar locale={locale}/>
//             </div>
//           </SessionProviderWrapper>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }



import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import MobileNavBar from "@/components/MobileNavBar";
import fonts from "../../messages/fonts.json";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { SidebarProvider } from "@/components/Sidebar/SidebarContext";
import "./style.css";


export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Fetch messages server-side
  const messages = await getMessages({ locale });

  const selectedFont =
    (fonts.fonts as any)[locale]?.fontFamily || "Arial, sans-serif";

  return (
    <html lang={locale} style={{ fontFamily: selectedFont }}>
      <body className="body bg-[#020617] text-white min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SessionProviderWrapper>
            {/* Wrap SidebarProvider around all components */}
            <SidebarProvider>
              <header className="sticky top-0 z-50 shadow-md">
                <Navbar locale={locale} />
              </header>
              <div className="flex flex-col lg:flex-row nesthubmax:flex-row">
                <aside className="hidden lg:block lg:w-64 nesthubmax:w-72 z-[100]">
                  <Sidebar locale={locale} />
                </aside>
                <main className="flex-1 pt-4 lg:px-8 nesthubmax:px-10 bg-[#020617]">
                  {children}
                </main>
              </div>
              <footer className="max-w-[1200px] mx-auto lg:ml-auto lg:mr-64 p-4">
                <Footer locale={locale} />
              </footer>
              <br />
              <br />
              <br />
              <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617] z-50 shadow-lg">
                <MobileNavBar locale={locale} />
              </div>
            </SidebarProvider>
          </SessionProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
