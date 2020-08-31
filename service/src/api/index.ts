import { Request, Response } from "express";

import { rng } from "../services";
import { logger, sha512, generateServerSeed, combine } from "../util";

const results = [];
const user = {
  serverSeed: "",
};

const getHashedServerSeed = async (_req: Request, res: Response): Promise<void> => {
  user.serverSeed = generateServerSeed();
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
  const nonce = results.length + 1;

  const { rangeStart, rangeEnd, selections, draws, clientSeed } = req.query;

  res.type("json");
  try {
    const combination = combine(serverSeed, clientSeed as string, nonce.toString());
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
    user.serverSeed = generateServerSeed();
    results.push(result);
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
    const combination = combine(serverSeed as string, clientSeed as string, nonce as string);
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
