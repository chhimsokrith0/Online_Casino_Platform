import img4 from "@/assets/img-allgames/4.png";
import img12 from "@/assets/img-allgames/12.png";
import img33 from "@/assets/img-allgames/33.png";

export const newGames = (t: (key: string) => string) => [
  { id: 4, title: t("luckyNeko.name"), provider: t("luckyNeko.provider"), image: img4 ,category: "newGames"},
  { id: 12, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img12 ,category: "newGames" },
  { id: 20, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img33, category: "newGames" },
];
