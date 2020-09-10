# ntropy rng service

## available rng models:

- xorshift32
- xoshiro128\*\*
- xoshiro256\*\*

Change `src/service/rng.ts` to select a different one (xoshiro256\*\* is used by the service by default).

## output to txt file

- `yarn build`
- `node ./dist/randout.js --algo xoshiro256 --clientseed abcdef --count 10000000 > randout-xoshiro256.txt`

  This creates a file `randout-xoshiro256.txt` with 10.000.000 values generated with the xoshiro256\*\* algorithm.

  It can be used with the [dieharder](https://webhome.phy.duke.edu/~rgb/General/dieharder.php) test suite: `dieharder -g 202 -f randout-xoshiro256.txt -a`

  Dieharder can be installed via homebrew: `brew install dieharder`
