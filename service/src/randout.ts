import { argv } from "yargs";

import { sha512, generateServerSeed, combine } from "./util";
import { Xorshift32, Xoshiro265starstar } from "./models";

const user = {
  serverSeed: generateServerSeed(),
  nonce: 0,
};

const count = (argv.count as number) || 10000000;
const clientseed = (argv.clientseed as string) || "abcdef";
const algo = (argv.algo as string) || "xoshiro";

process.stdout.write("#==================================================================\n");
process.stdout.write(`# ${algo}\n`);
process.stdout.write("#==================================================================\n");
process.stdout.write(`type: d\n`);
process.stdout.write(`count: ${count}\n`);
process.stdout.write(`numbit: ${32}\n`);

for (let i = 0; i < count; i++) {
  let num = "";
  switch (algo) {
    case "xoshiro":
      num = new Xoshiro265starstar(sha512(combine(user.serverSeed, clientseed, user.nonce)))
        .next(0, 4294967296)
        .toString();
      num = "          ".slice(0, 10 - num.length) + num;
      process.stdout.write(num + "\n");
      break;
    case "xorshift":
      num = new Xorshift32(sha512(combine(user.serverSeed, clientseed, user.nonce))).next(0, 4294967296).toString();
      num = "          ".slice(0, 10 - num.length) + num;
      process.stdout.write(num + "\n");
  }
  user.serverSeed = generateServerSeed();
  user.nonce = user.nonce + 1;
}
