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
