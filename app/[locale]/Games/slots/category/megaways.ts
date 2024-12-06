import img23 from "@/assets/img_slots/23.png";
import img24 from "@/assets/img_slots/24.png";
import img25 from "@/assets/img_slots/25.png";
import img26 from "@/assets/img_slots/26.png";
import img27 from "@/assets/img_slots/27.png";
import img28 from "@/assets/img_slots/28.png";

export const megawaysGames = (t: (key: string) => string) => [
  { id: 1, title: t("waysOfTheQilin.name"), provider: t("waysOfTheQilin.provider"), image: img23, category: "megaways" },
  { id: 2, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img24 ,category: "megaways"},
  { id: 3, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img25 , category: "megaways"},
  { id: 4, title: t("waysOfTheQilin.name"), provider: t("waysOfTheQilin.provider"), image: img26, category: "megaways" },
  { id: 5, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img27 ,category: "megaways"},
  { id: 6, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img28 , category: "megaways"},
];
