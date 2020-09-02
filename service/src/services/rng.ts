import { Xorshift32 } from "../models";

export type GenerateResponse = {
  draws: number[][];
};

const generate = (
  userHash: string,
  range: { start: number; end: number },
  selection = 1,
  draws = 1,
): GenerateResponse => {
  const response: {
    draws: number[][];
  } = { draws: [] };
  const rand = new Xorshift32(userHash);
  for (let i = 0; i < draws; i++) {
    let sel: number[] = [];
    for (let y = 0; y < selection; y++) {
      sel = [...sel, rand.next(range.start, range.end + 1)];
    }
    response.draws = [...response.draws, sel];
  }
  return response;
};

export default { generate };
