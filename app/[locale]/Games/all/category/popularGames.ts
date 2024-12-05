import img3 from "@/assets/img-allgames/3.png";
import img11 from "@/assets/img-allgames/11.png";
import img32 from "@/assets/img-allgames/32.png";

export const popularGames = (t: (key: string) => string) => [
  { id: 3, title: t("mahjongWays2.name"), provider: t("mahjongWays2.provider"), image: img3, category: "popularGames" },
  { id: 11, title: t("fortuneOx.name"), provider: t("fortuneOx.provider"), image: img11, category: "popularGames" },
  { id: 19, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img32, category: "popularGames" },
];
