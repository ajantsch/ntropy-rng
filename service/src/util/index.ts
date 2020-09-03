import crypto from "crypto";
import logger from "./logger";

/**
 * Hashed a string
 * @param string
 * @returns {string}
 */
const sha512 = (string: string): string => crypto.createHash("sha512").update(string).digest("hex");

/**
 * Generate a 256 characters string
 * @returns {string}
 */
const generateServerSeed = (): string => crypto.randomBytes(256).toString("hex");

/**
 * Custom function for concatenating server-seed, client-seed and nonce.
 * @param serverSeed
 * @param clientSeed
 * @param nonce
 * @returns {string}
 */
const combine = (serverSeed: string, clientSeed: string, nonce: number): string => `${serverSeed}${clientSeed}${nonce}`;

export { logger, sha512, generateServerSeed, combine };
