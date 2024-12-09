
import { allGames } from "./category/allGames";

interface GameData {
  id: number;
  title: string;
  provider: string;
  image: string;
  category: string;
}

export const generateGamesData = (t: (key: string) => string): GameData[] => {
  return [
    ...allGames(t),
  ];
};
