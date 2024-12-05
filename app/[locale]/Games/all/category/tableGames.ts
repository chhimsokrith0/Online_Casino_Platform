import img8 from "@/assets/img-allgames/8.png";
import img29 from "@/assets/img-allgames/29.png";
import img37 from "@/assets/img-allgames/37.png";

export const tableGames = (t: (key: string) => string) => [
  { id: 8, title: t("wildBandito.name"), provider: t("wildBandito.provider"), image: img8 , category: "tableGames"},
  { id: 16, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img29, category: "tableGames" },
  { id: 24, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img37, category: "tableGames" },
];
