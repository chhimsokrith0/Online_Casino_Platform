
import AllGames from "./AllSportGames";

export default function Page({ params }: { params: { locale: string } }) {
  return <AllGames locale={params.locale} />;
}
