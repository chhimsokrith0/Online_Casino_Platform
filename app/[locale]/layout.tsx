import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import MobileNavBar from "@/components/MobileNavBar";
import fonts from "../../messages/fonts.json";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  const selectedFont = (fonts.fonts as any)[locale]?.fontFamily || "Arial, sans-serif";

  return (
    <html lang={locale} style={{fontFamily: selectedFont}}>
      <body className="body bg-[#020617] text-white min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <header className="sticky top-0 z-[100] shadow-md">
            <Navbar locale={locale} />
          </header>
          <div className="flex flex-col lg:flex-row">
            <aside className="hidden lg:block lg:w-64 z-100">
              <Sidebar locale={locale}/>
            </aside>
            <main className="flex-1 pt-4 lg:px-8 bg-[#020617]">
              {children}
            </main>
          </div>

          <footer className="max-w-[1200px] mx-auto lg:ml-auto lg:mr-64 p-4">
            <Footer locale={locale} />
          </footer>
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617] z-50 shadow-lg">
            <MobileNavBar />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
