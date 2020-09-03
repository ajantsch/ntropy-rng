/**
 * Xoshiro PRNG
 *
 * translated from http://xoshiro.di.unimi.it/xoshiro256starstar.c
 */

import Long from "@xtuc/long";

type State = {
  s0: Long;
  s1: Long;
  s2: Long;
  s3: Long;
};

export default class Xoshiro265starstar {
  private static INT32_MIN = -2147483648;
  private static INT32_MAX = 2147483647;

  private state: State;
  private value: Long;

  constructor(seed: string) {
    const seeds = this.stringToSeeds(seed);
    this.state = {
      s0: Long.fromValue(seeds[0]),
      s1: Long.fromValue(seeds[1]),
      s2: Long.fromValue(seeds[2]),
      s3: Long.fromValue(seeds[3]),
    };
    this.value = this.xoshiro();
  }

  /**
   * Generates a pseudo-random number between min (inclusive) and max (exclusive).
   *
   * @param min - start of range (inclusive).
   * @param max - end of range (exclusive).
   * @return The generated pseudo-random number.
   */
  next = (min = 0, max = 1): number => {
    this.value = this.xoshiro();
    return this.map(this.value, min, max);
  };

  private stringToSeeds(hash: string): [number, number, number, number] {
    if (hash.length % 4 !== 0) {
      throw Error("seed length must be a multiple of 4");
    }
    const splitHash = ["", "", "", ""];
    splitHash.forEach((_, i) => {
      const startIdx = i * 4;
      const length = hash.length / 4;
      splitHash[i] = hash.substr(startIdx, length);
    });

    const seeds: [number, number, number, number] = [0, 0, 0, 0];
    splitHash.forEach((str, i) => {
      [...str].forEach((c) => {
        seeds[i] = (seeds[i] << 5) - seeds[1] + c.charCodeAt(0);
        seeds[i] |= 0;
      });
    });
    return seeds;
  }

  private map(value: Long, min: number, max: number) {
    const val32 = value.high ^ value.low;
    return (
      ((val32 - Xoshiro265starstar.INT32_MIN) / (Xoshiro265starstar.INT32_MAX - Xoshiro265starstar.INT32_MIN)) *
        (max - min) +
      min
    );
  }

  private xoshiro(): Long {
    const r = this.state.s1.multiply(5).rotateLeft(7).multiply(9);
    const t = this.state.s1.shiftLeft(17);

    this.state.s2 = this.state.s2.xor(this.state.s0);
    this.state.s3 = this.state.s3.xor(this.state.s1);
    this.state.s1 = this.state.s1.xor(this.state.s2);
    this.state.s0 = this.state.s0.xor(this.state.s3);

    this.state.s2 = this.state.s2.xor(t);
    this.state.s3 = this.state.s3.rotateLeft(45);

    return r;
  }
}
