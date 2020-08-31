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
  for (let i = 0; i < draws; i++) {
    let sel: number[] = [];
    for (let y = 0; y < selection; y++) {
      sel = [...sel, Math.floor(Math.random() * (range.end - range.start + 1) + range.start)];
    }
    response.draws = [...response.draws, sel];
  }
  return response;
};

export default { generate };
