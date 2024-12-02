import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Carousel from "@/components/Carousel";
import MenuBar from "@/components/Menubar/MenuBar";
import PopularGames from "@/components/features/PopularGames";
import NewGames from "@/components/features/NewGames";
import PromotionsSection from "@/components/features/Promotions";
import LiveCasinoSection from "@/components/features/LiveCasinoSection";
import GameProviders from "@/components/features/GameProviders";
import JackpotBanner from "@/components/features/JackpotBanner";
import AllGames from "@/components/features/AllGames";
import Notification from "@/components/Notification";
import MyPromotions from "@/components/MyPromotions";

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
  const t = useTranslations("HomePage");

  return (
    <>
      <Notification />

      <Carousel />


      <section className="mb-6">
          <MyPromotions />
        </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <section className="mb-6">
          <MenuBar locale={locale} /> {/* Passing locale to MenuBar */}
        </section>

        <section className="mb-6">
          <PopularGames />
        </section>

        <section className="mb-6">
          <NewGames />
        </section>

        <section className="mb-6">
          <PromotionsSection />
        </section>

        <section className="mb-6">
          <LiveCasinoSection />
        </section>

        <section className="mb-6">
          <GameProviders />
        </section>

        <section className="mb-6">
          <JackpotBanner />
        </section>

        <section className="mb-6">
          <AllGames />
        </section>
      </div>
    </>
  );
}
