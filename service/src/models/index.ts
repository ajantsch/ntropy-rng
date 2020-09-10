export interface RNG {
  next: (min?: number, max?: number) => number;
}

export { default as Xorshift32 } from "./Xorshift32";
export { default as Xoshiro128starstar } from "./Xoshiro128starstar";
export { default as Xoshiro256starstar } from "./Xoshiro256starstar";

export { default as FisherYatesShuffle } from "./FisherYates";
