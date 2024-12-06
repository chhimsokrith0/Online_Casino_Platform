import img3 from "@/assets/img_slots/3.png";
import img4 from "@/assets/img_slots/4.png";
import img5 from "@/assets/img_slots/5.png";
import img6 from "@/assets/img_slots/6.png";
import img7 from "@/assets/img_slots/7.png";
import img8 from "@/assets/img_slots/8.png";



export const cashDropGames = (t: (key: string) => string) => [
    { id: 1, title: t("mahjongWays.name"), provider: t("mahjongWays.provider"), image: img3, category: "cashDrop" },
    { id: 2, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img4 , category: "cashDrop" },
    { id: 3, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img5, category: "cashDrop" },
    { id: 4, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img6, category: "cashDrop" },
    { id: 5, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img7, category: "cashDrop" },
    { id: 6, title: t("ganeshaFortune.name"), provider: t("ganeshaFortune.provider"), image: img8, category: "cashDrop" },
  ];
  