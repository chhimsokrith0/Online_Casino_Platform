import img36 from "@/assets/img_slots/36.png";
import img37 from "@/assets/img_slots/37.webp";
import img38 from "@/assets/img_slots/38.png";
import img39 from "@/assets/img_slots/39.png";
import img40 from "@/assets/img_slots/40.png";
import img41 from "@/assets/img_slots/41.png";

export const popularGames = (t: (key: string) => string) => [
  { id: 1, title: t("mahjongWays2.name"), provider: t("mahjongWays2.provider"), image: img36, category: "popularGames" },
  { id: 2, title: t("fortuneOx.name"), provider: t("fortuneOx.provider"), image: img37, category: "popularGames" },
  { id: 3, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img38, category: "popularGames" },
  { id: 4, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img39, category: "popularGames" },
  { id: 5, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img40, category: "popularGames" },
  { id: 6, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img41, category: "popularGames" },
];
