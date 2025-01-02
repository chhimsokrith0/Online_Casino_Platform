

import { headers } from "next/headers";
import { notFound } from "next/navigation";

const locales = [
  "en",
  "th",
  "hi",
  "zh",
  "kh",
  "id",
  "ms",
  "sg",
  "vi",
  "ph",
  "mm",
  "lo",
  "bn",
  "ko",
  "tw",
  "ur",
  "hk",
  "pt",
  "au",
  "ca",
];

export default async function getRequestConfig() {
  // Await the headers function
  const headerInstance = await headers();
  const locale = headerInstance.get("x-next-intl-locale") || "en"; // Use `headers` to fetch the locale

  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
}

