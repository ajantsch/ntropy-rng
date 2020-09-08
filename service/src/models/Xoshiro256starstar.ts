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
    const seeds = this.hashToSeeds(seed);
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
    if (min >= max) {
      throw new Error("min must be smaller than max");
    }
    if (max - min > Xoshiro265starstar.INT32_MAX - Xoshiro265starstar.INT32_MIN) {
      throw new Error(`range can be max ${Xoshiro265starstar.INT32_MAX - Xoshiro265starstar.INT32_MIN} wide`);
    }
    this.value = this.xoshiro();
    return this.map(this.value, min, max);
  };

  private map(value: Long, min: number, max: number) {
    const val32 = value.high ^ value.low;
    return Math.round(
      ((val32 - Xoshiro265starstar.INT32_MIN) / (Xoshiro265starstar.INT32_MAX - Xoshiro265starstar.INT32_MIN)) *
        (max - min) +
        min,
    );
  }

  // taken from https://github.com/skratchdot/random-seed/blob/master/index.js
  private mash(data: string): number {
    let n = 0xefc8249d;
    for (let i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      let h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  }

  private hashToSeeds(hash: string): [number, number, number, number] {
    if (hash.length != 128) {
      throw Error("hash length must be 128");
    }
    const splitHash = ["", "", "", ""];
    splitHash.forEach((_, i) => {
      const startIdx = i * 32;
      splitHash[i] = hash.substr(startIdx, 64);
    });
    const seeds: [number, number, number, number] = [0, 0, 0, 0];
    splitHash.forEach((str, i) => {
      seeds[i] = this.mash(str) * Number.MAX_SAFE_INTEGER;
    });
    return seeds;
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
