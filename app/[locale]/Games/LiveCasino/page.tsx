
import AllGames from "./AllLiveCasinoGames";

export default function Page({ params }: { params: { locale: string } }) {
  return <AllGames locale={params.locale} />;
}
