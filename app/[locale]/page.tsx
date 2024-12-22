
import { getMessages } from "next-intl/server";
import HomeContent from "@/components/HomeContent";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params; // Destructure here
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params; // Destructure here
  return <HomeContent locale={locale} />;
}
