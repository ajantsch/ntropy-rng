/**
 * Xorshift32 PRNG
 *
 * based on https://github.com/zeh/prando
 *
 * http://www.jstatsoft.org/v08/i14/paper
 */

import crypto from "crypto";
import { RNG } from "./index";

export default class Xorshift32 implements RNG {
  private static INT32_MIN = -2147483648;
  private static INT32_MAX = 2147483647;

  private seed: number;
  private value: number;

  /**
   * Generate a new pseudo-random number generator based on Xorshift32 algorithm.
   *
   * @param seed - A string seed that determines which pseudo-random number sequence will be created.
   */
  constructor(seed: string, secret: string) {
    if (secret.length != 512) {
      throw new Error("secret must be of length 512");
    }
    const hmac = crypto.createHmac("sha512", secret);
    hmac.update(seed);
    this.seed = this.hashCode(hmac.digest("hex"));
    this.value = this.seed;
  }

  /**
   * Generates a pseudo-random number between min (inclusive) and max (exclusive).
   *
   * @param min - start of range (inclusive).
   * @param max - end of range (exclusive).
   * @return The generated pseudo-random number.
   */
  next(min = 0, max = 1): number {
    if (min >= max) {
      throw new Error("min must be smaller than max");
    }
    if (max - min > Xorshift32.INT32_MAX - Xorshift32.INT32_MIN) {
      throw new Error(`range can be max ${Xorshift32.INT32_MAX - Xorshift32.INT32_MIN} wide`);
    }
    this.value = this.xorshift(this.value);
    return this.map(this.value, min, max);
  }

  private map(value: number, min: number, max: number) {
    return ((value - Xorshift32.INT32_MIN) / (Xorshift32.INT32_MAX - Xorshift32.INT32_MIN)) * (max - min) + min;
  }

  private xorshift(value: number) {
    value ^= value << 13;
    value ^= value >> 17;
    value ^= value << 5;
    return value;
  }

  private hashCode(seed: string): number {
    let hash = 0;
    [...seed].forEach((_c, i) => {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
      hash = this.xorshift(hash);
    });
    return hash;
  }
}
