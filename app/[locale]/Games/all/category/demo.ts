import img1 from "@/assets/img-allgames/1.png";
import img9 from "@/assets/img-allgames/9.png";
import img30 from "@/assets/img-allgames/30.png";

export const demoGames = (t: (key: string) => string) => [
  { id: 1, title: t("ninjaRaccoonFrenzy.name"), provider: t("ninjaRaccoonFrenzy.provider"), image: img1, category: "demo" },
  { id: 9, title: t("fortuneRabbit.name"), provider: t("fortuneRabbit.provider"), image: img9, category: "demo" },
  { id: 17, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img30, category: "demo" },
];
