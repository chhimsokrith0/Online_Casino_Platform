import img1 from "@/assets/img-live-casino/1.png";
import img2 from "@/assets/img-live-casino/2.jpg";
import img3 from "@/assets/img-live-casino/3.jpg";
import img4 from "@/assets/img-live-casino/4.png";
import img5 from "@/assets/img-live-casino/5.png";
import img6 from "@/assets/img-live-casino/6.png";
import img7 from "@/assets/img-live-casino/7.png";
import img8 from "@/assets/img-live-casino/8.png";


// ==============================Slots Games==================================


export const allGames = (t: (key: string) => string) => [
    { id: 1, title: t("ninjaRaccoonFrenzy.name"), provider: t("ninjaRaccoonFrenzy.provider"), image: img1, category: "allGames" },
    { id: 2, title: t("treasuresOfAztec.name"), provider: t("treasuresOfAztec.provider"), image: img2, category: "allGames" },
    { id: 3, title: t("mahjongWays2.name"), provider: t("mahjongWays2.provider"), image: img3, category: "allGames" },
    { id: 4, title: t("luckyNeko.name"), provider: t("luckyNeko.provider"), image: img4, category: "allGames" },
    { id: 5, title: t("mahjongWays.name"), provider: t("mahjongWays.provider"), image: img5, category: "allGames" },
    { id: 6, title: t("wildBountyShowdown.name"), provider: t("wildBountyShowdown.provider"), image: img6, category: "allGames" },
    { id: 7, title: t("waysOfTheQilin.name"), provider: t("waysOfTheQilin.provider"), image: img7, category: "allGames" },
    { id: 8, title: t("wildBandito.name"), provider: t("wildBandito.provider"), image: img8, category: "allGames" },
];
