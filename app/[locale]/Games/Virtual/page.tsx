
import AllGames from "./AllVirtualGames";

export default function Page({ params }: { params: { locale: string } }) {
  return <AllGames locale={params.locale} />;
}
