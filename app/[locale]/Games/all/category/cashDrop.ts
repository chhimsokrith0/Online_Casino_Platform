import img5 from "@/assets/img-allgames/5.png";
import img26 from "@/assets/img-allgames/26.png";
import img34 from "@/assets/img-allgames/34.png";

export const cashDropGames = (t: (key: string) => string) => [
  { id: 5, title: t("mahjongWays.name"), provider: t("mahjongWays.provider"), image: img5, category: "cashDrop" },
  { id: 13, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img26 , category: "cashDrop" },
  { id: 21, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img34, category: "cashDrop" },
];
