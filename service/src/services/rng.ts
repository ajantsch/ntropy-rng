import prando from "prando";

const generate = (
  userHash: string,
  range: { start: number; end: number },
  selection = 1,
  draws = 1,
): {
  draws: number[][];
} => {
  const response: {
    draws: number[][];
  } = { draws: [] };
  const rand = new prando(userHash);
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
