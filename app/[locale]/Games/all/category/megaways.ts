import img7 from "@/assets/img-allgames/7.png";
import img28 from "@/assets/img-allgames/28.png";
import img36 from "@/assets/img-allgames/36.png";

export const megawaysGames = (t: (key: string) => string) => [
  { id: 7, title: t("waysOfTheQilin.name"), provider: t("waysOfTheQilin.provider"), image: img7, category: "megaways" },
  { id: 15, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img28 ,category: "megaways"},
  { id: 23, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img36 , category: "megaways"},
];
