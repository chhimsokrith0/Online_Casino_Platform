import { allGames } from "./category/allGames";

interface GameData {
  id: number;
  title: string;
  provider: string;
  image: string; // Expecting a string here
  category: string;
  percentage: string;
}

export const generateGamesData = (t: (key: string) => string): GameData[] => {
  return allGames(t).map((game) => ({
    ...game,
    image: game.image.src, // Extract the `src` property to match the `GameData` type
  }));
};
