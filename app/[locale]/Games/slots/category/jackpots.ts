import img16 from "@/assets/img_slots/16.png";
import img17 from "@/assets/img_slots/17.png";
import img18 from "@/assets/img_slots/18.png";
import img19 from "@/assets/img_slots/19.png";
import img20 from "@/assets/img_slots/20.png";
import img21 from "@/assets/img_slots/21.png";

export const jackpotGames = (t: (key: string) => string) => [
  { id: 1, title: t("wildBountyShowdown.name"), provider: t("wildBountyShowdown.provider"), image: img16, category: "jackpots" },
  { id: 2, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img17, category: "jackpots" },
  { id: 3, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img18, category: "jackpots" },
  { id: 4, title: t("wildBountyShowdown.name"), provider: t("wildBountyShowdown.provider"), image: img19, category: "jackpots" },
  { id: 5, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img20, category: "jackpots" },
  { id: 6, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img21, category: "jackpots" },
];
