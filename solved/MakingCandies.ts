// https://www.hackerrank.com/challenges/making-candies/problem


function minimumPasses(m: number, w: number, p: number, n: number): number {
  // Write your code here
  let workers = w;
  let machines = m;
  let candies = 0;
  let nextProd = machines * workers;
  let step = 0;
  let minimumPasses = Math.ceil(n / (nextProd));

  while (candies < n) {
    step++;
    candies += machines * workers;
    nextProd = machines * workers;

    const stepsLeft = Math.ceil((n - candies) / nextProd);
    minimumPasses = Math.min(step + stepsLeft, minimumPasses);

    if (candies >= n) {
      // console.log({ step, candies, nextStep: nextProd, a: `${workers}*${machines}` });
      break;
    }

    if (nextProd + candies >= n) {
      // console.log({ step, candies, nextStep: nextProd, a: `${workers}*${machines}` });
      candies += nextProd;
      step++;
      break;
    }

    if (candies < p) {
      // need to skip X turns for purchase
      const addSteps = Math.max(0, Math.floor((p - candies) / nextProd - 1)) // amount to buy 1 more
      // console.log('not enough', candies, p, 'skipping from', step, 'to', addSteps, nextProd);
      candies += addSteps * nextProd;
      step += addSteps;

    } else {

      // first we need to see if we need to balance machines + workers because 1 * 3 < 2 * 2
      if (machines !== workers) {
        let diffFix = Math.abs(machines - workers);
        const am = Math.floor(candies / p);
        let purchase = Math.min(am, diffFix);

        if (machines > workers) {
          workers += purchase;
        } else {
          machines += purchase;
        }
        candies -= purchase * p;
      }


      if (candies > 0) {
        const am = Math.floor(candies / p);

        const addM = Math.floor(am / 2);
        machines += addM;
        workers += am - addM;
        candies -= am * p;
      }
      nextProd = machines * workers;
    }
  }
  return minimumPasses;
}


// console.log(minimumPasses(1, 2, 1, 60), 4);
// console.log(minimumPasses(1, 1, 6, 45), 16);
// console.log(minimumPasses(5, 1, 172, 364), 72);
// console.log(minimumPasses(5184889632, 5184889632, 20, 10000), 1);

console.log(minimumPasses(1, 100, 10000000000, 1000000000000));