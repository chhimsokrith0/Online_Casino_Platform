import AllGames from "./AllLottoGames";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // Await the `params`

  return <AllGames locale={locale} />;
}