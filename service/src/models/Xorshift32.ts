/**
 * Xorshift32 PRNG
 *
 * based on https://github.com/zeh/prando
 *
 * http://www.jstatsoft.org/v08/i14/paper
 */

export default class Xorshift32 {
  private static INT32_MIN = -2147483648;
  private static INT32_MAX = 2147483647;
  private static TRIPLES = [
    [1, 3, 10],
    [1, 5, 16],
    [1, 5, 19],
    [1, 9, 29],
    [1, 11, 6],
    [1, 11, 16],
    [1, 19, 3],
    [1, 21, 20],
    [1, 27, 27],
    [2, 5, 15],
    [2, 5, 21],
    [2, 7, 7],
    [2, 7, 9],
    [2, 7, 25],
    [2, 9, 15],
    [2, 15, 17],
    [2, 15, 25],
    [2, 21, 9],
    [3, 1, 14],
    [3, 3, 26],
    [3, 3, 28],
    [3, 3, 29],
    [3, 5, 20],
    [3, 5, 22],
    [3, 5, 25],
    [3, 7, 29],
    [3, 13, 7],
    [3, 23, 25],
    [3, 25, 24],
    [3, 27, 11],
    [4, 3, 17],
    [4, 3, 27],
    [4, 5, 15],
    [5, 3, 21],
    [5, 7, 22],
    [5, 9, 7],
    [5, 9, 28],
    [5, 9, 31],
    [5, 13, 6],
    [5, 15, 17],
    [5, 17, 13],
    [5, 21, 12],
    [5, 27, 8],
    [5, 27, 21],
    [5, 27, 25],
    [5, 27, 28],
    [6, 1, 11],
    [6, 3, 17],
    [6, 17, 9],
    [6, 21, 7],
    [6, 21, 13],
    [7, 1, 9],
    [7, 1, 18],
    [7, 1, 25],
    [7, 13, 25],
    [7, 17, 21],
    [7, 25, 12],
    [7, 25, 20],
    [8, 7, 23],
    [8, 9, 23],
    [9, 5, 1],
    [9, 5, 25],
    [9, 11, 19],
    [9, 21, 16],
    [10, 9, 21],
    [10, 9, 25],
    [11, 7, 12],
    [11, 7, 16],
    [11, 17, 13],
    [11, 21, 13],
    [12, 9, 23],
    [13, 3, 17],
    [13, 3, 27],
    [13, 5, 19],
    [13, 17, 15],
    [14, 1, 15],
    [14, 13, 15],
    [15, 1, 29],
    [17, 15, 20],
    [17, 15, 23],
    [17, 15, 26],
  ];

  private seed: number;
  private value: number;

  /**
   * Generate a new pseudo-random number generator based on Xorshift32 algorithm.
   *
   * @param seed - A string seed that determines which pseudo-random number sequence will be created.
   */
  constructor(seed: string) {
    this.seed = this.hashCode(seed);
    this.value = this.seed;
  }

  /**
   * Generates a pseudo-random number between min (inclusive) and max (exclusive).
   *
   * @param min - start of range (inclusive).
   * @param max - end of range (exclusive).
   * @return The generated pseudo-random number.
   */
  public next(min = 0, max = 1): number {
    this.value = this.xorshift(this.value);
    return this.map(this.value, min, max);
  }

  private map(val: number, min: number, max: number) {
    return ((val - Xorshift32.INT32_MIN) / (Xorshift32.INT32_MAX - Xorshift32.INT32_MIN)) * (max - min) + min;
  }

  private xorshift(value: number) {
    const tripleIndex = Math.round(this.map(value >> 1, 0, Xorshift32.TRIPLES.length + 1));
    value ^= value << Xorshift32.TRIPLES[tripleIndex][0];
    value ^= value >> Xorshift32.TRIPLES[tripleIndex][0];
    value ^= value << Xorshift32.TRIPLES[tripleIndex][0];
    return value;
  }

  private hashCode(seed: string): number {
    let hash = Xorshift32.INT32_MAX;
    [...seed].forEach((c, i) => {
      hash = this.xorshift(((hash << 5) - hash + seed.charCodeAt(i)) | 0);
    });
    return hash;
  }
}
