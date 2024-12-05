import img6 from "@/assets/img-allgames/6.png";
import img27 from "@/assets/img-allgames/27.png";
import img35 from "@/assets/img-allgames/35.png";

export const jackpotGames = (t: (key: string) => string) => [
  { id: 6, title: t("wildBountyShowdown.name"), provider: t("wildBountyShowdown.provider"), image: img6, category: "jackpots" },
  { id: 14, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img27, category: "jackpots" },
  { id: 22, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img35, category: "jackpots" },
];
