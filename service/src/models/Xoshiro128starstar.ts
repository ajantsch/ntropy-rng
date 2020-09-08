/**
 * Xoshiro PRNG
 *
 * translated from http://prng.di.unimi.it/xoshiro128starstar.c
 */

import crypto from "crypto";

type State = {
  s0: number;
  s1: number;
  s2: number;
  s3: number;
};

export default class Xoshiro128starstar {
  private state: State;
  private value = 0;

  constructor(seed: string, secret: string) {
    if (secret.length != 512) {
      throw new Error("secret must be of length 512");
    }
    const hmac = crypto.createHmac("sha512", secret);
    hmac.update(seed);
    const seeds = this.hashToSeeds(hmac.digest("hex"));
    this.state = {
      s0: seeds[0],
      s1: seeds[1],
      s2: seeds[2],
      s3: seeds[3],
    };
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
    if (max - min > 4294967296) {
      throw new Error(`range can be max 4294967296 wide`);
    }
    this.value = this.xoshiro128();
    return this.map(this.value, min, max);
  };

  private map(value: number, min: number, max: number) {
    return (value / 4294967296) * (max - min) + min;
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
      splitHash[i] = hash.substr(startIdx, 32);
    });
    const seeds: [number, number, number, number] = [0, 0, 0, 0];
    splitHash.forEach((str, i) => {
      seeds[i] = this.mash(str) * 4294967296;
    });
    return seeds;
  }

  private rotateLeft(x: number, k: number) {
    return (x << k) | (x >> (32 - k));
  }

  private xoshiro128(): number {
    const r = this.rotateLeft(this.state.s0 * 5, 7) * 9;
    const t = this.state.s1 << 9;

    this.state.s2 ^= this.state.s0;
    this.state.s3 ^= this.state.s1;
    this.state.s1 ^= this.state.s2;
    this.state.s0 ^= this.state.s3;

    this.state.s2 ^= t;
    this.state.s3 = this.rotateLeft(this.state.s3, 11);

    return r >>> 0;
  }
}
