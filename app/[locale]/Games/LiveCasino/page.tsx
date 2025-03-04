
import AllGames from "./AllLiveCasinoGames";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <AllGames locale={locale} />;
}
