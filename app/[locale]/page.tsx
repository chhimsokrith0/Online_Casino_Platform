import { getMessages } from "next-intl/server";
import HomeContent from "@/components/HomeContent";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <HomeContent locale={locale} />;
}