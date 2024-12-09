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
  image: string; // Expecting a string for the image
  category: string;
}

export const generateGamesData = (t: (key: string) => string): GameData[] => {
  const transformGames = (games: any[]) =>
    games.map((game) => ({
      ...game,
      image: game.image.src, // Extract `src` from `image`
    }));

  return [
    ...transformGames(allGames(t)),
    ...transformGames(popularGames(t)),
    ...transformGames(newGames(t)),
    ...transformGames(cashDropGames(t)),
    ...transformGames(jackpotGames(t)),
    ...transformGames(megawaysGames(t)),
    // ...transformGames(tableGames(t)),
    ...transformGames(demoGames(t)),
  ];
};
