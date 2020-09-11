/**
 * Xoshiro PRNG
 *
 * translated from http://xoshiro.di.unimi.it/xoshiro256starstar.c
 */

import crypto from "crypto";
import Long from "@xtuc/long";
import { RandomNumberGenerator } from "./index";

type State = {
  s0: Long;
  s1: Long;
  s2: Long;
  s3: Long;
};

export default class Xoshiro256starstar implements RandomNumberGenerator {
  private static MIN = -2147483648;
  private static MAX = 2147483647;

  private state: State;
  private value: Long = Long.ZERO;

  constructor(seed: string, secret: string) {
    if (secret.length != 512) {
      throw new Error("secret must be of length 512");
    }
    const hmac = crypto.createHmac("sha512", secret);
    hmac.update(seed);
    const seeds = this.hashToSeeds(hmac.digest("hex"));
    this.state = {
      s0: Long.fromValue(seeds[0]),
      s1: Long.fromValue(seeds[1]),
      s2: Long.fromValue(seeds[2]),
      s3: Long.fromValue(seeds[3]),
    };
  }

  /**
   * Generates a pseudo-random number between -2147483648 and 2147483647.
   *
   * if min and max parameters are given, a pseudo-random floating point number
   * within this range is returned.
   *
   * @param min - The minimum number of the range (inclusive)
   * @param max - The maximum number of the range (exclusive)
   * @return The generated pseudo-random number.
   */
  next = (): number => {
    this.value = this.xoshiro256();
    return this.value.high ^ this.value.low;
  };

  /**
   * Generates a pseudo-random floating point number within the given range.
   *
   * @param min - The minimum number of the range (inclusive)
   * @param max - The maximum number of the range (exclusive)
   * @return The generated pseudo-random number.
   */
  nextFloat(min = 0, max = 1): number {
    if (min >= max) {
      throw new RangeError("min must be smaller than max");
    }
    if (max - min > Xoshiro256starstar.MAX - Xoshiro256starstar.MIN) {
      throw new RangeError(`range can be max ${Xoshiro256starstar.MAX - Xoshiro256starstar.MIN} wide`);
    }
    return (
      (((this.value.high ^ this.value.low) - Xoshiro256starstar.MIN) /
        (Xoshiro256starstar.MAX - Xoshiro256starstar.MIN)) *
        (max - min) +
      min
    );
  }

  /**
   * Generates a pseudo-random integer within the given range
   *
   * @param min - The minimum integer value to return (inclusive)
   * @param max - The maximum integer value to return (inclusive)
   */
  nextInt(min = 0, max = 1): number {
    if (min >= max) {
      throw new RangeError("min must be smaller than max");
    }
    if (max - min > Xoshiro256starstar.MAX - Xoshiro256starstar.MIN) {
      throw new RangeError(`range can be max ${Xoshiro256starstar.MAX - Xoshiro256starstar.MIN} wide`);
    }
    this.value = this.xoshiro256();
    return Math.floor(
      (((this.value.high ^ this.value.low) - Xoshiro256starstar.MIN) /
        (Xoshiro256starstar.MAX - Xoshiro256starstar.MIN)) *
        (max + 1 - min) +
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

  private xoshiro256(): Long {
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
