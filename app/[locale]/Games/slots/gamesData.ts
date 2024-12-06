import { demoGames } from "./category/demo";
import { allGames } from "./category/allGames";
import { popularGames } from "./category/popularGames";
import { newGames } from "./category/newGames";
import { cashDropGames } from "./category/cashDrop";
import { jackpotGames } from "./category/jackpots";
import { megawaysGames } from "./category/megaways";
// import { tableGames } from "./category/tableGames";


interface GameData {
    id: number;
    title: string;
    provider: string;
    image: { src: string };
    category: string;
}


export const generateGamesData = (t: (key: string) => string): GameData[] => {
    return [
        ...allGames(t),
        ...popularGames(t),
        ...newGames(t),
        ...cashDropGames(t),
        ...jackpotGames(t),
        ...megawaysGames(t),
        // ...tableGames(t),
        ...demoGames(t),
    ];
};