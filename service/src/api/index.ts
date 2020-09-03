import { Request, Response } from "express";

import { rng } from "../services";
import { GenerateResponse } from "../services/rng";
import { logger, sha512, generateServerSeed, combine } from "../util";

// for demoing purposes only, nonce (number of results per user) and
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
    res.send(JSON.stringify(err));
  } finally {
    res.end();
  }
};

const getResult = async (req: Request, res: Response): Promise<void> => {
  const { serverSeed } = user;
  const nonce = user.results.length + 1;

  const { rangeStart, rangeEnd, selections, draws, clientSeed } = req.query;

  res.type("json");
  try {
    const combination = combine(serverSeed, clientSeed as string, nonce);
    const result = rng.generate(
      sha512(combination),
      { start: parseInt(rangeStart as string, 10), end: parseInt(rangeEnd as string, 10) },
      parseInt(selections as string, 10) || 1,
      parseInt(draws as string, 10) || 1,
    );
    res.status(200);
    res.send({
      result,
      serverSeed,
      nonce,
    });

    // this will later be done by the external service
    // providing serverSeed and nonce
    user.serverSeed = generateServerSeed();
    user.results.push(result);
    // //
  } catch (err) {
    logger.error(err);
    res.status(500);
    res.send(JSON.stringify(err));
  } finally {
    res.end();
  }
};

const verifyResult = async (req: Request, res: Response): Promise<void> => {
  const { clientSeed, serverSeed, nonce, rangeStart, rangeEnd, selections, draws } = req.query;

  res.type("json");
  try {
    const combination = combine(serverSeed as string, clientSeed as string, parseInt(nonce as string, 10));
    const result = rng.generate(
      sha512(combination),
      { start: parseInt(rangeStart as string, 10), end: parseInt(rangeEnd as string, 10) },
      parseInt(selections as string, 10) || 1,
      parseInt(draws as string, 10) || 1,
    );
    res.send({
      result,
    });
  } catch (err) {
    logger.error(err);
    res.status(500);
    res.send(JSON.stringify(err));
  } finally {
    res.end();
  }
};

export { getHashedServerSeed, getResult, verifyResult };
