import { Xoshiro256starstar } from "../models";

export type GenerateResponse = {
  draws: number[][];
};

const generate = (
  userHash: string,
  serverSeed: string,
  range: { start: number; end: number },
  selection = 1,
  draws = 1,
  replacements = false,
): GenerateResponse => {
  const response: {
    draws: number[][];
  } = { draws: [] };
  if (range.start >= range.end) {
    throw new Error("range.start must be smaller than range.min");
  }
  if (range.end - range.start > Xoshiro256starstar.MAX - Xoshiro256starstar.MIN) {
    throw new Error(`range can be max ${Xoshiro256starstar.MAX - Xoshiro256starstar.MIN} wide`);
  }
  const map = (value: number, min: number, max: number) => {
    return Math.floor(
      ((value - Xoshiro256starstar.MIN) / (Xoshiro256starstar.MAX - Xoshiro256starstar.MIN)) * (max + 1 - min) + min,
    );
  };
  const rand = new Xoshiro256starstar(userHash, serverSeed);
  for (let i = 0; i < draws; i++) {
    let sel: number[] = [];
    for (let y = 0; y < selection; y++) {
      let next: number;
      if (!replacements) {
        do {
          next = map(rand.next(), range.start, range.end);
        } while (sel.includes(next));
      } else {
        next = map(rand.next(), range.start, range.end);
      }
      sel = [...sel, next];
    }
    response.draws = [...response.draws, sel];
  }
  return response;
};

export default { generate };
