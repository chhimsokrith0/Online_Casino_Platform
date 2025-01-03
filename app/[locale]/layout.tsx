// import Navbar from "@/components/Navbar/Navbar";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import Footer from "@/components/Footer";
// import "../globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import MobileNavBar from "@/components/MobileNavBar";
// import fonts from "../../messages/fonts.json";
// import SessionProviderWrapper from "@/components/SessionProviderWrapper";
// import { SidebarProvider } from "@/components/Sidebar/SidebarContext";
// import "./style.css";


// if (process.env.NODE_ENV === "development") {
//   import("../../mocks/")
//     .then(() => console.log("[MSW] Mocking enabled."))
//     .catch((err) => console.error("[MSW] Failed to start:", err));
// }

// export default async function RootLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params; // Destructure here
//   const messages = await getMessages({ locale });

//   const selectedFont =
//     (fonts.fonts as any)[locale]?.fontFamily || "Arial, sans-serif";
//   return (
//     <html lang={locale} style={{ fontFamily: selectedFont }}>
//       <body className="body bg-[#020617] text-white min-h-screen">
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <SessionProviderWrapper>
//             <SidebarProvider>
//               <header className="sticky top-0 z-50">
//                 <Navbar locale={locale} />
//               </header>
//               <div className="flex flex-col lg:flex-row nesthubmax:flex-row">
//                 <aside className="hidden lg:block lg:w-64 nesthubmax:w-72 z-[100]">
//                   <Sidebar locale={locale} />
//                 </aside>
//                 <main className="flex-1 pt-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-[#020617]">
//                   {children}
//                 </main>
//               </div>
//               <footer className="max-w-[1200px] mx-auto footer-css">
//                 <Footer locale={locale} />
//               </footer>
//               <br />
//               <br />
//               <br />
//               <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617] z-50 shadow-lg">
//                 <MobileNavBar locale={locale} />
//               </div>
//             </SidebarProvider>
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

if (process.env.NODE_ENV === "development") {
  import("../../mocks/")
    .then(() => console.log("[MSW] Mocking enabled."))
    .catch((err) => console.error("[MSW] Failed to start:", err));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // Destructure here
  const messages = await getMessages({ locale });
 

  const selectedFont =
    (fonts.fonts as any)[locale]?.fontFamily || "Arial, sans-serif";
  return (
    <html lang={locale} style={{ fontFamily: selectedFont }}>
      <body className="body bg-[#020617] text-white min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SessionProviderWrapper>
            <SidebarProvider>
              <header className="w-full sticky top-0 z-50 lg:z-[200]">
                <Navbar locale={locale} />
              </header>
              <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-4 min-h-[calc(100vh-64px)]">
                {/* Sidebar */}
                <aside className="hidden lg:block z-[100] lg:col-start-1 lg:col-end-2">
                  <Sidebar locale={locale} />
                </aside>

                {/* Main Content */}
                <main className="col-span-1 lg:col-start-2 lg:col-end-3 flex-1 pt-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-[#020617]">
                  {children}
                </main>
              </div>
              <footer className="mx-auto lg:ml-[16rem] py-4 px-4 sm:px-6 md:px-8 footer-css">
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


