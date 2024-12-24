

import React from "react";
import HomeContent from "@/components/HomeContent";

import { getMessages } from "next-intl/server";
import { headers } from "next/headers";

export async function generateMetadata() {
  const headerInstance = await headers();
  const locale = headerInstance.get("x-next-intl-locale") || "en"; 
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

