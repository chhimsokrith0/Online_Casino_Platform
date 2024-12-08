
import AllGames from "./AllRtpSlotGames";

export default function Page({ params }: { params: { locale: string } }) {
  return <AllGames locale={params.locale} />;
}
