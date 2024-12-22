
// import { getMessages } from "next-intl/server";
// import HomeContent from "@/components/HomeContent";

// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//   const { locale } = await params; // Destructure here
//   const messages: any = await getMessages({ locale });
//   const title = messages.NavbarLinks.homeTitle;

//   return {
//     title,
//   };
// }

// export default function Home({ params }: { params: { locale: string } }) {
//   const { locale } = params; // Destructure here
//   return <HomeContent locale={locale} />;
// }


import React from "react";
import HomeContent from "@/components/HomeContent";

import { getMessages } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata() {
    const headerInstance = await headers();
    const locale = headerInstance.get("x-next-intl-locale") || "en"; // Use `headers()` to fetch the locale
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks?.homeTitle || "Default Title";

  return {
    title,
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // Await the params to resolve

  return <HomeContent locale={locale} />;
}

