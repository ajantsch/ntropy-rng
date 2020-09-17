import { Request, Response } from "express";
import { serializeError } from "serialize-error";

import { rng } from "../services";
import { GenerateResponse } from "../services/rng";
import { logger, sha512, generateServerSeed, combine } from "../util";

// for demo purposes only, nonce (number of results per user) and
// the user's server seed will be provided to the rng and updated
// after they were provided
const user: {
  results: GenerateResponse[];
  serverSeed: string;
} = {
  results: [],
  serverSeed: generateServerSeed(),
};

const getHashedServerSeed = async (_req: Request, res: Response): Promise<void> => {
  res.type("text");
  try {
    res.send(sha512(user.serverSeed));
  } catch (err) {
    logger.error(err);
    res.status(500);
    res.send(err.message);
  } finally {
    res.end();
  }
};

const getResult = async (req: Request, res: Response): Promise<void> => {
  const { serverSeed } = user;
  const nonce = user.results.length + 1;

  const { rangeStart, rangeEnd, selections, draws, replacements, clientSeed } = req.query;

  res.type("json");

  if (parseInt(rangeStart as string, 10) === NaN || parseInt(rangeEnd as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new RangeError("rangeStart and rangeEnd must be numeric values")));
    res.end();
    return;
  }

  if (parseInt(selections as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new TypeError("selections must be numeric value")));
    res.end();
    return;
  }

  if (parseInt(draws as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new TypeError("draws must be numeric value")));
    res.end();
    return;
  }

  if (typeof clientSeed !== "string") {
    res.status(500);
    res.send(serializeError(new TypeError("clientSeed must be alphanumeric value")));
    res.end();
    return;
  }

  try {
    const combination = combine(serverSeed, clientSeed, nonce);
    const result = rng.generate(
      sha512(combination),
      serverSeed,
      { start: parseInt(rangeStart as string, 10), end: parseInt(rangeEnd as string, 10) },
      parseInt(selections as string, 10) || 1,
      parseInt(draws as string, 10) || 1,
      !!replacements && (replacements as string) === "true",
    );
    res.status(200);
    res.send({
      result,
      serverSeed,
      nonce,
    });

    // this will later be done by the external service
    // providing serverSeed and nonce
    // user.serverSeed = generateServerSeed();
    user.results.push(result);
    // //
  } catch (err) {
    console.warn(err);
    logger.error(err);
    res.status(500);
    res.send(serializeError(err));
  } finally {
    res.end();
  }
};

const verifyResult = async (req: Request, res: Response): Promise<void> => {
  const { clientSeed, serverSeed, nonce, rangeStart, rangeEnd, selections, draws, replacements } = req.query;

  if (parseInt(rangeStart as string, 10) === NaN || parseInt(rangeEnd as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new RangeError("rangeStart and rangeEnd must be numeric values")));
    res.end();
    return;
  }

  if (parseInt(selections as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new TypeError("selections must be numeric value")));
    res.end();
    return;
  }

  if (parseInt(draws as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new TypeError("draws must be numeric value")));
    res.end();
    return;
  }

  if (parseInt(nonce as string, 10) === NaN) {
    res.status(500);
    res.send(serializeError(new TypeError("nonce must be numeric value")));
    res.end();
    return;
  }

  if (typeof serverSeed !== "string") {
    res.status(500);
    res.send(serializeError(new TypeError("serverSeed must be alphanumeric value")));
    res.end();
    return;
  }

  if (typeof clientSeed !== "string") {
    res.status(500);
    res.send(serializeError(new TypeError("clientSeed must be alphanumeric value")));
    res.end();
    return;
  }

  res.type("json");
  try {
    const combination = combine(serverSeed, clientSeed, parseInt(nonce as string, 10));
    const result = rng.generate(
      sha512(combination),
      serverSeed,
      { start: parseInt(rangeStart as string, 10), end: parseInt(rangeEnd as string, 10) },
      parseInt(selections as string, 10) || 1,
      parseInt(draws as string, 10) || 1,
      !!replacements && (replacements as string) === "true",
    );
    res.send({
      result,
    });
  } catch (err) {
    logger.error(err);
    res.status(500);
    res.send(serializeError(err));
  } finally {
    res.end();
  }
};

export { getHashedServerSeed, getResult, verifyResult };
