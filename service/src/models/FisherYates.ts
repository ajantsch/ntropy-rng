/**
 * Fisher-Yates unbiased shuffle algorithm (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 */

import { RNG } from "./index";

const fisherYatesShuffle = <T>(collection: T[], rng: RNG): T[] => {
  const shuffled = [...collection];
  let currentIndex = shuffled.length;
  let temporaryValue: T;
  let randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(rng.next(0, 1) * currentIndex);
    currentIndex -= 1;
    temporaryValue = shuffled[currentIndex];
    shuffled[currentIndex] = shuffled[randomIndex];
    shuffled[randomIndex] = temporaryValue;
  }

  return shuffled;
};

export default fisherYatesShuffle;
