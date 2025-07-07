// https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k: number, contests: number[][]): number {
  // Write your code here
  contests.sort((a, b) => {
    const [valA, importantA] = a;
    const [valB, importantB] = b;
    if (importantA !== importantB) {
      return importantB - importantA;
    } else if (importantA === 1) {
      return valB - valA;
    } else {
      return valA - valB;
    }
  });

  let passes = k;
  let luck = 0;
  for (let i = 0; i < contests.length; i++) {
    const [val, important] = contests[i];
    if (important && passes > 0) {
      luck += val;
      passes--;
    } else if (!important) {
      luck += val;
    } else {
      luck -= val;
    }
  }
  return luck;
}


console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]), 29);