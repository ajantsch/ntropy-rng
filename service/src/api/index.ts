import { Request, Response } from "express";

import { random } from "../services";
import { logger } from "../util";

const getRandom = async (req: Request, res: Response): Promise<void> => {
  res.type("json");

  try {
    const rnd = random();
    res.status(200);
    res.send(rnd);
  } catch (err) {
    logger.error(err);
    res.status(500);
    res.send(JSON.stringify(err));
  } finally {
    res.end();
  }
};

export { getRandom };
