// metadata.ts
import { getMessages } from "next-intl/server";

export async function generateMetadata(locale: string) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}
