import img30 from "@/assets/img_slots/30.png";
import img31 from "@/assets/img_slots/31.png";
import img32 from "@/assets/img_slots/32.png";
import img33 from "@/assets/img_slots/33.png";
import img34 from "@/assets/img_slots/34.png";
import img35 from "@/assets/img_slots/35.webp";

export const newGames = (t: (key: string) => string) => [
  { id: 1, title: t("luckyNeko.name"), provider: t("luckyNeko.provider"), image: img30 ,category: "newGames"},
  { id: 2, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img31 ,category: "newGames" },
  { id: 3, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img32, category: "newGames" },
  { id: 4, title: t("luckyNeko.name"), provider: t("luckyNeko.provider"), image: img33 ,category: "newGames"},
  { id: 5, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img34 ,category: "newGames" },
  { id: 6, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img35, category: "newGames" },
];
